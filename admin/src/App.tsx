import { ThemeProvider } from "@suid/material";
import { mainTheme } from "./global/theme";
import "./global/App.module.css"

import { Routes, Route } from '@solidjs/router';

import { createEffect, lazy, onMount } from "solid-js";
import { useGlobalContext } from "./global/store";

const Home = lazy(() => import("./views/Home"));

export default function App() {
  const { setIsMobile } = useGlobalContext();

  // onMount(() => loadLocalStorage());
  const PageResize = () => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // Set isMobile to true if screen width is less than 768px
    };
    window.addEventListener('resize', handleResize); // Add event listener for window resize
    handleResize(); // Call handleResize function on component mount to set initial value of isMobile
    return () => {
      window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
    };
  }

  createEffect(() => PageResize());

  onMount(() => {
    // loadLocalStorage();
    console.log("Mounted")
    PageResize();
  })
  return (
    <ThemeProvider theme={mainTheme}>
      <div class="App">
        <Routes>
          <Route path="/" component={Home} />
          {/* <Route path="/admin" component={Admin} /> */}
        </Routes>
      </div>
    </ThemeProvider>
  );
}
