// №2 Фильтрация чисел от 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filterNumber = numbers.filter (number => number > 4)

console.log(filterNumber)


// №3Проверка наличия сущности
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
]

const checkVehicle = vehicles.find(vehicle => vehicle.type === 'car')

console.log(checkVehicle)

// №4 Реверс элементов массива
const reverseNumbers = (number) => number.reverse();
const reverseVehicles = (vehicle) => vehicle.reverse();

console.log(reverseNumbers(numbers))
console.log(reverseVehicles(vehicles))

// № 7 Вывести в консоль массив .com
import {users} from "./comments";

const filterEmail = users.filter(user => user.email.includes('.com'));

console.log(filterEmail);