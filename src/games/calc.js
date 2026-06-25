import playGame from '../index.js'
import { getRandomElement, getRandomNumber } from '../random.js'

const min = 0
const max = 100
const operators = ['+', '-', '*']

const rules = 'What is the result of the expression?'

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(min, max)
  const num2 = getRandomNumber(min, max)
  const operator = getRandomElement(operators)
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = String(calculate(num1, operator, num2))
  return [question, correctAnswer]
}

const playCalc = () => {
  playGame(rules, getQuestionAndAnswer)
}

export default playCalc
