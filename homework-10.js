import { productCard } from './product-cards.js'

const productList = document.getElementById('product-list')
const products = document.querySelector('.products')

productCard.forEach(product => {
  const productCopy = productList.content.cloneNode(true)
  productCopy.querySelector('.card__image').src = product.cardImage
  productCopy.querySelector('.card__category').textContent = product.cardCategory
  productCopy.querySelector('.card__name').textContent = product.cardName
  productCopy.querySelector('.card__description').textContent = product.cardDescription
  productCopy.querySelector('.card__structure').textContent = product.cardStructure
  productCopy.querySelector('.structure__list').textContent = product.structureList
  productCopy.querySelector('.card__price').textContent = product.cardPrice
  products.appendChild(productCopy)
})
  
const keyAndName = productCard.reduce ((acc, card) => {
  acc.push({
  [productCard.cardName] : productCard.cardDescription
  })
  
  return acc
}, []);

const getCardsAmount = () => {
  const amount = Number(prompt("Сколько карточек отобразить? От 1 до 5"))
  
  if (amount >= 1 && amount <= 5) {
    return amount
  }
  
  return ('Введите значение от 1 до 5')
}

amount = getCardsAmount()

let cards = productCard.slice(0, amount)
