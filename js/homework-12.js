const phonesData = [
  {
    name: 'phone',
    brand: 'Nokia',
    price: 800,
    camera: '64mp'
  },
  {
    name: 'phone',
    brand: 'Sony Erricson',
    price: 700,
    camera: '64mp'
  },
  {
    name: 'phone',
    brand: 'Huawei',
    price: 600,
    camera: '44mp'
  }
];

const laptopsData = [
  {
    name: 'laptop',
    brand: 'Acer',
    price: 1800,
    ram: '16Gb'
  },
  {
    name: 'laptop',
    brand: 'Samsung',
    price: 1700,
    ram: '16GB'
  },
  {
    name: 'laptop',
    brand: 'Toshiba',
    price: 1300,
    ram: '8Gb'
  }
]

//Родительский класс
class Product {
  constructor(product) {
    this.name = product.name;
    this.brand = product.brand;
    this.price = product.price;
  }
  
  getInfo() {
    console.log(`Товар: ${this.name}, Брэнд: ${this.brand}, Цена: ${this.price}`)
  }
};

//Наследуемый класс от Product
class Phone extends Product {
  constructor (product) {
    super(product);
    this.camera = product.camera;
  }
};

//Наследуемый класс от Product
class Laptop extends Product {
  constructor (product) {
    super(product);
    this.ram = product.ram;
  }
};

//проходимся по массиву и сохраняем каждый объект в экземпляр
const phones = phonesData.map(phone => new Phone(phone));
const laptops = laptopsData.map(laptop => new Laptop(laptop));

//получаем данные из массива объектов
phones.forEach(phone => phone.getInfo());
laptops.forEach(laptop => laptop.getInfo());