const cards  = document.querySelectorAll('.card')
const changeColorCardButton = document.querySelector('#change-color-card-button')
const yellowColorHash = '#ffff00'


changeColorCardButton.addEventListener('click', () => {
  cards.forEach(wsw => {
    wsw.style.backgroundColor = yellowColorHash
  })
})

console.log(cards)