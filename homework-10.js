import { productCard } from './cards.js'

const productList = document.getElementById('product-list');
const products = document.querySelector('.products');

const renderCards = (cards) => {
  cards.forEach(product => {
  const productCopy = productList.content.cloneNode(true);
  productCopy.querySelector('.card__image').src = product.cardImage;
  productCopy.querySelector('.card__category').textContent = product.cardCategory;
  productCopy.querySelector('.card__name').textContent = product.cardName;
  productCopy.querySelector('.card__description').textContent = product.cardDescription;
  productCopy.querySelector('.card__structure-title').textContent = product.cardStructure;
  productCopy.querySelectorAll('.structure__list li').forEach((li, index) => {
    li.textContent = product.structureList[index];
    return li
  });
  productCopy.querySelector('.card__price b').textContent = product.cardPrice[0];
  productCopy.querySelector('.card__price span').textContent =
  `${product.cardPrice[1]} ${product.cardPrice[2]}`;
  products.appendChild(productCopy);
})
};

const productNamesAndDescription = productCard.reduce ((acc, card) => {
  acc.push({
  [card.cardName] : card.cardDescription
  });
  
  return acc
}, []);

const getCardsAmount = () => {
  const amount = Number(prompt("Сколько карточек отобразить? От 1 до 5"))
  
  if (Number.isInteger(amount) && amount >= 1 && amount <= 5) {
    return amount;
  };
  
  alert('Введите значение от 1 до 5');
  return 0;
}

const amount = getCardsAmount();

renderCards(productCard.slice(0, amount));
