const name = 'Renan';
const weigth = 102.4;    // In kilogram
const height = 1.78;    // In meters
const gender = 'Male';

const bmi = weigth / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you are overweigth.`);
} else {
    console.log(`${name}, you are not overweigth.`);
}