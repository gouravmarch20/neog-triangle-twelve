const angleFirst = document.querySelector('#angle-first')
const angleSecond = document.querySelector('#angle-second')
const angleThird = document.querySelector('#angle-third')

const isTriangle = document.querySelector('#is-triangle')
const output = document.querySelector('#output')

function sumOfTriangle (angleFirst, angleSecond, angleThird) {
  const sum = angleFirst + angleSecond + angleThird

  if (sum == 180) {
    output.innerText = 'it is a triangle'
  } else {
    output.innerText = 'it is not  triangle'
  }
}
function resultIsTriangle () {
  sumOfTriangle(
    Number(angleFirst.value),
    Number(angleSecond.value),
    Number(angleThird.value)
  )
}
isTriangle.addEventListener('click', resultIsTriangle)
