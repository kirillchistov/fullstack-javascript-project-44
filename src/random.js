import { randomInt } from 'node:crypto'

export const getRandomNumber = (min, max) => randomInt(min, max + 1)

export const getRandomElement = items => items[randomInt(0, items.length)]
