import { users } from "./comments.js";

// №2 Фильтрация чисел от 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterNumber = numbers.filter (number => number > 4);

console.log(filterNumber);


// // №3Проверка наличия сущности
const vehicles = [
  {
    type: 'car',
    model: 'camry',
    year: '2015'
  },
  {
    type: 'bicycle',
    model: 'harley davidson',
    year: '2025'
  },
  {
    type: 'minivan',
    model: 'elysion',
    year: '2005'
  }
];

const checkVehicle = vehicles.find(vehicle => vehicle.type === 'car');

console.log(checkVehicle);

// // №4 Реверс элементов массива
const reverseNumbers = (number) => number.reverse();
const reverseVehicles = (vehicle) => vehicle.reverse();

console.log(reverseNumbers(numbers));
console.log(reverseVehicles(vehicles));

// № 7 Вывести в консоль массив .com
const filterEmail = users.filter(user => {
  return user.email.endsWith('.com')
});

console.log(filterEmail);

// // № 8 Поменять id пользователей
const changeUserPostId = users.map(user => {
  return {
    postId: user.id <= 5 ? 2 : 1
  }
})

console.log(changeUserPostId);

// // № 9 Массив из id и name пользователей
const userIdAndName = users.map(user => {
  return {
    id: user.id,
    name: user.name
  }
})

console.log(userIdAndName);

// // № 10 Добавляем свойство isInvalid
const isInvalidProperty = users.map(user => {
  return {
    isInvalid: user.body.length > 180 ? true : false
  }
});

console.log(isInvalidProperty);

// // № 11 Массив почт
const accumEmailsWithReduce = users.reduce( (acc, user) => {
  return acc + user.email
}, '');

console.log(accumEmailsWithReduce);

const accumEmailsWithMap = users.map(user => user.email);

console.log(accumEmailsWithMap);

// // № 12 Массив к строке
const usersToString = users.toString();

console.log(usersToString);