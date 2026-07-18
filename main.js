const cards  = document.querySelectorAll('.card')
const changeColorCard = document.querySelector('#change-color-card')
const yellowColorHash = '#ffff00'

const card = document.querySelector('.card')
const changeColorFirstCard = document.querySelector('#change-color-first-card')
const blueColorHash = '#0000ff'

changeColorCard.addEventListener('click', () => {
  cards.forEach(wsw => {
    wsw.style.backgroundColor = yellowColorHash
  })
})

changeColorFirstCard.addEventListener('click', () => {
  card.style.backgroundColor = blueColorHash
})  

const openGoogleButton = document.querySelector('#open-google')
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы хотите открыть Google?');
  
  if (answer === true) {
  window.open('https://google.com');
  } else {
    return;
  }
}

//Вывести сообщение в консоль

const outputConsoleButton = document.querySelector('#output-console')
outputConsoleButton.addEventListener('click', () => outputConsoleLog('Hi there!'));

function outputConsoleLog(message) {
  alert(message);
  console.log(message);
}

// Получить данные заголовка страницы и вывести их в консоль

const getTitle = document.getElementById('get-title');
getTitle.addEventListener('mouseover', () => {
  console.log(getTitle.textContent);
});

// Меняем цвет кнопки

const buttonRed = '#ff0000';
const buttonGreen = '#00ff00';

const changeColorButton = document.querySelector('#change-color-button');
changeColorButton.addEventListener('click', () => {changeColorButton.classList.toggle('active'),
  console.log(changeColorButton.classList.contains('active'))});

