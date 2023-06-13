interface UserData {
  id: string;
  name: string;
  pronouns: string;
  imgUrl: string;
  bio: string;
  sports: SportData[];
  courts: CourtData[];
  availability: boolean[][];
}
interface SportData {
  id: string;
  name: string;
  icon: string;
  skillLevel: string;
}
interface CourtData {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface LoggedUserData extends UserData {
  email: string;
  connections: ConnectionData[];
}

interface ConnectionData {
  id: string;
  connectionId: string;
  userId: string;
  lastMessage: MessageData;
}

interface MessageData {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
}

