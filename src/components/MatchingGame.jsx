import { useState, useEffect } from 'react';

function createItems(cards) {
  return cards
    .map((card, index) => [
      { id: `q-${index}`, text: card.front.length > 80 ? `${card.front.substring(0, 77)}...` : card.front, pairId: index, type: 'q' },
      { id: `a-${index}`, text: card.back.split('\n')[0].length > 80 ? `${card.back.split('\n')[0].substring(0, 77)}...` : card.back.split('\n')[0], pairId: index, type: 'a' },
    ])
    .flat()
    .sort(() => Math.random() - 0.5);
}

export default function MatchingGame({ cards, title }) {
  const gameCards = cards.slice(0, 8);
  const [items, setItems] = useState(() => createItems(gameCards));
  const [selected, setSelected] = useState(null);
  const [matched, setMatched] = useState(new Set());
  const [wrong, setWrong] = useState(null);
  const [moves, setMoves] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  const [done, setDone] = useState(false);

  const initGame = () => {
    setItems(createItems(gameCards));
    setSelected(null);
    setMatched(new Set());
    setWrong(null);
    setMoves(0);
    setStartTime(Date.now());
    setElapsed(0);
    setDone(false);
  };

  useEffect(() => {
    if (!startTime || done) return;
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, done]);

  const handleClick = (item) => {
    if (matched.has(item.pairId) || wrong === item.id) return;
    if (selected?.id === item.id) { setSelected(null); return; }

    if (!selected) {
      setSelected(item);
      return;
    }

    setMoves(m => m + 1);

    if (selected.pairId === item.pairId && selected.id !== item.id) {
      const newMatched = new Set([...matched, item.pairId]);
      setMatched(newMatched);
      setSelected(null);
      setWrong(null);
      if (newMatched.size === gameCards.length) {
        setDone(true);
      }
    } else {
      setWrong(item.id);
      setTimeout(() => {
        setWrong(null);
        setSelected(null);
      }, 800);
    }
  };

  const tileClass = (item) => {
    if (matched.has(item.pairId)) return 'tile matched';
    if (wrong === item.id || (selected && wrong && selected.id !== item.id && item.pairId === selected?.pairId)) return 'tile wrong';
    if (selected?.id === item.id) return 'tile selected';
    return 'tile';
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="matching-game">
      <div className="game-header">
        <h3>Matching Game: {title}</h3>
        <div className="game-stats">
          <span>Moves: {moves}</span>
          <span>Time: {formatTime(elapsed)}</span>
          <span>Matched: {matched.size}/{gameCards.length}</span>
        </div>
      </div>
      <p className="game-instructions">Match each term/question with its answer. Select one item, then its match.</p>

      {done ? (
        <div className="game-complete">
          <div className="complete-title">Excellent!</div>
          <div className="complete-stats">
            <div>{matched.size}/{gameCards.length} pairs matched</div>
            <div>{moves} moves</div>
            <div>{formatTime(elapsed)}</div>
          </div>
          <button className="btn-primary" onClick={initGame}>Play Again</button>
        </div>
      ) : (
        <div className="tiles-grid">
          {items.map(item => (
            <div
              key={item.id}
              className={tileClass(item)}
              onClick={() => handleClick(item)}
            >
              <span className="tile-type">{item.type === 'q' ? 'TERM' : 'ANSWER'}</span>
              <span className="tile-text">{item.text}</span>
            </div>
          ))}
        </div>
      )}

      {!done && (
        <button className="btn-secondary reset-btn" onClick={initGame}>Reset Game</button>
      )}
    </div>
  );
}
