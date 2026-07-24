// №3 Данные пользователя
const person = {
  firstName: 'Islam',
  secondName: 'Mankiev',
  age: 31,
  height: 1.80,
  weight: 70,
  job: 'System Administrator',
  mail: 'mankiev94@yandex.ru',
  married: true,
}

// №4 Данные авто
const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Silver',
  engine: '2.5L',
  transmission: 'Automatic',
  price: 25000,
  speed: '200km/h',
}

car.owner = person;

console.log(`Владелец авто: ${car.owner.firstName}`);

// №5 Проверка скорости авто
function checkSpeedAuto (speed) {
  if (car.speed) {
    console.log(car);
    return;
  } else { 
  car.speed = '200km/h';
  console.log(`Скорость авто: ${car.speed}`);
}
}

checkSpeedAuto(car)

// №6 Функция выводящая два аргумента(объект и свойство объекта)
function getObject(person, name) {
  console.log(person, name['name'])
}
getObject(person, name.firstName)
