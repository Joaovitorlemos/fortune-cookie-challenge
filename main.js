// Variavéis
const btnOpenCookie = document.querySelector("#btnOpenCookie")
const btnCookieReset = document.querySelector("#btnCookieReset")
const messageText = document.querySelector("#messageText")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

// Lista com mensagens para o cookie
const messagesCookie = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
  "O nosso primeiro e último amor é… o amor-próprio.",
  "Motivação não é sinónimo de transformação, mas um passo em sua direção."
]

// Gerar mensagem aleatória
let randomNumber = Math.floor(Math.random() * messagesCookie.length)
let raffledMessage = messagesCookie[randomNumber]

// Eventos 
btnOpenCookie.addEventListener('click', handleTryClick)
btnCookieReset.addEventListener('click', handleResetClick)

// Funcões
function handleTryClick() {
  toggleScreen()
  randomMessage()
}

function handleResetClick() {
  toggleScreen()
  randomNumber = Math.floor(Math.random() * messagesCookie.length)
  raffledMessage = messagesCookie[randomNumber]
}

function randomMessage() {
  messageText.innerText = raffledMessage
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}