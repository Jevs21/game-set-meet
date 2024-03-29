import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

// const courts: CourtData[] = [
//   {
//     id: "Court1",
//     name: "Great Pyramid of Giza",
//     address: "Great Pyramid of Giza, Egypt",
//     lat: 29.9792,
//     lng: 31.1342
//   },
//   {
//     id: "Court2",
//     name: "Statue of Liberty",
//     address: "Liberty Island, New York, United States",
//     lat: 40.6892,
//     lng: -74.0445
//   },
//   {
//     id: "Court3",
//     name: "Eiffel Tower",
//     address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
//     lat: 48.8584,
//     lng: 2.2945
//   },
//   {
//     id: "Court4",
//     name: "Taj Mahal",
//     address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
//     lat: 27.1751,
//     lng: 78.0421
//   },
//   {
//     id: "Court5",
//     name: "Sydney Opera House",
//     address: "Bennelong Point, Sydney NSW 2000, Australia",
//     lat: -33.8568,
//     lng: 151.2153
//   },
//   {
//     id: "Court6",
//     name: "Christ the Redeemer",
//     address: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil",
//     lat: -22.9519,
//     lng: -43.2105
//   },
//   {
//     id: "Court7",
//     name: "Great Wall of China",
//     address: "Huairou District, China",
//     lat: 40.4319,
//     lng: 116.5704
//   },
//   {
//     id: "Court8",
//     name: "Colosseum",
//     address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
//     lat: 41.8902,
//     lng: 12.4922
//   },
//   {
//     id: "Court9",
//     name: "Machu Picchu",
//     address: "08680, Peru",
//     lat: -13.1631,
//     lng: -72.5450
//   },
//   {
//     id: "Court10",
//     name: "Petra",
//     address: "Petra District, Jordan",
//     lat: 30.3285,
//     lng: 35.4444
//   }
// ];


const pronouns: string[] = [
  "He/Him",
  "She/Her",
  "They/Them",
  "Ze/Zir",
  "Ze/Hir",
  "Xe/Xem",
  "Xe/Xyr",
];

const names: string[] = [
  "John Doe",
  "Emily Smith",
  "Michael Brown",
  "Olivia Johnson",
  "Robert Davis",
  "Isabella Miller",
  "William Wilson",
  "Sophia Taylor",
  "David Anderson",
  "Ava Thomas",
  "Joseph Jackson",
  "Mia Harris",
  "James Martin",
  "Charlotte Thompson",
  "Daniel Rodriguez",
  "Amelia Martinez",
  "Matthew Garcia",
  "Harper Gonzalez",
  "Anthony Hernandez",
  "Ella Perez"
];

const bios: string[] = [
  "I love playing Tennis. Been playing for 5 years.",
  "Outdoor enthusiast with a knack for extreme sports. I've bungee jumped, skydived, and mountain biked. The adrenaline rush is life!",
  "Basketball has been my sanctuary for years. There's nothing like the sound of the swoosh as the ball hits nothing but net.",
  "Runner and triathlon participant. Completed 3 full marathons and training for my first Ironman. The journey never stops.",
  "Former collegiate soccer player. Coaching kids now, passing on the love of the game. Also, a big fan of European football leagues.",
  "Swimming is my passion. Whether it's a relaxing swim at the beach or intense laps in the pool, I find peace in the water.",
  "Golf enthusiast - I love the challenge of improving my game and meeting new people on the course. Here for any golfing tips and friendly banter!",
  "Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out.",
  "Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out. Fitness fanatic who loves to lift weights and enjoys high-intensity workouts. Also a certified yoga teacher to balance it all out.",
  "Experienced mountaineer, conquered some of the highest peaks. The journey to the summit, for me, is a metaphor for life.",
  "Huge fan of motorsports, Formula 1 in particular. The speed, the technology, the strategy - it's like chess at 200 mph!"
];


function getRandomSports(n: number = 3) {
  const masterSports = generateMasterSportsList();
  let sports = [];
  for (let i = 0; i < masterSports.length; i++) {
    const sk: SkillLevelData = masterSports[i].skillLevels[Math.floor(Math.random() * masterSports[i].skillLevels.length)];
    sports.push({
      id: masterSports[i].id,
      name: masterSports[i].name,
      icon: masterSports[i].icon,
      skillLevel: sk.name,
    });
  }

  const shuffled = sports.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}
// function getRandomCourts(n: number = 3) {
//   const shuffled = courts.sort(() => 0.5 - Math.random());
//   return shuffled.slice(0, n);
// }
function getRandomPronoun() {
  const shuffled = pronouns.sort(() => 0.5 - Math.random());
  return shuffled[0];
}
function getRandomBio() {
  const shuffled = bios.sort(() => 0.5 - Math.random());
  return shuffled[0];
}
function getRandomName() {
  const shuffled = names.sort(() => 0.5 - Math.random());
  return shuffled[0];
}
function getRandomAvailability() {
  let avail: boolean[][] = [];
  for (let i = 0; i < 7; i++) {
    avail.push([(Math.random() > 0.5), (Math.random() > 0.5), (Math.random() > 0.5)]);
  }
  return avail;
}

// Generate Users Data

export function generateUsersData(n: number = 10): UserData[] {
  let users: UserData[] = [];
  for (let i = 0; i < n; i++) {
    users.push({
      id: `User${i + 1}`,
      name: getRandomName(),
      pronouns: getRandomPronoun(),
      imgUrl: `https://i.pravatar.cc/300`,
      bio: getRandomBio(),
      sports: getRandomSports(),
      mutualAvailability: getRandomAvailability(),
      mutualAvailabilityStr: "Mon, Wed, Fri 5-7pm",
      distance: Math.floor(Math.random() * 100),
    });
  }
  return users;
}

// Generate Connection Data
export function generateConnectionData(n: number = 5): ConnectionData[] {
  const connections: ConnectionData[] = [];
  for (let i = 1; i < n; i++) {
    const conn_type = (Math.random() > 0.5) ? 'indi' : 'team';
    const users = generateUsersData((conn_type == 'indi') ? 1 : 4);

    connections.push({
      id: `Connection${i + 1}`,
      c_type: conn_type,
      name: (conn_type == 'indi') ? users[0].name : `${users[0].name.split(" ")[0]} and ${users[1].name.split(" ")[0]}`,
      imgUrl: (conn_type == 'indi') ? users[0].imgUrl : `https://i.pravatar.cc/300`,
      fromId: "LoggedUser1",
      toId: `User${i + 1}`,
      lastMessage: {
        id: `Message${i + 1}`,
        senderId: `User${i + 1}`,
        receiverId: "LoggedUser1",
        content: "Hello there!",
        timestamp: 1622462400000 // this corresponds to May 31, 2021
      },
    });
  }
  return connections;
}

// Generate Logged User Data
export function generateLoggedUserData(): LoggedUserData {
  return {
    id: "LoggedUser1",
    name: "Jane Doe",
    pronouns: "She/Her",
    imgUrl: "https://i.pravatar.cc/300?img=2",
    bio: "I love playing Badminton. Been playing for 7 years.",
    sports: getRandomSports(),
    mutualAvailability: getRandomAvailability(),
    email: "jane.doe@example.com",
    connections: generateConnectionData(),
    mutualAvailabilityStr: 'Mon, Wed, Fri 6:00 PM - 8:00 PM',
    distance: 0,
  };
}

export function generateTeamList(): TeamData[] {
  const teams: TeamData[] = [];

  for (let i = 0; i < 5; i++) {
    teams.push({
      id: `Team${i + 1}`,
      name: `Team ${i + 1}`,
      memberIds: [`User${i + 1}`, `User${i + 2}`, `User${i + 3}`, `User${i + 4}`],
      memberNames: [getRandomName(), getRandomName(), getRandomName(), getRandomName()],
      imgUrl: `https://i.pravatar.cc/300?img=${i + 1}`,
      bio: getRandomBio(),
      sports: getRandomSports(),
      mutualAvailability: getRandomAvailability(),
      mutualAvailabilityStr: 'Mon, Wed, Fri 6:00 PM - 8:00 PM',
      distance: Math.floor(Math.random() * 100),
    });
  }

  return teams;
}

const masterSports = [
  "Aikido",
  "Archery",
  "Badminton",
  "Baseball",
  "Basketball",
  "Biathlon",
  "Billiards",
  "Bobsleigh",
  "Boxing",
  "Canoeing",
  "Cricket",
  "Croquet",
  "Curling",
  "Cycling",
  "Darts",
  "Disc Golf",
  "Diving",
  "Dodgeball",
  "Equestrian",
  "Fencing",
  "Field Hockey",
  "Figure Skating",
  "Football (American)",
  "Football (Soccer)",
  "Frisbee",
  "Golf",
  "Gymnastics",
  "Handball",
  "Ice Hockey",
  "Judo",
  "Karate",
  "Kayaking",
  "Kickboxing",
  "Kitesurfing",
  "Lacrosse",
  "Luge",
  "Marathons",
  "Mixed Martial Arts (MMA)",
  "Motocross",
  "Mountain Biking",
  "Netball",
  "Orienteering",
  "Paddleboarding",
  "Paintball",
  "Parkour",
  "Polo",
  "Quidditch",
  "Racquetball",
  "Rowing",
  "Rugby",
  "Sailing",
  "Skateboarding",
  "Skiing",
  "Skydiving",
  "Snooker",
  "Snowboarding",
  "Softball",
  "Squash",
  "Surfing",
  "Swimming",
  "Table Tennis",
  "Taekwondo",
  "Tennis",
  "Track and Field",
  "Triathlon",
  "Ultimate Frisbee",
  "Volleyball",
  "Wakeboarding",
  "Water Polo",
  "Weightlifting",
  "Wrestling",
  "Yoga",
  "Zumba"
];

export function generateMasterSportsList(): SportInformationData[] {
  let sports: SportInformationData[] = [];
  for (let i = 0; i < masterSports.length; i++) {
    sports.push({
      id: `Sport${i + 1}`,
      name: masterSports[i],
      icon: `${masterSports[i].toLowerCase()}-icon`,
      skillLevels: [
        {
          id: `SkillLevel${i}_1`,
          name: "Beginner",
          otherNames: ["Beginner", "Novice", "Newbie"],
          description: "I'm new to this sport and would like to learn the basics.",
          order: 0,
        },
        {
          id: `SkillLevel${i}_2`,
          name: "Intermediate",
          otherNames: ["Intermediate", "Amateur", "Casual"],
          description: "I've played this sport before and would like to improve.",
          order: 1,
        },
        {
          id: `SkillLevel${i}_3`,
          name: "Advanced",
          otherNames: ["Advanced", "Expert", "Pro"],
          description: "I'm very experienced in this sport and would like to play competitively.",
          order: 2,
        },
      ],
      information: masterSports[i] + " information"
    });
  }
  return sports;
}
