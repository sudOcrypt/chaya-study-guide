import { useState } from 'react';

export default function FlashcardDeck({ cards, title }) {
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(new Set());
  const [unknown, setUnknown] = useState(new Set());
  const [mode, setMode] = useState('study'); // 'study' | 'known' | 'unknown'

  const displayCards = mode === 'known'
    ? cards.filter((_, i) => known.has(i))
    : mode === 'unknown'
    ? cards.filter((_, i) => unknown.has(i))
    : cards;

  const originalIndex = mode === 'known'
    ? cards.map((_, i) => i).filter(i => known.has(i))
    : mode === 'unknown'
    ? cards.map((_, i) => i).filter(i => unknown.has(i))
    : cards.map((_, i) => i);

  const card = displayCards[current];
  if (!card) return <div className="no-cards">No cards in this set.</div>;

  const idx = originalIndex[current];

  const handleFlip = () => setFlipped(!flipped);

  const handleKnow = () => {
    setKnown(prev => new Set([...prev, idx]));
    setUnknown(prev => { const s = new Set(prev); s.delete(idx); return s; });
    nextCard();
  };

  const handleDontKnow = () => {
    setUnknown(prev => new Set([...prev, idx]));
    setKnown(prev => { const s = new Set(prev); s.delete(idx); return s; });
    nextCard();
  };

  const nextCard = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrent(c => (c + 1) % displayCards.length);
    }, 200);
  };

  const prevCard = () => {
    setFlipped(false);
    setTimeout(() => {
      setCurrent(c => (c - 1 + displayCards.length) % displayCards.length);
    }, 200);
  };

  const shuffle = () => {
    setCurrent(0);
    setFlipped(false);
  };

  return (
    <div className="flashcard-deck">
      <div className="deck-header">
        <h3>{title}</h3>
        <div className="deck-stats">
          <span className="stat-known">{known.size} known</span>
          <span className="stat-sep">·</span>
          <span className="stat-unknown">{unknown.size} learning</span>
          <span className="stat-sep">·</span>
          <span>{cards.length - known.size - unknown.size} unseen</span>
        </div>
      </div>

      <div className="filter-tabs">
        <button className={mode === 'study' ? 'tab active' : 'tab'} onClick={() => { setMode('study'); setCurrent(0); setFlipped(false); }}>
          All ({cards.length})
        </button>
        <button className={mode === 'unknown' ? 'tab active' : 'tab'} onClick={() => { setMode('unknown'); setCurrent(0); setFlipped(false); }} disabled={unknown.size === 0}>
          Learning ({unknown.size})
        </button>
        <button className={mode === 'known' ? 'tab active' : 'tab'} onClick={() => { setMode('known'); setCurrent(0); setFlipped(false); }} disabled={known.size === 0}>
          Known ({known.size})
        </button>
      </div>

      <div className="card-counter">{current + 1} / {displayCards.length}</div>

      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
        <div className="card-inner">
          <div className="card-front">
            <div className="card-label">QUESTION</div>
            <div className="card-text">{card.front}</div>
            <div className="flip-hint">Click to reveal answer</div>
          </div>
          <div className="card-back">
            <div className="card-label">ANSWER</div>
            <div className="card-text">{card.back}</div>
          </div>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn-secondary" onClick={prevCard}>← Prev</button>
        {flipped && (
          <>
            <button className="btn-unknown" onClick={handleDontKnow}>Still Learning</button>
            <button className="btn-known" onClick={handleKnow}>Got It!</button>
          </>
        )}
        {!flipped && (
          <button className="btn-flip" onClick={handleFlip}>Flip Card</button>
        )}
        <button className="btn-secondary" onClick={nextCard}>Next →</button>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{ width: `${(known.size / cards.length) * 100}%` }}
          />
        </div>
        <span className="progress-label">{Math.round((known.size / cards.length) * 100)}% mastered</span>
      </div>
    </div>
  );
}
