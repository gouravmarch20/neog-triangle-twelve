const sideA = document.querySelector('#side-a')
const sideB = document.querySelector('#side-b')
const calculateHypotenuse = document.querySelector('#calculate-hypotenuse')
const output = document.querySelector('#output')

function calculatedHypotenuse () {
  const squareRoot = Math.sqrt(
    Math.pow(sideA.value, 2) + Math.pow(sideB.value, 2)
  )

  output.innerText = squareRoot.toFixed(2)
}

calculateHypotenuse.addEventListener('click', calculatedHypotenuse)
