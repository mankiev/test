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
    console.log(`Скорость авто: ${car.speed}`);
    return;
  } else { 
  car.speed = '200km/h';
  console.log(`Добавлена корость авто: ${car.speed}`);
}
}

checkSpeedAuto(car)

// №6 Функция выводящая два аргумента(объект и свойство объекта)
function getObject(person, name) {
  console.log(name)
}
getObject(person, person.firstName)


//№7 Массив с названиями продуктов
const products = ['tomato', 'potato', 'pepper', 'carrot']

// №8 Массив из объектов
const vehicle = [
  {
    category: car,
    brand: 'bmw',
    model: 'm5',
    year: 2026
  },
  {
    category: 'minivan',
    brand: 'toyota',
    model: 'alphard 30',
    year: 2024
  },
  {
    category: car,
    brand: 'mercedes',
    model: 'w222',
    year: 2020
  }
]

vehicle.push(
  {
    category: 'minivan',
    brand: 'volswagen',
    model: 'caravan',
    year: 2022
  }
)

// №9 Объединение двух массивов

const cars = [
  {
    category: car,
    brand: 'volvo',
    model: 's90',
    year: 2016
  },
  {
    category: car,
    brand: 'cadillac',
    model: 'escalade',
    year: 2024
  }
]

concatVehicle = [...vehicle, ...cars]

console.log(concatVehicle)

// №10 Метод map
function isRareVehicle (vehicle) {
  vehicle.map (v => v.year < 2000)
}

isRareVehicle(concatVehicle)