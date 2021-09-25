const quizForm = document.querySelector('.quiz-form')
const sumitAnswerBtn = document.querySelector('#sumit-answer-btn')
const output = document.querySelector('#output')
let answers = [6, 180, 60]

function getScore () {
  //   console.log('object')
  const formResults = new FormData(quizForm)
  let score = 0
  let index = 0
  for (const value of formResults.values()) {
    if (value == answers[index]) {
      score = score + 1
    }
    index = ++index
  }
  output.innerText = `your score is ${score}`
}

sumitAnswerBtn.addEventListener('click', getScore)
