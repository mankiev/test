const cards  = document.querySelectorAll('.card')
const changeCardColor = document.querySelector('#change-card-color')
const yellowColorHash = '#ffff00'

const card = document.querySelector('.card')
const changeFirstCardColor = document.querySelector('#change-first-card-color')
const blueColorHash = '#0000ff'

changeCardColor.addEventListener('click', () => {
  cards.forEach(wsw => {
    wsw.style.backgroundColor = yellowColorHash
  })
})

changeFirstCardColor.addEventListener('click', () => {
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

const logTitle = document.getElementById('log-title');
logTitle.addEventListener('mouseover', () => {
  console.log(logTitle.textContent);
});

// Меняем цвет кнопки

const changeButtonColor = document.querySelector('#change-button-color');
changeButtonColor.addEventListener('click', () => {changeButtonColor.classList.toggle('active'),
  console.log(changeButtonColor.classList.contains('active'))});