// Абстрактный класс
class Drink {
  //Инкапсуляция, скрытие свойств от пользователя
  #currentTemperature;
  #targetTemperature;
  #cookingTime
  
  constructor(name, size, price, currentTemperature, targetTemperature, cookingTime) {
    //Делаем класс абстрактным. Нельзя будет создать объект через new Drink.
    if (new.target === Drink) {
      throw new Error("Drink is an abstract class");
    }
    this.name = name;
    this.size = size;
    this.price = price;
    this.#currentTemperature = currentTemperature;
    this.#targetTemperature = targetTemperature;
    this.#cookingTime = cookingTime;
  }
  
  getInfo() {
    return (
      `
       Название: ${this.name}
       Размер: ${this.size}
       Цена: ${this.price} $
      `
    )
  }
  
  getTemperature() {
    return this.#currentTemperature;
  }
  
  setTemperature(gradus) {
    this.#currentTemperature = gradus;
  }
  
  //Инкапсуляция, скрытие метода от пользователя
  #cookDrink() {
    this.setTemperature(this.#targetTemperature) //вызываем и передаем целевую температуру
  }
  
  serveDrink() {
    console.log(`Ваш напиток: "${this.name}" будет готов через ${this.#cookingTime} минут.`)
    setTimeout(() => {
      this.#cookDrink()
      console.log('Ваш напиток готов, благодарим за покупку!')
    }, this.#cookingTime * 60 * 1000); //преобразуем минуты в милисекунды
  }
};

//Наследник - Кофе
class Coffee extends Drink {
  constructor(name, size, price, currentTemperature, targetTemperature, cookingTime, grains, milk) {
    super(name, size, price, currentTemperature, targetTemperature, cookingTime);
    this.grains = grains;
    this.milk = milk;
  }
  
  //Полиморфизм, берем родительский метод и добавляем данные наследника.
  getInfo() {
    return (
      `${super.getInfo()} Зерна: ${this.grains},
       Молоко: ${this.milk}
      `
    )
  }
};

//Наследник - Чай
class Tea extends Drink {
  constructor(name, size, price, currentTemperature, targetTemperature, cookingTime, typeOfTea) {
    super(name, size, price, currentTemperature, targetTemperature, cookingTime);
    this.typeOfTea = typeOfTea;
  }
  
  getInfo() {
    return (
      `${super.getInfo()} Вид чая: ${this.typeOfTea}
      `
    )
  }
};

//Наследник - Сок
class Juice extends Drink {
  constructor(name, size, price, currentTemperature, targetTemperature, cookingTime, fruits) {
    super(name, size, price, currentTemperature, targetTemperature, cookingTime);
    this.fruits = fruits;
  }
  
  getInfo() {
    return (
      `${super.getInfo()} Фрукты: ${this.fruits}
      `
    )
  }
};

class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  
  getInfo() {
    return(
      `
       Кафе: "${this.name}"
       Наш адрес: "${this.location}"
      `
    )
  }
  
  orderDrink(drink) {
    if (!(drink instanceof Drink)) {
      throw new Error('Можно заказать только напиток')
    }
    
    drink.serveDrink()
  }
};

const cappuccino = new Coffee('Капучино', '150 мл.', 50, 20, 70, 5, 'Арабика', 'Взбитое молоко');
const blackTea = new Tea('Черный чай', '200 мл.', 40, 20, 90, 3, 'Цейлонский');
const orangeJuice = new Juice('Апельсиновый сок', '300 мл.', 60, 20, 10, 6, 'Апельсины');
const cafe = new Cafe('Портефино', 'г. Назрань, ул. Московская, д. 39.');
const drinks = [cappuccino, blackTea, orangeJuice];

console.log(cafe.getInfo())

drinks.forEach(drink => {
  console.log(drink.getInfo())
})

cafe.orderDrink(cappuccino);
cafe.orderDrink(blackTea);
cafe.orderDrink(orangeJuice);
