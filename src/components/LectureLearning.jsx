import { useState } from 'react';
import {
  formulaFinder,
  lectureFlashcards,
  lectureFormulas,
  lectureLessons,
  lectureQuiz,
  physicsBasics,
  symbolGlossary,
  universalProblemSteps,
} from '../data/lectureData';
import { lectureExamples } from '../data/lectureExamples';
import { explainOneStep } from '../utils/stepExplanation';
import FlashcardDeck from './FlashcardDeck';
import Quiz from './Quiz';

const PANELS = [
  { id: 'basics', label: 'Start From Zero' },
  { id: 'path', label: 'Learning Path' },
  { id: 'lessons', label: 'Guided Lessons' },
  { id: 'examples', label: `Slide Examples (${lectureExamples.length})` },
  { id: 'formulas', label: 'Formula Sheet' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Check Yourself' },
];

export default function LectureLearning() {
  const [panel, setPanel] = useState('basics');

  return (
    <div className="lecture-learning">
      <div className="lecture-hero">
        <div>
          <span className="lecture-kicker">new lecture learning area</span>
          <h1>Learn the <em>why</em>, not just the formula.</h1>
          <p>
            Everything from the August 26 and August 31 lectures, plus the Exam 1
            formula sheet, explained with no assumed physics knowledge and no skipped steps.
          </p>
        </div>
        <div className="lecture-source-list">
          <span>08/26 · one-dimensional motion</span>
          <span>08/31A · acceleration + free fall</span>
          <span>08/31B · vectors + components</span>
          <span>Exam 1 · formula sheet</span>
        </div>
      </div>

      <div className="lecture-tabs" role="tablist" aria-label="Lecture learning sections">
        {PANELS.map((item) => (
          <button
            key={item.id}
            className={panel === item.id ? 'active' : ''}
            onClick={() => setPanel(item.id)}
            role="tab"
            aria-selected={panel === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="lecture-panel">
        {panel === 'basics' && <StartFromZero onContinue={() => setPanel('path')} />}
        {panel === 'path' && <LearningPath onOpen={setPanel} />}
        {panel === 'lessons' && <GuidedLessons />}
        {panel === 'examples' && <WorkedExamples />}
        {panel === 'formulas' && <FormulaSheet />}
        {panel === 'flashcards' && (
          <FlashcardDeck
            key="lecture-flashcards"
            cards={lectureFlashcards}
            title="Lecture Review Flashcards"
          />
        )}
        {panel === 'quiz' && (
          <Quiz
            key="lecture-quiz"
            questions={lectureQuiz}
            title="Lecture Understanding Check"
          />
        )}
      </div>
    </div>
  );
}

function StartFromZero({ onContinue }) {
  return (
    <div className="start-zero">
      <div className="zero-intro">
        <span>begin here</span>
        <h2>First, what do all these words mean?</h2>
        <p>
          This section assumes nothing. Read one box at a time. The short sentence
          is the idea; the paragraph underneath explains exactly what it means.
        </p>
      </div>

      <div className="basic-concepts">
        {physicsBasics.map((item) => (
          <article key={item.word}>
            <span>{item.icon}</span>
            <div>
              <h3>{item.word}</h3>
              <strong>{item.tinyVersion}</strong>
              <p>{item.details}</p>
              <small><b>Example:</b> {item.example}</small>
            </div>
          </article>
        ))}
      </div>

      <section className="symbol-section">
        <div>
          <span>symbol decoder</span>
          <h2>What every letter means.</h2>
          <p>A letter is only a short label for a physical idea. It is not a new kind of math.</p>
        </div>
        <div className="symbol-list">
          <div className="symbol-row symbol-head">
            <strong>Symbol</strong><strong>Meaning</strong><strong>Unit</strong>
          </div>
          {symbolGlossary.map(([symbol, meaning, unit]) => (
            <div className="symbol-row" key={symbol}>
              <strong>{symbol}</strong><span>{meaning}</span><small>{unit}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="universal-steps">
        <div className="zero-intro">
          <span>use this every time</span>
          <h2>Seven tiny steps for any problem.</h2>
          <p>Do not jump straight to an equation. Moving in this order prevents most mistakes.</p>
        </div>
        <div>
          {universalProblemSteps.map((step, index) => (
            <article key={step.title}>
              <span>{index + 1}</span>
              <p><strong>{step.title}</strong>{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <button className="zero-continue" onClick={onContinue}>
        I understand the basic words—show me the learning path →
      </button>
    </div>
  );
}

function LearningPath({ onOpen }) {
  return (
    <div className="learning-path">
      <div className="path-intro">
        <span>recommended order</span>
        <h2>Build one idea on top of the last.</h2>
        <p>
          Start with signs and graphs before using equations. Free fall and vectors
          become much easier once those foundations feel natural.
        </p>
      </div>

      <div className="path-steps">
        {lectureLessons.map((lesson, index) => (
          <button key={lesson.id} onClick={() => onOpen('lessons')}>
            <span className="path-number">{String(index + 1).padStart(2, '0')}</span>
            <span className="path-icon">{lesson.icon}</span>
            <strong>{lesson.title}</strong>
            <small>{lesson.source}</small>
          </button>
        ))}
      </div>

      <div className="study-recipe">
        <div>
          <span>1</span>
          <p><strong>Read a lesson</strong>Say the big idea back in your own words.</p>
        </div>
        <div>
          <span>2</span>
          <p><strong>Follow the example</strong>Cover the answer and predict each step.</p>
        </div>
        <div>
          <span>3</span>
          <p><strong>Use the formula finder</strong>Practice choosing before calculating.</p>
        </div>
        <div>
          <span>4</span>
          <p><strong>Check yourself</strong>Use missed questions to choose what to revisit.</p>
        </div>
      </div>

      <div className="path-actions">
        <button onClick={() => onOpen('lessons')}>Start the guided lessons →</button>
        <button onClick={() => onOpen('examples')}>Walk through every slide example</button>
        <button onClick={() => onOpen('formulas')}>Open the formula sheet</button>
      </div>
    </div>
  );
}

function GuidedLessons() {
  const [activeLesson, setActiveLesson] = useState(lectureLessons[0].id);
  const [showExample, setShowExample] = useState(false);
  const lesson = lectureLessons.find((item) => item.id === activeLesson);

  const chooseLesson = (id) => {
    setActiveLesson(id);
    setShowExample(false);
  };

  return (
    <div className="guided-lessons">
      <aside className="lesson-nav">
        <span>lesson map</span>
        {lectureLessons.map((item, index) => (
          <button
            key={item.id}
            className={item.id === activeLesson ? 'active' : ''}
            onClick={() => chooseLesson(item.id)}
          >
            <small>{String(index + 1).padStart(2, '0')}</small>
            <span>{item.icon}</span>
            {item.title}
          </button>
        ))}
      </aside>

      <article className="lesson-page">
        <div className="lesson-heading">
          <span>{lesson.source}</span>
          <h2>{lesson.title}</h2>
          <p>{lesson.bigIdea}</p>
        </div>

        <div className="lesson-explanation">
          <h3>Make it make sense</h3>
          {lesson.explanation.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        <div className="lesson-key-ideas">
          <h3>Keep these in your head</h3>
          <ul>
            {lesson.keyIdeas.map((idea) => <li key={idea}>{idea}</li>)}
          </ul>
        </div>

        <div className="worked-example">
          <div className="example-label">worked example</div>
          <h3>{lesson.example.prompt}</h3>
          <p><strong>Set it up:</strong> {lesson.example.setup}</p>
          <button onClick={() => setShowExample((visible) => !visible)}>
            {showExample ? 'Hide the walkthrough' : 'Try it, then reveal the walkthrough'}
          </button>
          {showExample && (
            <div className="example-answer">
              <p><strong>Work:</strong> {lesson.example.work}</p>
              <p><strong>Meaning:</strong> {lesson.example.answer}</p>
            </div>
          )}
        </div>

        <div className="common-trap">
          <span>watch out for this</span>
          <p>{lesson.trap}</p>
        </div>
      </article>
    </div>
  );
}

function WorkedExamples() {
  const [activeId, setActiveId] = useState(lectureExamples[0].id);
  const [openStep, setOpenStep] = useState(null);
  const activeIndex = lectureExamples.findIndex((example) => example.id === activeId);
  const example = lectureExamples[activeIndex];

  const move = (direction) => {
    const nextIndex = Math.min(
      lectureExamples.length - 1,
      Math.max(0, activeIndex + direction),
    );
    setActiveId(lectureExamples[nextIndex].id);
    setOpenStep(null);
  };

  return (
    <div className="worked-library">
      <aside className="example-nav">
        <div>
          <span>all slide questions</span>
          <p>Select any problem. Nothing is hidden or skipped.</p>
        </div>
        {lectureExamples.map((item, index) => (
          <button
            key={item.id}
            className={item.id === activeId ? 'active' : ''}
            onClick={() => {
              setActiveId(item.id);
              setOpenStep(null);
            }}
          >
            <small>{String(index + 1).padStart(2, '0')}</small>
            <span><b>{item.title}</b>{item.source}</span>
          </button>
        ))}
      </aside>

      <article className="example-page">
        <header>
          <span>{example.source} · example {activeIndex + 1} of {lectureExamples.length}</span>
          <h2>{example.title}</h2>
          <p>{example.prompt}</p>
        </header>

        <section className="example-first-thought">
          <span>What is this really asking?</span>
          <p>{example.idea}</p>
        </section>

        <div className="example-setup-grid">
          <section>
            <h3>What we know</h3>
            <ul>{example.knowns.map((known) => <li key={known}>{known}</li>)}</ul>
          </section>
          <section>
            <h3>What we need</h3>
            <p>{example.find}</p>
          </section>
          <section>
            <h3>Signs and direction</h3>
            <p>{example.axis}</p>
          </section>
        </div>

        <section className="formula-choice">
          <div>
            <span>choose before calculating</span>
            <h3>Which formula—and why?</h3>
          </div>
          {example.formulas.map((formula) => (
            <article key={formula.equation}>
              <strong>{formula.equation}</strong>
              <p>{formula.why}</p>
            </article>
          ))}
        </section>

        <section className="tiny-walkthrough">
          <div>
            <span>slow walkthrough</span>
            <h3>Every step, one at a time</h3>
          </div>
          <ol>
            {example.steps.map((step, index) => (
              <li key={`${step.title}-${index}`}>
                <span>{index + 1}</span>
                <div>
                  <h4>{step.title}</h4>
                  {step.math && <code>{step.math}</code>}
                  <p>{step.body}</p>
                  <button
                    className="step-help-toggle"
                    onClick={() => setOpenStep(openStep === index ? null : index)}
                    aria-expanded={openStep === index}
                  >
                    {openStep === index ? 'Hide smaller explanation' : 'I don’t understand this step'}
                  </button>
                  {openStep === index && (
                    <div className="step-help-detail">
                      {explainOneStep(`${step.math ? `${step.math}. ` : ''}${step.body}`)
                        .map((line) => <p key={line}>{line}</p>)}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="example-final">
          <div><span>final answer</span><p>{example.answer}</p></div>
          <div><span>does it make sense?</span><p>{example.check}</p></div>
        </section>

        <nav className="example-pager" aria-label="Worked example navigation">
          <button disabled={activeIndex === 0} onClick={() => move(-1)}>← Previous example</button>
          <span>{activeIndex + 1} / {lectureExamples.length}</span>
          <button disabled={activeIndex === lectureExamples.length - 1} onClick={() => move(1)}>Next example →</button>
        </nav>
      </article>
    </div>
  );
}

function FormulaSheet() {
  const [finderAnswer, setFinderAnswer] = useState(formulaFinder[0]);

  return (
    <div className="formula-learning">
      <div className="formula-finder">
        <div>
          <span>formula finder</span>
          <h2>What does the problem give you?</h2>
          <p>Choose the situation before touching the calculator.</p>
        </div>
        <div className="finder-options">
          {formulaFinder.map((item) => (
            <button
              key={item.id}
              className={finderAnswer.id === item.id ? 'active' : ''}
              onClick={() => setFinderAnswer(item)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="finder-result">
          <span>best starting point</span>
          <p>{finderAnswer.answer}</p>
        </div>
      </div>

      <div className="formula-groups">
        {lectureFormulas.map((group) => (
          <section key={group.group} style={{ '--formula-accent': group.color }}>
            <h3>{group.group}</h3>
            <div>
              {group.formulas.map((formula) => (
                <article key={formula.equation}>
                  <strong>{formula.equation}</strong>
                  <p>{formula.use}</p>
                  <small>{formula.note}</small>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="formula-symbol-reminder">
        <h3>Before using any equation</h3>
        <p>
          Δ means final minus initial. A subscript 0 or i means “at the start.”
          A subscript f means “at the end.” x describes horizontal motion and y
          describes vertical motion. The same equation shape works on either axis.
        </p>
      </section>

      <div className="formula-rules">
        <h3>Four rules that prevent most mistakes</h3>
        <ol>
          <li>Draw an axis and write which direction is positive.</li>
          <li>List every known value with its sign and unit.</li>
          <li>Choose an equation with only one unknown.</li>
          <li>Check whether the sign, unit, and size of the answer make physical sense.</li>
        </ol>
      </div>
    </div>
  );
}
