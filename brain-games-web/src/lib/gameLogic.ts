import type { GenerateRound } from '../types/game';

const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// ---- Even ----
export const generateEvenRound: GenerateRound = () => {
  const n = randomInt(1, 100);
  return {
    question: String(n),
    answer: n % 2 === 0 ? 'yes' : 'no',
  };
};

// ---- Calc ----
const ops = ['+', '-', '*'] as const;
export const generateCalcRound: GenerateRound = () => {
  const a = randomInt(1, 50);
  const b = randomInt(1, 50);
  const op = ops[randomInt(0, ops.length - 1)];
  let result: number;
  switch (op) {
    case '+': result = a + b; break;
    case '-': result = a - b; break;
    default:  result = a * b; break;
  }
  return { question: `${a} ${op} ${b}`, answer: String(result) };
};

// ---- GCD ----
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
export const generateGcdRound: GenerateRound = () => {
  const a = randomInt(1, 100);
  const b = randomInt(1, 100);
  return { question: `${a} ${b}`, answer: String(gcd(a, b)) };
};

// ---- Progression ----
export const generateProgressionRound: GenerateRound = () => {
  const length = randomInt(5, 10);
  const start = randomInt(1, 20);
  const step = randomInt(1, 10);
  const hiddenIndex = randomInt(0, length - 1);
  const sequence = Array.from({ length }, (_, i) => start + i * step);
  const answer = String(sequence[hiddenIndex]);
  const question = sequence.map((n, i) => (i === hiddenIndex ? '..' : n)).join(' ');
  return { question, answer };
};

// ---- Prime ----
const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
export const generatePrimeRound: GenerateRound = () => {
  const n = randomInt(1, 100);
  return { question: String(n), answer: isPrime(n) ? 'yes' : 'no' };
};

// ---- Square ----
export const generateSquareRound: GenerateRound = () => {
  const n = randomInt(2, 20);
  return { question: String(n), answer: String(n * n) };
};

// ---- Geometric progression ----
export const generateGeometricRound: GenerateRound = () => {
  const length = randomInt(5, 6);
  const ratio = randomInt(2, 3);
  const start = randomInt(1, ratio === 2 ? 6 : 4);
  const hiddenIndex = randomInt(0, length - 1);
  const sequence: number[] = [];
  let current = start;
  for (let i = 0; i < length; i += 1) {
    sequence.push(current);
    current *= ratio;
  }
  const answer = String(sequence[hiddenIndex]);
  const question = sequence.map((n, i) => (i === hiddenIndex ? '..' : n)).join(' ');
  return { question, answer };
};

// ---- Fibonacci (next term) ----
export const generateFibonacciRound: GenerateRound = () => {
  const length = randomInt(5, 6);
  let previous = randomInt(1, 6);
  let current = randomInt(1, 6);
  const shown = [previous, current];
  for (let i = 2; i < length; i += 1) {
    const next = previous + current;
    shown.push(next);
    previous = current;
    current = next;
  }
  return { question: shown.join(' '), answer: String(previous + current) };
};

// ---- Perfect square ----
const isPerfectSquare = (n: number): boolean => {
  const root = Math.sqrt(n);
  return Number.isInteger(root);
};
export const generatePerfectSquareRound: GenerateRound = () => {
  const root = randomInt(1, 15);
  const square = root * root;
  if (randomInt(0, 1) === 1) {
    return { question: String(square), answer: 'yes' };
  }
  let n = square + randomInt(1, Math.max(2, root));
  if (isPerfectSquare(n)) n += 1;
  return { question: String(n), answer: 'no' };
};

// ---- Digit sum ----
export const generateDigitSumRound: GenerateRound = () => {
  const n = randomInt(10, 999);
  const answer = String(n).split('').reduce((sum, digit) => sum + Number(digit), 0);
  return { question: String(n), answer: String(answer) };
};

// ---- Remainder ----
export const generateRemainderRound: GenerateRound = () => {
  const divisor = randomInt(2, 9);
  const quotient = randomInt(2, 12);
  const remainder = randomInt(0, divisor - 1);
  const dividend = quotient * divisor + remainder;
  return { question: `${dividend} ${divisor}`, answer: String(remainder) };
};

// ---- LCM ----
const lcm = (a: number, b: number): number => Math.abs(a * b) / gcd(a, b);
export const generateLcmRound: GenerateRound = () => {
  const a = randomInt(2, 20);
  const b = randomInt(2, 20);
  return { question: `${a} ${b}`, answer: String(lcm(a, b)) };
};
