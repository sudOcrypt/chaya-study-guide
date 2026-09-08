import { useState } from 'react';
import { calculateScore, getOptionLetter, isAnswerCorrect } from '../utils/quizScoring';

export default function Quiz({ questions, title }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null); // always stores just the letter: "A","B","C","D"
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [review, setReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const q = questions[current];
  const totalQ = questions.length;
  const score = calculateScore(questions, answers);

  const handleSelect = (opt) => {
    if (submitted) return;
    setSelected(getOptionLetter(opt)); // persist one normalized value from click through scoring
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

  const isCorrect = isAnswerCorrect(selected, q.answer);

  const optionClass = (opt) => {
    const letter = getOptionLetter(opt);
    if (!submitted) return selected === letter ? 'option selected' : 'option';
    if (isAnswerCorrect(letter, q.answer)) return 'option correct';
    if (letter === selected && !isAnswerCorrect(letter, q.answer)) return 'option wrong';
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
            <div key={q.number ?? i} className={`result-item ${isAnswerCorrect(answers[i], q.answer) ? 'correct' : 'wrong'}`}>
              <span className="result-num">Q{i + 1}</span>
              <span className="result-text">{q.question.substring(0, 60)}...</span>
              <span className="result-verdict">{isAnswerCorrect(answers[i], q.answer) ? '✓' : '✗'}</span>
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
    const userLetter = answers[reviewIndex];
    return (
      <div className="quiz-review">
        <div className="review-header">
          <h3>Review: Q{reviewIndex + 1} of {totalQ}</h3>
          <button className="btn-back" onClick={() => setReview(false)}>← Results</button>
        </div>
        <div className="question-text">{rq.question}</div>
        {rq.image && <img className="question-image" src={rq.image} alt={`Diagram for question ${rq.number ?? reviewIndex + 1}`} />}
        <div className="options-list">
          {rq.options.map((opt) => {
            const letter = getOptionLetter(opt);
            return (
              <div key={opt} className={
                isAnswerCorrect(letter, rq.answer) ? 'option correct' :
                letter === userLetter && !isAnswerCorrect(letter, rq.answer) ? 'option wrong' : 'option'
              }>
                {opt}
                {isAnswerCorrect(letter, rq.answer) && <span className="correct-label"> ← Correct</span>}
                {letter === userLetter && !isAnswerCorrect(letter, rq.answer) && <span className="wrong-label"> ← Your Answer</span>}
              </div>
            );
          })}
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
            <div style={{ width: `${(current / totalQ) * 100}%` }} className="quiz-progress-fill" />
          </div>
          <span>Question {current + 1} of {totalQ}</span>
        </div>
      </div>

      <div className="question-text">{q.question}</div>
      {q.image && <img className="question-image" src={q.image} alt={`Diagram for question ${q.number ?? current + 1}`} />}

      <div className="options-list">
        {q.options.map((opt) => (
          <button
            type="button"
            key={opt}
            className={optionClass(opt)}
            onClick={() => handleSelect(opt)}
            disabled={submitted}
          >
            {opt}
          </button>
        ))}
      </div>

      {submitted && (
        <div className="explanation">
          <strong>{isCorrect ? '✓ Correct!' : `✗ Incorrect. The correct answer is ${q.answer}.`}</strong>
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
