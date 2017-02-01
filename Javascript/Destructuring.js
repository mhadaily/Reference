const city = ['Cape Town', 987007, 'capetown.gov.za'];

const [name, population, website] = city;

console.log(name, population, website);
// Output: "Cape Town 987007 capetown.gov.za"


const city = {
  x: 'Cape Town',
  y: 987007,
  z: 'capetown.gov.za',
};

const { x, y, z } = city;
const cityAndCountry = `${x}, South Africa`

console.log(cityAndCountry);
// Output: "Cape Town, South Africa"


const city = {
  x: 'Cape Town',
  y: '987007',
  z: 'capetown.gov.za',
};

const {
    x: name,
    y: population,
    z: website
} = city;

const area = `${name}, South Africa`;

console.log(area);
// Output: "Cape Town, South Africa"



// Destructuring Deeply Nested Values
const city = {
  name: 'Cape Town',
  population: 987007,
  website: 'capetown.gov.za',
  weather: {
    temperature: {
      celcius: 19,
      fahrenheit: 66
    },
    windSpeed: {
      kph: 27,
      mph: 17
    },
    humidity: '77%'
  }
};

const { weather: { temperature }} = city;

console.log(temperature);
// Output: { celcius: 19, fahrenheit: 66 }




//Setting Defaults Through Destructuring
const city = {
  name: 'Cape Town',
  population: 987007,
  website: 'capetown.gov.za',
};

const {
    name,
    population,
    website = 'No Website Available',
    country = 'South Africa',
} = city;

const cityAndCountry = `${name}, ${country}`;

console.log(website);
// Output: "capetown.gov.za"

console.log(cityAndCountry);
// Output: "Cape Town, South Africa"