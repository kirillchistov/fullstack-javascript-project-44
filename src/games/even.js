import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const min = 0
const max = 100

const rules = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(min, max)
  const correctAnswer = isEven(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const playEven = () => {
  playGame(rules, getQuestionAndAnswer)
}

export default playEven
