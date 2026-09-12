import { useState } from 'react';
import { pickEncouragement } from '../data/encouragements';
import { getQuizTeaching } from '../data/quizTeaching';
import { useLearningProgress } from '../context/learningProgressStore';
import { getQuestionKey } from '../utils/learningProgress';
import { explainOneStep } from '../utils/stepExplanation';
import { calculateScore, getOptionLetter, isAnswerCorrect } from '../utils/quizScoring';

export default function Quiz({ questions, title, hintsEnabled = true, onComplete }) {
  const { progress, recordAttempt, recordConfidence } = useLearningProgress();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null); // always stores just the letter: "A","B","C","D"
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [review, setReview] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [confidence, setConfidence] = useState(null);

  const q = questions[current];
  const totalQ = questions.length;
  const score = calculateScore(questions, answers);

  const handleSelect = (opt) => {
    if (submitted) return;
    setSelected(getOptionLetter(opt)); // persist one normalized value from click through scoring
  };

  const handleSubmit = () => {
    if (!selected) return;
    const correct = isAnswerCorrect(selected, q.answer);
    setFeedbackMessage(pickEncouragement(correct));
    setSubmitted(true);
    setAnswers(prev => ({ ...prev, [current]: selected }));
    recordAttempt(q, selected, correct);
  };

  const handleNext = () => {
    if (current + 1 >= totalQ) {
      setShowResults(true);
      onComplete?.({ score, total: totalQ });
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setSubmitted(false);
      setFeedbackMessage('');
      setShowHint(false);
      setConfidence(null);
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
    setFeedbackMessage('');
    setShowHint(false);
    setConfidence(null);
  };

  const isCorrect = isAnswerCorrect(selected, q.answer);
  const savedConfidence = progress.confidence[getQuestionKey(q)]?.level;

  const chooseConfidence = (level) => {
    setConfidence(level);
    recordConfidence(q, level);
  };

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
    const reviewCorrect = isAnswerCorrect(userLetter, rq.answer);
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
        {reviewCorrect ? (
          <div className="explanation">
            <strong>Explanation:</strong> {rq.explanation}
          </div>
        ) : (
          <WrongAnswerLesson question={rq} selectedLetter={userLetter} />
        )}
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
        <>
          <div className="answer-feedback">
            <strong>{isCorrect ? '✓ Correct!' : `✗ Not this one. The correct answer is ${q.answer}.`}</strong>
            <div className={`personal-feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
              {feedbackMessage}
            </div>
          </div>
          {isCorrect ? (
            <div className="explanation">
              <strong>Why:</strong> {q.explanation}
            </div>
          ) : (
            <WrongAnswerLesson question={q} selectedLetter={selected} />
          )}
          <ConfidenceCheck
            value={confidence ?? savedConfidence}
            onChange={chooseConfidence}
          />
        </>
      )}

      <div className="quiz-actions">
        {!submitted ? (
          <>
            {hintsEnabled && (
              <button
                className="btn-hint"
                onClick={() => setShowHint((visible) => !visible)}
                aria-expanded={showHint}
                aria-controls="question-hint"
              >
                {showHint ? 'Hide hint' : 'Need a hint?'}
              </button>
            )}
            <button className="btn-primary" onClick={handleSubmit} disabled={!selected}>
              Submit Answer
            </button>
          </>
        ) : (
          <button className="btn-primary" onClick={handleNext}>
            {current + 1 >= totalQ ? 'See Results' : 'Next Question →'}
          </button>
        )}
      </div>
      {!submitted && hintsEnabled && showHint && (
        <div className="question-hint" id="question-hint">
          <span>gentle hint</span>
          <p>{getQuizTeaching(q).hint}</p>
        </div>
      )}
    </div>
  );
}

function WrongAnswerLesson({ question, selectedLetter }) {
  const [openStep, setOpenStep] = useState(null);
  const teaching = getQuizTeaching(question);
  const selectedOption = question.options.find(
    (option) => getOptionLetter(option) === selectedLetter,
  );
  const correctOption = question.options.find(
    (option) => getOptionLetter(option) === question.answer,
  );

  return (
    <section className="wrong-answer-lesson">
      <header>
        <span>start-from-zero correction</span>
        <h4>Let’s slow it all the way down.</h4>
        <p>
          Getting this wrong only tells us exactly which idea to rebuild. Follow
          these small steps in order.
        </p>
      </header>

      <div className="answer-comparison">
        <div>
          <span>You chose</span>
          <strong>{selectedOption ?? `${selectedLetter}. No answer recorded`}</strong>
        </div>
        <div>
          <span>The correct choice</span>
          <strong>{correctOption}</strong>
        </div>
      </div>

      <div className="wrong-foundation">
        <article>
          <span>1</span>
          <div><h5>What is the question asking?</h5><p>{teaching.ask}</p></div>
        </article>
        <article>
          <span>2</span>
          <div><h5>What rule or equation do we need?</h5><code>{teaching.rule}</code></div>
        </article>
      </div>

      <div className="wrong-steps">
        <h5>Now do one tiny step at a time</h5>
        <ol>
          {teaching.steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <div>
                <p>{step}</p>
                <button
                  className="step-help-toggle"
                  onClick={() => setOpenStep(openStep === index ? null : index)}
                  aria-expanded={openStep === index}
                >
                  {openStep === index ? 'Hide smaller explanation' : 'I don’t understand this step'}
                </button>
                {openStep === index && (
                  <div className="step-help-detail">
                    {explainOneStep(step).map((line) => <p key={line}>{line}</p>)}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="why-wrong">
        <span>Why the wrong choice does not work</span>
        <p>{teaching.why}</p>
      </div>
    </section>
  );
}

function ConfidenceCheck({ value, onChange }) {
  return (
    <section className="confidence-check">
      <div>
        <span>one honest check</span>
        <h4>How did that answer feel?</h4>
        <p>A lucky guess still needs review. This helps the coach choose what comes back later.</p>
      </div>
      <div>
        {[
          ['guessed', 'I guessed'],
          ['unsure', 'I was unsure'],
          ['confident', 'I feel confident'],
        ].map(([level, label]) => (
          <button
            key={level}
            className={value === level ? 'active' : ''}
            onClick={() => onChange(level)}
            aria-pressed={value === level}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}

