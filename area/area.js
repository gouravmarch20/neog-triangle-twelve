const triangleBase = document.querySelector('#triangle-base')
const triangleHeight = document.querySelector('#triangle-height')
const triangleAreaCalculate = document.querySelector('#triangle-area-calculate')
const calculatedArea = document.querySelector('#calculated-area')

function calculateArea () {
  const a = Number((triangleHeight.value * triangleBase.value) / 2).toFixed(2)
  calculatedArea.innerText = `The area of triangle is : ${a}`
}

triangleAreaCalculate.addEventListener('click', calculateArea)
