
interface ProfileData {
  id: string;
  name: string;
  imgUrl: string;
  bio: string;
  sports: SportData[];
  mutualAvailability: boolean[][];
  mutualAvailabilityStr: string;
  distance: number;
}

interface UserData extends ProfileData {
  pronouns?: string;
  sex?: string;
  age?: number;
}

interface LoggedUserData extends UserData {
  email: string;
  connections: ConnectionData[];
}

interface TeamData extends ProfileData {
  memberIds: string[];
  memberNames: string[];
}

interface ConnectionData {
  id: string;
  c_type: 'indi' | 'team';
  name: string;
  imgUrl: string;
  fromId: string;
  toId: string;
  lastMessage: MessageData;
}

interface SportData {
  id: string;
  name: string;
  icon: string;
  skillLevel: string;
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
  otherNames: string[];
  description: string;
  order: number;
}
