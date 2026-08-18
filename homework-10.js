productCard = [
  {
    cardImage: url("./img/moisturizing-mousse.png"),
    cardCategory: 'для нормальной кожи',
    cardName: 'Увлажняющий мусс',
    cardDescription: 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
    cardStructure: 'Состав:',
    structureList: 'активные натуральные комплексы' +
    'витамины С, А, РР, В И Е' +
    'солнцезащитные компоненты',
    cardPrice: 'Цена' + 
    2750 + '₽'
  }
]

const productList = document.getElementById('product-list')
const products = document.getElementById('products')

productCard.forEach(product => {
  const productCopy = productList.content.cloneNode(true)
})