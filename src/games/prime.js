import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const min = 0
const max = 100

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }
  if (number === 2) {
    return true
  }
  if (number % 2 === 0) {
    return false
  }
  const limit = Math.floor(Math.sqrt(number))
  for (let i = 3; i <= limit; i += 2) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(min, max)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return [question, correctAnswer]
}

const playPrime = () => {
  playGame(rules, getQuestionAndAnswer)
}

export default playPrime
