import { Link, useParams } from 'react-router-dom';
import games from '../data/games.json';
import type { GameMeta, GenerateRound } from '../types/game';
import GameShell from '../components/GameShell';
import {
  generateEvenRound,
  generateCalcRound,
  generateGcdRound,
  generateProgressionRound,
  generatePrimeRound,
  generateSquareRound,
  generateGeometricRound,
  generateFibonacciRound,
  generatePerfectSquareRound,
  generateDigitSumRound,
  generateRemainderRound,
  generateLcmRound,
} from '../lib/gameLogic';

const generators: Record<string, GenerateRound> = {
  even: generateEvenRound,
  calc: generateCalcRound,
  gcd: generateGcdRound,
  progression: generateProgressionRound,
  prime: generatePrimeRound,
  square: generateSquareRound,
  geometric: generateGeometricRound,
  fibonacci: generateFibonacciRound,
  'perfect-square': generatePerfectSquareRound,
  'digit-sum': generateDigitSumRound,
  remainder: generateRemainderRound,
  lcm: generateLcmRound,
};

export default function Play() {
  const { gameId } = useParams<{ gameId: string }>();
  const meta = (games as GameMeta[]).find(g => g.id === gameId);
  const generateRound = gameId ? generators[gameId] : undefined;

  if (!meta || !generateRound) {
    return (
      <main className="page">
        <h1 className="page__title">Game not found</h1>
        <Link to="/" className="link">← Back to catalog</Link>
      </main>
    );
  }

  return (
    <main className="play">
      <Link to="/" className="link play__back">← Back to catalog</Link>
      <h1 className="play__title">{meta.title}</h1>
      <p className="play__rules">{meta.description}</p>
      <GameShell key={meta.id} generateRound={generateRound} />
    </main>
  );
}
