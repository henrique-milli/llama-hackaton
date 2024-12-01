import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

// Read specializations from file
const specializations = fs.readFileSync('utils/specializations.txt', 'utf-8').split('\n').filter(Boolean);

// Function to generate a random doctor
const generateDoctor = (specialization, gender) => {
  const isMale = gender === 'male';
  return {
    uid: uuidv4(),
    name: isMale ? faker.person.firstName('male') + ' ' + faker.person.lastName() : faker.person.firstName('female') + ' ' + faker.person.lastName(),
    picture: isMale ? '/john.jpg' : '/jane.jpg',
    distance: (Math.random() * 39 + 1).toFixed(1), // Random distance between 1 and 40 km
    specialization: specialization,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1), // Random rating between 3.5 and 5
    address: faker.location.streetAddress() + ', ' + faker.location.city()
  };
};

// Generate doctors for each specialization
const doctors = specializations.flatMap(specialization => [
  generateDoctor(specialization, 'male'),
  generateDoctor(specialization, 'female')
]);

// Write the generated doctors to a JSON file
fs.writeFileSync('utils/doctors.json', JSON.stringify(doctors, null, 2));

console.log('Doctors JSON generated successfully.');
