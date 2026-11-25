import { useState } from 'react';
import type { FormEvent } from 'react';
import type { GenerateRound, Round } from '../types/game';

const TOTAL_ROUNDS = 3;

interface Props {
  generateRound: GenerateRound;
}

type Phase = 'ask' | 'wrong' | 'finished';

export default function GameShell({ generateRound }: Props) {
  const [phase, setPhase] = useState<Phase>('ask');
  const [round, setRound] = useState<Round>(() => generateRound());
  const [roundIndex, setRoundIndex] = useState(0);
  const [input, setInput] = useState('');
  const [lastAnswer, setLastAnswer] = useState('');
  const [history, setHistory] = useState<{ text: string; ok: boolean }[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === round.answer.toLowerCase()) {
      const nextRoundIndex = roundIndex + 1;
      setHistory(prev => [...prev, { text: `> ${input}`, ok: true }, { text: 'Correct!', ok: true }]);
      setInput('');

      if (nextRoundIndex >= TOTAL_ROUNDS) {
        setPhase('finished');
      } else {
        setRoundIndex(nextRoundIndex);
        setRound(generateRound());
      }
    } else {
      setLastAnswer(input.trim());
      setHistory(prev => [
        ...prev,
        { text: `> ${input}`, ok: false },
        { text: `'${input.trim()}' is wrong answer ;(. Correct answer was '${round.answer}'.`, ok: false },
      ]);
      setPhase('wrong');
    }
  };

  const restart = () => {
    setPhase('ask');
    setRound(generateRound());
    setRoundIndex(0);
    setInput('');
    setLastAnswer('');
    setHistory([]);
  };

  if (phase === 'finished') {
    return (
      <div className="play__result">
        <h2 className="play__result-title">Congratulations!</h2>
        <p className="play__result-text">You answered all {TOTAL_ROUNDS} questions correctly.</p>
        <div className="play__result-actions">
          <button className="button play__result-button" onClick={restart} type="button">Play again</button>
        </div>
      </div>
    );
  }

  if (phase === 'wrong') {
    return (
      <div className="play__result">
        <h2 className="play__result-title">Wrong answer</h2>
        <p className="play__result-text">
          '{lastAnswer}' is wrong. Correct answer was '{round.answer}'.
        </p>
        <div className="play__result-actions">
          <button className="button play__result-button" onClick={restart} type="button">Try again</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="play__progress">Round {roundIndex + 1} / {TOTAL_ROUNDS}</p>

      <div className="play__terminal">
        {history.map((line, i) => (
          <div
            key={i}
            className={line.ok ? 'play__terminal-line--ok' : 'play__terminal-line--err'}
          >
            {line.text}
          </div>
        ))}
        <div>{`Question: ${round.question}`}</div>
      </div>

      <form className="play__form" onSubmit={handleSubmit}>
        <input
          className="play__input"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Your answer"
          autoFocus
          autoComplete="off"
        />
        <button type="submit" className="button play__submit">Answer</button>
      </form>
    </div>
  );
}
