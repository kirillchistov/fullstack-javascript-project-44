import playGame from '../index.js'
import { getRandomNumber } from '../random.js'

const minLength = 5
const maxLength = 10
const minStart = 1
const maxStart = 10
const minStep = 1
const maxStep = 10

const rules = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(minLength, maxLength)
  const start = getRandomNumber(minStart, maxStart)
  const step = getRandomNumber(minStep, maxStep)
  const progression = generateProgression(start, step, length)
  const hiddenIndex = getRandomNumber(0, length - 1)
  const correctAnswer = String(progression[hiddenIndex])
  const question = progression
    .map((num, index) => (index === hiddenIndex ? '..' : num))
    .join(' ')
  return [question, correctAnswer]
}

const playProgression = () => {
  playGame(rules, getQuestionAndAnswer)
}

export default playProgression
