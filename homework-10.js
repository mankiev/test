import { productCard } from './cards.js'

const productList = document.getElementById('product-list');
const products = document.querySelector('.products');

const renderCards = (cards) => {
  cards.forEach(product => {
   const productCopy = productList.content.cloneNode(true);
   const imgCard = productCopy.querySelector('.card__image');
    imgCard.src = `img/${product.img.name}.png`;
    imgCard.alt = product.img.alt;
    imgCard.width = product.img.width;
    imgCard.height = product.img.height;
   productCopy.querySelector('.card__category').textContent = product.category;
   productCopy.querySelector('.card__name').textContent = product.name;
   productCopy.querySelector('.card__description').textContent = product.description;
   const compoundList = productCopy.querySelector('.compound__list')
   product.compound.forEach(compound => {
    const li = document.createElement('li');
    li.className = 'compound__item';
    li.textContent = compound;
    compoundList.appendChild(li);
   });
   products.appendChild(productCopy)
})
};

const productInfo = productCard.reduce ((acc, card) => {
  acc.push({
    [card.name] : card.description
  });
  
  return acc
}, []);

console.log(productInfo);

const getCardsAmount = () => {
  const amount = Number(prompt("Сколько карточек отобразить? От 1 до 5"))
  
  if (Number.isInteger(amount) && amount >= 1 && amount <= 5) {
    return amount;
  };
  
  alert('Введите значение от 1 до 5');
  return getCardsAmount ();
}

const amount = getCardsAmount();
const showCards = productCard.slice(0, amount)

renderCards(showCards);
