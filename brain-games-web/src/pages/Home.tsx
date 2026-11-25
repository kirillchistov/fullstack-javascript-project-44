import { Link } from 'react-router-dom';
import games from '../data/games.json';
import type { GameMeta } from '../types/game';

export default function Home() {
  return (
    <main className="page">
      <h1 className="page__title">Brain Games</h1>
      <p className="page__subtitle">Choose a game to train your brain.</p>

      <ul className="list games-grid">
        {(games as GameMeta[]).map(game => (
          <li key={game.id} className="game-card">
            <div className="game-card__icon">{game.icon}</div>
            <h2 className="game-card__title">{game.title}</h2>
            <p className="game-card__desc">{game.description}</p>
            <Link
              to={`/play/${game.id}`}
              className="button game-card__button"
            >
              Play
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
