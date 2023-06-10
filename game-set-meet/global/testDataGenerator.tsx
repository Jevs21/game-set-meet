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

// Generate the test user data
function generateTestUserData() {
  const sports = ['Tennis', 'Football', 'Basketball', 'Baseball', 'Volleyball'];
  const userSports = sports.map(sport => ({
    id: randomString(10),
    name: sport,
    skillLevel: randomNumber(1, 5).toString(),
  }));

  const userCourts = new Array(randomNumber(1, 3)).fill(null).map(() => ({
    id: randomString(10),
    name: `Court ${randomString(5)}`,
    address: `Street ${randomNumber(1, 100)}`,
    lat: randomNumber(-90, 90),
    lng: randomNumber(-180, 180),
  }));

  const availability = new Array(7).fill(null).map(() => new Array(3).fill(null).map(() => randomBoolean()));

  const availabilityStr = availability.map(day => day.map(hour => (hour ? '1' : '0')).join('')).join('\n');

  const userData = {
    id: randomString(10),
    name: `User ${randomString(5)}`,
    imgUrl: `https://i.pravatar.cc/300`,
    // imgUrl: `https://example.com/avatar/${randomString(10)}.png`,
    bio: `Bio ${randomString(20)}`,
    sports: userSports,
    courts: userCourts,
    availability,
    availabilityStr,
    connections: randomNumber(0, 100),
  };

  return userData;
}

console.log(generateTestUserData());


export default generateTestUserData;
