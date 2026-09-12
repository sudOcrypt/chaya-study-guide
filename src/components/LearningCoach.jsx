import { useMemo, useState } from 'react';
import { fullExamQuiz } from '../data/studyData';
import { lectureQuiz } from '../data/lectureData';
import { formulaDecisionQuestions } from '../data/formulaDecisionData';
import { getQuizTeaching } from '../data/quizTeaching';
import { useLearningProgress } from '../context/learningProgressStore';
import { buildDailyPlan, summarizeConcepts } from '../utils/learningPlan';
import { getQuestionKey } from '../utils/learningProgress';
import Quiz from './Quiz';

const ALL_QUESTIONS = [...fullExamQuiz, ...lectureQuiz];

const COACH_TABS = [
  ['today', 'Today’s 10 Minutes'],
  ['ladder', 'Practice Ladder'],
  ['mistakes', 'Mistake Notebook'],
  ['formulas', 'Formula Trainer'],
  ['progress', 'My Progress'],
];

const LADDERS = {
  'Motion & measurement': {
    model: fullExamQuiz[6],
    guided: lectureQuiz[4],
    independent: fullExamQuiz[1],
  },
  'Vectors & projectiles': {
    model: fullExamQuiz[9],
    guided: lectureQuiz[10],
    independent: fullExamQuiz[11],
  },
  'Circular motion & graphs': {
    model: fullExamQuiz[7],
    guided: lectureQuiz[2],
    independent: lectureQuiz[11],
  },
  'Forces & Newton’s laws': {
    model: fullExamQuiz[18],
    guided: fullExamQuiz[15],
    independent: fullExamQuiz[16],
  },
};

function localDate() {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 10);
}

export default function LearningCoach() {
  const [tab, setTab] = useState('today');
  const { progress } = useLearningProgress();
  const activeMistakes = Object.values(progress.mistakes).filter((item) => !item.mastered).length;
  const attempts = Object.values(progress.attempts).reduce((sum, item) => sum + item.total, 0);

  return (
    <div className="learning-coach">
      <section className="coach-hero">
        <div>
          <span>your study plan that remembers</span>
          <h1>Let the guide decide what comes next.</h1>
          <p>
            It remembers mistakes, honest confidence, and mastered skills—then
            builds the smallest useful session instead of showing everything at once.
          </p>
        </div>
        <div className="coach-hero-stats">
          <div><strong>{attempts}</strong><span>attempts remembered</span></div>
          <div><strong>{activeMistakes}</strong><span>ideas to revisit</span></div>
        </div>
      </section>

      <nav className="coach-tabs" aria-label="Learning coach sections">
        {COACH_TABS.map(([id, label]) => (
          <button
            key={id}
            className={tab === id ? 'active' : ''}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === 'today' && <DailySession />}
      {tab === 'ladder' && <PracticeLadder />}
      {tab === 'mistakes' && <MistakeNotebook />}
      {tab === 'formulas' && <FormulaTrainer />}
      {tab === 'progress' && <ProgressDashboard />}
    </div>
  );
}

function DailySession() {
  const { progress, markDailyComplete } = useLearningProgress();
  const [started, setStarted] = useState(false);
  const [sessionPlan, setSessionPlan] = useState(null);
  const [justCompleted, setJustCompleted] = useState(false);
  const today = localDate();
  const plan = useMemo(
    () => buildDailyPlan(progress, ALL_QUESTIONS, formulaDecisionQuestions, today),
    [progress, today],
  );
  const alreadyCompleted = Boolean(progress.daily[today]?.completed || justCompleted);

  const startSession = () => {
    setSessionPlan(plan);
    setStarted(true);
  };

  if (started && sessionPlan) {
    return (
      <section className="daily-quiz">
        <button className="coach-back" onClick={() => setStarted(false)}>← Session overview</button>
        <Quiz
          key={`daily-${today}`}
          title="Today’s Adaptive Six"
          questions={sessionPlan.map((item) => item.question)}
          onComplete={() => {
            markDailyComplete(today);
            setJustCompleted(true);
            setStarted(false);
          }}
        />
      </section>
    );
  }

  return (
    <section className="daily-session">
      <header>
        <span>{alreadyCompleted ? 'done for today' : 'about ten minutes'}</span>
        <h2>{alreadyCompleted ? 'Today’s session is complete.' : 'Six questions. One useful little session.'}</h2>
        <p>
          {alreadyCompleted
            ? 'Rest is part of learning. Tomorrow the coach will build a fresh mix from today’s results.'
            : 'The mix adapts as the guide learns what feels easy, uncertain, or frustrating.'}
        </p>
      </header>

      <div className="daily-plan">
        {plan.map((item, index) => (
          <article key={getQuestionKey(item.question)}>
            <span>{index + 1}</span>
            <div>
              <small>{item.label}</small>
              <p>{item.question.question}</p>
            </div>
          </article>
        ))}
      </div>

      {!alreadyCompleted && (
        <button className="coach-primary" onClick={startSession}>
          Start today’s six →
        </button>
      )}
      {alreadyCompleted && (
        <button className="coach-secondary" onClick={startSession}>
          Do an optional extra round
        </button>
      )}

      {!Object.keys(progress.mistakes).length && (
        <p className="coach-note">
          No old mistakes exist yet, so today’s two mistake slots use foundation
          questions. They become truly adaptive after the first practice attempt.
        </p>
      )}
    </section>
  );
}

function PracticeLadder() {
  const { progress, setLadderStage } = useLearningProgress();
  const [concept, setConcept] = useState(Object.keys(LADDERS)[0]);
  const ladder = LADDERS[concept];
  const stage = progress.ladders[concept]?.stage ?? 0;
  const model = getQuizTeaching(ladder.model);

  return (
    <section className="practice-ladder">
      <header className="coach-section-heading">
        <span>example → help → independence → sleep</span>
        <h2>Learn one skill in four gentle passes.</h2>
        <p>Do not prove you can solve it immediately. Let the help disappear one layer at a time.</p>
      </header>

      <div className="concept-picker">
        {Object.keys(LADDERS).map((name) => (
          <button
            key={name}
            className={name === concept ? 'active' : ''}
            onClick={() => setConcept(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="ladder-track">
        {[
          ['1', 'Watch one'],
          ['2', 'Try with hints'],
          ['3', 'Try alone'],
          ['4', 'Return tomorrow'],
        ].map(([number, label], index) => (
          <div className={stage >= index ? 'active' : ''} key={label}>
            <span>{number}</span><p>{label}</p>
          </div>
        ))}
      </div>

      {stage === 0 && (
        <article className="model-example">
          <span>pass 1 · watch the reasoning</span>
          <h3>{ladder.model.question}</h3>
          <div className="model-rule"><b>Rule:</b> {model.rule}</div>
          <ol>
            {model.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p><b>Why:</b> {model.why}</p>
          <button className="coach-primary" onClick={() => setLadderStage(concept, 1)}>
            I followed the example
          </button>
        </article>
      )}

      {stage === 1 && (
        <div className="ladder-quiz">
          <div className="ladder-instruction">
            <strong>Pass 2: use help freely.</strong>
            Open the hint before answering. Learning with support is the goal here.
          </div>
          <Quiz
            key={`${concept}-guided`}
            title={`${concept}: Guided Try`}
            questions={[ladder.guided]}
            onComplete={() => setLadderStage(concept, 2)}
          />
        </div>
      )}

      {stage === 2 && (
        <div className="ladder-quiz">
          <div className="ladder-instruction">
            <strong>Pass 3: retrieve it yourself.</strong>
            This attempt hides the Hint button. A full correction still appears if needed.
          </div>
          <Quiz
            key={`${concept}-independent`}
            title={`${concept}: Independent Try`}
            questions={[ladder.independent]}
            hintsEnabled={false}
            onComplete={() => setLadderStage(concept, 3)}
          />
        </div>
      )}

      {stage >= 3 && (
        <div className="revisit-card">
          <span>pass 4 · let the brain store it</span>
          <h3>Come back on {progress.ladders[concept]?.revisitOn}.</h3>
          <p>
            Sleep and time make retrieval stronger. Tomorrow’s adaptive session
            will consider this concept again.
          </p>
          <button className="coach-secondary" onClick={() => setLadderStage(concept, 1)}>
            I want another round now
          </button>
        </div>
      )}
    </section>
  );
}

function MistakeNotebook() {
  const { progress } = useLearningProgress();
  const [practiceKey, setPracticeKey] = useState(null);
  const [showMastered, setShowMastered] = useState(false);
  const entries = Object.entries(progress.mistakes)
    .filter(([, item]) => showMastered || !item.mastered)
    .sort(([, a], [, b]) => Number(a.mastered) - Number(b.mastered));
  const practiceEntry = practiceKey ? progress.mistakes[practiceKey] : null;

  if (practiceEntry) {
    return (
      <section className="notebook-practice">
        <button className="coach-back" onClick={() => setPracticeKey(null)}>← Mistake notebook</button>
        <div className="mastery-rule">
          Get this right twice after the original mistake to mark it mastered.
          Current streak: {practiceEntry.correctStreak ?? 0}/2.
        </div>
        <Quiz
          key={`${practiceKey}-${practiceEntry.correctStreak}`}
          title="Targeted Mistake Practice"
          questions={[practiceEntry.question]}
          onComplete={() => setPracticeKey(null)}
        />
      </section>
    );
  }

  return (
    <section className="mistake-notebook">
      <header className="coach-section-heading">
        <span>nothing embarrassing—just useful clues</span>
        <h2>Your mistake notebook.</h2>
        <p>Every miss is saved automatically. Two later correct attempts move it to mastered.</p>
      </header>

      <button className="mastered-toggle" onClick={() => setShowMastered((value) => !value)}>
        {showMastered ? 'Hide mastered ideas' : 'Show mastered ideas'}
      </button>

      {!entries.length && (
        <div className="empty-notebook">
          <strong>No active mistakes.</strong>
          <p>Missed quiz questions will appear here automatically with their rule and reason.</p>
        </div>
      )}

      <div className="mistake-list">
        {entries.map(([key, item]) => {
          const teaching = getQuizTeaching(item.question);
          const selected = item.question.options.find((option) => option.startsWith(item.selectedLetter));
          const correct = item.question.options.find((option) => option.startsWith(item.question.answer));
          return (
            <article className={item.mastered ? 'mastered' : ''} key={key}>
              <div className="mistake-status">
                <span>{item.mastered ? 'mastered' : `${item.correctStreak ?? 0}/2 recovery`}</span>
                <small>{item.concept}</small>
              </div>
              <h3>{item.question.question}</h3>
              <div className="mistake-answers">
                <p><b>Last wrong choice:</b> {selected}</p>
                <p><b>Correct choice:</b> {correct}</p>
              </div>
              <div className="mistake-rule"><b>Rule:</b> {teaching.rule}</div>
              <p className="mistake-why">{teaching.why}</p>
              {!item.mastered && (
                <button className="coach-primary" onClick={() => setPracticeKey(key)}>
                  Practice this idea
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function FormulaTrainer() {
  return (
    <section className="formula-trainer">
      <header className="coach-section-heading">
        <span>choose before calculating</span>
        <h2>Formula decision trainer.</h2>
        <p>
          These questions train the moment before the math: identifying which
          relationship fits the knowns and unknown.
        </p>
      </header>
      <Quiz
        key="formula-decision-trainer"
        title="Which Formula Fits?"
        questions={formulaDecisionQuestions}
      />
    </section>
  );
}

function ProgressDashboard() {
  const { progress, clearProgress } = useLearningProgress();
  const concepts = summarizeConcepts(progress);
  const attempts = Object.values(progress.attempts);
  const total = attempts.reduce((sum, item) => sum + item.total, 0);
  const correct = attempts.reduce((sum, item) => sum + item.correct, 0);
  const active = Object.values(progress.mistakes).filter((item) => !item.mastered).length;
  const mastered = Object.values(progress.mistakes).filter((item) => item.mastered).length;
  const unsure = Object.values(progress.confidence).filter((item) => item.level !== 'confident').length;

  const reset = () => {
    if (window.confirm('Erase all remembered attempts, confidence, mistakes, and daily sessions?')) {
      clearProgress();
    }
  };

  return (
    <section className="progress-dashboard">
      <header className="coach-section-heading">
        <span>honest progress, not pressure</span>
        <h2>What the coach has learned.</h2>
        <p>Accuracy matters, but uncertainty and recovered mistakes matter too.</p>
      </header>

      <div className="progress-summary">
        <article><strong>{total}</strong><span>total attempts</span></article>
        <article><strong>{total ? Math.round((correct / total) * 100) : 0}%</strong><span>accuracy</span></article>
        <article><strong>{active}</strong><span>active mistakes</span></article>
        <article><strong>{mastered}</strong><span>mistakes mastered</span></article>
        <article><strong>{unsure}</strong><span>uncertain answers</span></article>
      </div>

      <div className="concept-progress">
        {!Object.keys(concepts).length && <p>Complete a quiz to begin the concept map.</p>}
        {Object.entries(concepts).map(([concept, stats]) => {
          const rate = stats.attempts ? Math.round((stats.correct / stats.attempts) * 100) : 0;
          return (
            <article key={concept}>
              <div><strong>{concept}</strong><span>{rate}% accurate · {stats.unsure} uncertain</span></div>
              <div className="concept-meter"><span style={{ width: `${rate}%` }} /></div>
            </article>
          );
        })}
      </div>

      <button className="reset-learning" onClick={reset}>Erase saved learning progress</button>
    </section>
  );
}
