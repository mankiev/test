// Температура в городе
function weather (city, temperature) {
  console.log(`The temperature in ${city} is ${temperature} degrees.`);
}

weather('Nazran', '35°C');

// Скорость света
const LIGHT_SPEED = 299792458;
function checkSpeed (speed) {
  if (speed > LIGHT_SPEED) {
    console.log('The speed is greater than the speed of light.');
  }
  else if (speed < LIGHT_SPEED) {
    console.log('The speed is less than the speed of light.');
  }
  else {
    console.log('The speed is equal to the speed of light.');
  }
}

checkSpeed(+prompt('Enter the speed in m/s:'));

// Покупка продуктов
const product = 'Помидоры';
const price = 5;
const cash = +prompt('Сколько кэша брат?');

function buyProduct (budjet) {
  if (budjet >= price) {
    console.log(`${product} приобретен. Спасибо за покупку!.`);
  }
  else {
    console.log(`Вам не хватает ${Math.abs(price - budjet)}, пополните баланс`);
  }
}

buyProduct (cash);