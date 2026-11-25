import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Play from './pages/Play';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play/:gameId" element={<Play />} />
      </Routes>
    </HashRouter>
  );
}
