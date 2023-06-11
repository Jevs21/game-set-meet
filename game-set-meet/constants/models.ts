interface UserData {
  id: string;
  name: string;
  pronouns: string;
  imgUrl: string;
  bio: string;
  sports: SportData[];
  courts: CourtData[];
  availability: boolean[][];
  availabilityStr: string;
  connections: number;
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

