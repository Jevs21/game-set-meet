// Function to generate a random string
function randomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate a random number between min and max
function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random boolean
function randomBoolean() {
  return Math.random() < 0.5;
}

const sports = ['Tennis', 'Badminton', 'Basketball'];

let famousPlaces = [
  {
    name: "Great Pyramid of Giza",
    latitude: 44.41611704341544,
    longitude: -79.7036701416235
  },
  {
    name: "Statue of Liberty",
    latitude: 40.6892,
    longitude: -74.0445
  },
  {
    name: "Eiffel Tower",
    latitude: 48.8584,
    longitude: 2.2945
  },
  {
    name: "Taj Mahal",
    latitude: 27.1751,
    longitude: 78.0421
  },
  {
    name: "Sydney Opera House",
    latitude: -33.8568,
    longitude: 151.2153
  },
  {
    name: "Christ the Redeemer",
    latitude: -22.9519,
    longitude: -43.2105
  },
  {
    name: "Great Wall of China",
    latitude: 40.4319,
    longitude: 116.5704
  },
  {
    name: "Colosseum",
    latitude: 41.8902,
    longitude: 12.4922
  },
  {
    name: "Machu Picchu",
    latitude: -13.1631,
    longitude: -72.5450
  },
  {
    name: "Petra",
    latitude: 30.3285,
    longitude: 35.4444
  }
];


// Array of first names and pronouns
const firstNames = [
  { name: 'John', pronouns: 'He/Him' },
  { name: 'Jane', pronouns: 'She/Her' },
  { name: 'Alex', pronouns: 'They/Them' },
  // Add more as needed
];

// Array of last names
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis'];

// Array of common park names
const parkNames = ['Central Park', 'Liberty Park', 'Lincoln Park', 'Riverside Park', 'Sunset Park'];

// Function to generate random full names and corresponding pronouns
function generateFullNameAndPronouns() {
  const firstName = firstNames[randomNumber(0, firstNames.length - 1)];
  const lastName = lastNames[randomNumber(0, lastNames.length - 1)];
  return {
    name: `${firstName.name} ${lastName}`,
    pronouns: firstName.pronouns,
  };
}

// Function to generate a random park name
function generateParkName() {
  return parkNames[randomNumber(0, parkNames.length - 1)];
}

// Function to generate a random small bio
function generateBio() {
  const bioTemplates = [
    `I love playing ${sports[randomNumber(0, sports.length - 1)]}. Been playing for ${randomNumber(1, 20)} years.`,
    `Looking for someone to play ${sports[randomNumber(0, sports.length - 1)]} with.`,
    `I play ${sports[randomNumber(0, sports.length - 1)]} every ${['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][randomNumber(0, 6)]}.`,
  ];
  return bioTemplates[randomNumber(0, bioTemplates.length - 1)];
}

// Generate the test user data
function generateTestUserData() {
  // Generate sports data
  const userSports = sports.map(sport => ({
    id: randomString(10),
    name: sport,
    icon: 'tennis-ball',
    skillLevel: randomNumber(1, 5).toString(),
  }));

  // Generate court data
  const userCourts = [];
  for (let i = 0; i < 3; i++) {
    const randomPlace = famousPlaces[randomNumber(0, famousPlaces.length - 1)];
    userCourts.push({
      id: randomString(10),
      name: randomPlace.name,
      address: randomPlace.name,
      lat: randomPlace.latitude,
      lng: randomPlace.longitude,
    });
  }

  const fullNameAndPronouns = generateFullNameAndPronouns();
  const availability = new Array(7).fill(null).map(() => new Array(3).fill(null).map(() => randomBoolean()));

  const availabilityStr = availability.map(day => day.map(hour => (hour ? '1' : '0')).join('')).join('\n');

  const userData = {
    id: randomString(10),
    name: fullNameAndPronouns.name,
    pronouns: fullNameAndPronouns.pronouns,
    imgUrl: `https://i.pravatar.cc/300`,
    bio: generateBio(),
    sports: userSports,
    courts: userCourts,
    availability,
    availabilityStr,
    connections: randomNumber(0, 100),
  };

  return userData;
}

export default generateTestUserData;
