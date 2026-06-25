import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const min = 1
const max = 100

const rules = 'Find the greatest common divisor of given numbers.'

const gcd = (a, b) => {
  let x = a
  let y = b
  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }
  return x
}

const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(min, max)
  const num2 = getRandomNumber(min, max)
  const question = `${num1} ${num2}`
  const correctAnswer = String(gcd(num1, num2))
  return [question, correctAnswer]
}

const playGcd = () => {
  playGame(rules, getQuestionAndAnswer)
}

export default playGcd
