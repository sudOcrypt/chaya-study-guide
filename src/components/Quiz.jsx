import { useState } from 'react';

export default function Quiz({ questions, title }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [review, setReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const q = questions[current];
  const totalQ = questions.length;
  const score = Object.entries(answers).filter(([i, a]) => questions[i].answer === a).length;

  const handleSelect = (opt) => {
    if (submitted) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setSubmitted(true);
    setAnswers(prev => ({ ...prev, [current]: selected }));
  };

  const handleNext = () => {
    if (current + 1 >= totalQ) {
      setShowResults(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setAnswers({});
    setShowResults(false);
    setReview(false);
    setReviewIndex(0);
  };

  const optionClass = (opt) => {
    if (!submitted) return selected === opt ? 'option selected' : 'option';
    if (opt === q.answer) return 'option correct';
    if (opt === selected && opt !== q.answer) return 'option wrong';
    return 'option';
  };

  if (showResults && !review) {
    const pct = Math.round((score / totalQ) * 100);
    const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
    return (
      <div className="quiz-results">
        <h3>Quiz Complete: {title}</h3>
        <div className="result-score">
          <div className="grade">{grade}</div>
          <div className="score-text">{score} / {totalQ} correct ({pct}%)</div>
        </div>
        <div className="result-breakdown">
          {questions.map((q, i) => (
            <div key={i} className={`result-item ${answers[i] === q.answer ? 'correct' : 'wrong'}`}>
              <span className="result-num">Q{i + 1}</span>
              <span className="result-text">{q.question.substring(0, 60)}...</span>
              <span className="result-verdict">{answers[i] === q.answer ? '✓' : '✗'}</span>
            </div>
          ))}
        </div>
        <div className="result-actions">
          <button className="btn-primary" onClick={() => { setReview(true); setReviewIndex(0); }}>Review Answers</button>
          <button className="btn-secondary" onClick={handleRestart}>Retake Quiz</button>
        </div>
      </div>
    );
  }

  if (review) {
    const rq = questions[reviewIndex];
    const userAnswer = answers[reviewIndex];
    return (
      <div className="quiz-review">
        <div className="review-header">
          <h3>Review: Q{reviewIndex + 1} of {totalQ}</h3>
          <button className="btn-back" onClick={() => setReview(false)}>← Results</button>
        </div>
        <div className="question-text">{rq.question}</div>
        <div className="options-list">
          {rq.options.map((opt) => (
            <div key={opt} className={
              opt === rq.answer ? 'option correct' :
              opt === userAnswer && opt !== rq.answer ? 'option wrong' : 'option'
            }>
              {opt}
              {opt === rq.answer && <span className="correct-label"> ← Correct</span>}
              {opt === userAnswer && opt !== rq.answer && <span className="wrong-label"> ← Your Answer</span>}
            </div>
          ))}
        </div>
        <div className="explanation">
          <strong>Explanation:</strong> {rq.explanation}
        </div>
        <div className="review-nav">
          <button className="btn-secondary" onClick={() => setReviewIndex(i => Math.max(0, i - 1))} disabled={reviewIndex === 0}>← Prev</button>
          <button className="btn-secondary" onClick={() => setReviewIndex(i => Math.min(totalQ - 1, i + 1))} disabled={reviewIndex === totalQ - 1}>Next →</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h3>{title}</h3>
        <div className="quiz-progress">
          <div className="quiz-progress-bar">
            <div style={{ width: `${((current) / totalQ) * 100}%` }} className="quiz-progress-fill" />
          </div>
          <span>Question {current + 1} of {totalQ}</span>
        </div>
      </div>

      <div className="question-text">{q.question}</div>

      <div className="options-list">
        {q.options.map((opt) => (
          <div
            key={opt}
            className={optionClass(opt)}
            onClick={() => handleSelect(opt)}
          >
            {opt}
          </div>
        ))}
      </div>

      {submitted && (
        <div className="explanation">
          <strong>{selected === q.answer ? '✓ Correct!' : `✗ Incorrect. The answer is ${q.answer}.`}</strong>
          <br />{q.explanation}
        </div>
      )}

      <div className="quiz-actions">
        {!submitted ? (
          <button className="btn-primary" onClick={handleSubmit} disabled={!selected}>
            Submit Answer
          </button>
        ) : (
          <button className="btn-primary" onClick={handleNext}>
            {current + 1 >= totalQ ? 'See Results' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}
