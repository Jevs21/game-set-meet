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
  userId: string;
  connectionUsers: UserData[];
  lastMessage: MessageData;
}

interface MessageData {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
}

interface SportInformationData {
  id: string;
  name: string;
  icon: string;
  skillLevels: SkillLevelData[];
  information: string;
}

interface SkillLevelData {
  id: string;
  name: string;
  otherName: string;
  description: string;
  order: number;
}
