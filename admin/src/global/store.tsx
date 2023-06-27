import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { v4 as uuidv4 } from 'uuid';

interface ContextProps {
  isMobile: Accessor<boolean>,
  setIsMobile: Setter<boolean>,
  prevRoute: Accessor<string>,
  setPrevRoute: Setter<string>,
  uuid: Accessor<string>,
  setUuid: Setter<string>,
  setCurFocusEl: Setter<string>,
  hasSubmitted: Accessor<boolean>,
  setHasSubmitted: Setter<boolean>,
  getAnalytics: Function,
  logPosition: Function,
  logInteraction: Function,
  logQueue: Function,
  logVisit: Function,
  submitContact: Function,
  apiCall: Function,
  navigate: Function,
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {

  const navigateFunc = useNavigate();
  const location = useLocation();
  
  const [isMobile, setIsMobile]     = createSignal(false);
  const [prevRoute, setPrevRoute]   = createSignal("/");
  const [uuid, setUuid]             = createSignal("");
  const [intQueue, setIntQueue]     = createSignal<InteractionData[]>([]);
  const [posQueue, setPosQueue]     = createSignal<PositionData[]>([]);
  const [curFocusEl, setCurFocusEl] = createSignal("");
  const [hasSubmitted, setHasSubmitted] = createSignal(false);

  const navigate = (params) => {
    setPrevRoute(location.pathname);
    navigateFunc(params);
  }

  const calcRegion = (p: number) => {
    if (p < 0.20) {
      return "intro";
    } else if (p < 0.50) {
      return "about";
    } else if (p < 0.80) {
      return "projects";
    } else {
      if (hasSubmitted()) {
        return "analytics";
      } else {
        return "contact";
      }
    }
  }

  const logPosition = (pos) => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = scrollTop / scrollHeight;

    const data: PositionData = {
      uuid: uuid(),
      dt: new Date().toISOString(),
      scroll_pos: pos,
      scroll_percent: scrollPercentage,
      region: calcRegion(scrollPercentage),
      focus_el_name: curFocusEl()
    }
    setPosQueue([...posQueue(), data]);
  }

  const logInteraction = (name: string) => {
    const data: InteractionData = {
      uuid: uuid(),
      el_name: name,
      dt: new Date().toISOString()
    }
    setIntQueue([...intQueue(), data]);
  }

  const createUser = async () => {
    const new_uuid = uuidv4();
    setUuid(new_uuid);
    localStorage.setItem('uuid', new_uuid);

    try {
      const response = await apiCall("createUser.php", { uuid: uuid() });
      if (response.status == "success") {
        return true;
      } else {
        console.log("Error creating user")
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }

  const checkUserContact = async (u) => {
    try {
      const response = await apiCall("checkUser.php", { uuid: u });
      if ('contact' in response) {
        setHasSubmitted((response.contact == 1) ? true : false);
      } else {
        setHasSubmitted(false);
      }
    } catch (e) {
      console.log(e);
    }
  }


  const logVisit = async () => {
    // get uuid from localstorage and create a new user if necessary
    const u = localStorage.getItem('uuid');
    const ref = (document.referrer && document.referrer.length > 0) ? document.referrer : "";
    // log visit
    const visitData = {
      uuid: (u || ""),
      dt: new Date().toISOString(),
      user_agent: navigator.userAgent,
      referrer: ref,
      screen_width: screen.width,
      screen_height: screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      device_pixel_ratio: window.devicePixelRatio,
    }
    
    try {
      const response = await apiCall("logVisit.php", visitData);
      console.log(response);
      if (response.status == "success") {
        return true;
      } else {
        console.log("Error logging visit")
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }

    return false;
  }

  const logQueue = async () => {
    const interactions: InteractionData[] = intQueue();
    const positions: PositionData[] = posQueue();

    if (interactions.length > 0 || positions.length > 0) {
      console.log("Logging queue");
      try {
        const response = await apiCall("setAnalytics.php", {
          uuid: uuid(),
          interactions: interactions,
          positions: positions
        });
        
        if (response.status == "success") {
          setIntQueue([]);
          setPosQueue([]);
          return true;
        } else {
          console.log("Error logging queue")
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    }
    return false;
  }


  const getAnalytics = async () => {
    const response = await apiCall("getAnalytics.php");
    return response;
  }

  const submitContact = async (name: string, email: string, message: string) => {
    try {
      const response = await apiCall("submitContact.php", {
        uuid: uuid(),
        name: name,
        email: email,
        message: message
      });

      if (response.success) {
        setHasSubmitted(true);
        return true;
      } else {
        console.log("Error submitting contact")
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }


  const apiCall = (endpoint: string, body: object = {}) => {
    let url = `scripts/${endpoint}`;
  
    const d = {
      method: "POST",
      headers: { 'content-type': 'application/json;charset=UTF-8' },
      body: JSON.stringify(body)
    }
  
    return fetch(url, d)
      .then(response => {
        if (!response.ok) {
          if (response.status == 401) { // Unauthorized
            return response.json();
          }
        }
        return response.json();
      });
  };

  
	return (
		<GlobalContext.Provider value={{ 
      isMobile, setIsMobile,
      prevRoute, setPrevRoute,
      uuid, setUuid,
      setCurFocusEl,
      hasSubmitted, setHasSubmitted,
      logPosition, logInteraction,
      getAnalytics,
      logQueue,
      logVisit,
      submitContact,
      apiCall, 
      navigate
    }}>
			{props.children}
		</GlobalContext.Provider>
	);
}

export const useGlobalContext = () => useContext(GlobalContext)!;