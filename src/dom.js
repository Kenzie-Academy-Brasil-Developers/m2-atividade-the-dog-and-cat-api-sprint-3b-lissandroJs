const carroselDogs = document.querySelector(".love-dogs")
const carroselCats = document.querySelector(".love-cats")

const botaoDogs = document.createElement("button")
const botaoCats = document.createElement("button")

botaoCats.innerText = 'Gerar Gatinho'
botaoDogs.innerText ='Gerar Cachorrinho'

let imgDogs =document.createElement('img')
let imgCats =document.createElement('img')

carroselDogs.appendChild(imgDogs)
carroselCats.appendChild(imgCats)

carroselDogs.appendChild(botaoDogs)
carroselCats.appendChild(botaoCats)

botaoDogs.addEventListener('click',mostraDogs)

botaoCats.addEventListener('click',mostraCats)
