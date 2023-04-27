let numberOne = prompt('Digite o primeiro número:')
let numberTwo = prompt('Digite o segundo número:')

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('A soma dos números é: ' + sum)
alert('A subtração dos números é: ' + sub)
alert('A multiplicação dos números é: ' + multi)
alert('A divisão dos números é: ' + div)
alert('O resto da divisão dos números é: ' + restDiv)

if (sum % 2 == 0) {
  alert('O resultado da soma dos números é par.')
} else {
  alert('O resultado da soma dos números é ímpar.')
}

if (numberOne == numberTwo) {
  alert('Os dois números inseridos são iguais.')
} else {
  alert('Os dois números inseridos são diferentes.')
}
