const courts: CourtData[] = [
  {
    id: "Court1",
    name: "Great Pyramid of Giza",
    address: "Great Pyramid of Giza, Egypt",
    lat: 29.9792,
    lng: 31.1342
  },
  {
    id: "Court2",
    name: "Statue of Liberty",
    address: "Liberty Island, New York, United States",
    lat: 40.6892,
    lng: -74.0445
  },
  {
    id: "Court3",
    name: "Eiffel Tower",
    address: "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
    lat: 48.8584,
    lng: 2.2945
  },
  {
    id: "Court4",
    name: "Taj Mahal",
    address: "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
    lat: 27.1751,
    lng: 78.0421
  },
  {
    id: "Court5",
    name: "Sydney Opera House",
    address: "Bennelong Point, Sydney NSW 2000, Australia",
    lat: -33.8568,
    lng: 151.2153
  },
  {
    id: "Court6",
    name: "Christ the Redeemer",
    address: "Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ, Brazil",
    lat: -22.9519,
    lng: -43.2105
  },
  {
    id: "Court7",
    name: "Great Wall of China",
    address: "Huairou District, China",
    lat: 40.4319,
    lng: 116.5704
  },
  {
    id: "Court8",
    name: "Colosseum",
    address: "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
    lat: 41.8902,
    lng: 12.4922
  },
  {
    id: "Court9",
    name: "Machu Picchu",
    address: "08680, Peru",
    lat: -13.1631,
    lng: -72.5450
  },
  {
    id: "Court10",
    name: "Petra",
    address: "Petra District, Jordan",
    lat: 30.3285,
    lng: 35.4444
  }
];

const sports: SportData[] = [
  {
    id: "Sport1",
    name: "Tennis",
    icon: "tennis-icon",
    skillLevel: "Intermediate"
  },
  {
    id: "Sport2",
    name: "Soccer",
    icon: "soccer-icon",
    skillLevel: "Beginner"
  },
  {
    id: "Sport3",
    name: "Basketball",
    icon: "basketball-icon",
    skillLevel: "Advanced"
  },
  {
    id: "Sport4",
    name: "Badminton",
    icon: "badminton-icon",
    skillLevel: "Intermediate"
  },
  {
    id: "Sport5",
    name: "Golf",
    icon: "golf-icon",
    skillLevel: "Advanced"
  },
  {
    id: "Sport6",
    name: "Baseball",
    icon: "baseball-icon",
    skillLevel: "Beginner"
  },
  {
    id: "Sport7",
    name: "Volleyball",
    icon: "volleyball-icon",
    skillLevel: "Intermediate"
  },
  {
    id: "Sport8",
    name: "Cricket",
    icon: "cricket-icon",
    skillLevel: "Advanced"
  },
  {
    id: "Sport9",
    name: "Rugby",
    icon: "rugby-icon",
    skillLevel: "Beginner"
  },
  {
    id: "Sport10",
    name: "Table Tennis",
    icon: "table-tennis-icon",
    skillLevel: "Intermediate"
  }
];

// Generate Users Data

export function generateUsersData(): UserData[] {
  return [
    {
      id: "User1",
      name: "John Doe",
      pronouns: "He/Him",
      imgUrl: "https://i.pravatar.cc/300?img=1",
      bio: "I love playing Tennis. Been playing for 5 years.",
      sports: [
        {
          id: "Sport1",
          name: "Tennis",
          icon: "tennis-ball",
          skillLevel: "3"
        },
        // You can add more sports here
      ],
      courts: [
        {
          id: "Court1",
          name: "Great Pyramid of Giza",
          address: "Great Pyramid of Giza, Egypt",
          lat: 44.41611704341544,
          lng: -79.7036701416235
        },
        // You can add more courts here
      ],
      availability: [
        [true, false, true],
        // Add more days availability here
      ]
    },
    // Add more users here
  ];
}

// Generate Connection Data
export function generateConnectionData(): ConnectionData[] {
  return [
    {
      id: "Connection1",
      connectionId: "User1",
      userId: "LoggedUser1",
      lastMessage: {
        id: "Message1",
        senderId: "User1",
        receiverId: "LoggedUser1",
        content: "Hello there!",
        timestamp: 1622462400000 // this corresponds to May 31, 2021
      },
    },
    // Add more connections here
  ];
}

// Generate Logged User Data
export function generateLoggedUserData(): LoggedUserData {
  return {
    id: "LoggedUser1",
    name: "Jane Doe",
    pronouns: "She/Her",
    imgUrl: "https://i.pravatar.cc/300?img=2",
    bio: "I love playing Badminton. Been playing for 7 years.",
    sports: [
      {
        id: "Sport2",
        name: "Badminton",
        icon: "badminton-ball",
        skillLevel: "4"
      },
      // You can add more sports here
    ],
    courts: [
      {
        id: "Court2",
        name: "Statue of Liberty",
        address: "Statue of Liberty, USA",
        lat: 40.6892,
        lng: -74.0445
      },
      // You can add more courts here
    ],
    availability: [
      [false, true, false],
      // Add more days availability here
    ],
    email: "jane.doe@example.com",
    connections: generateConnectionData(),
  };
}
