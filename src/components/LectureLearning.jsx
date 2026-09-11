import { useState } from 'react';
import {
  formulaFinder,
  lectureFlashcards,
  lectureFormulas,
  lectureLessons,
  lectureQuiz,
} from '../data/lectureData';
import FlashcardDeck from './FlashcardDeck';
import Quiz from './Quiz';

const PANELS = [
  { id: 'path', label: 'Learning Path' },
  { id: 'lessons', label: 'Guided Lessons' },
  { id: 'formulas', label: 'Formula Sheet' },
  { id: 'flashcards', label: 'Flashcards' },
  { id: 'quiz', label: 'Check Yourself' },
];

export default function LectureLearning() {
  const [panel, setPanel] = useState('path');

  return (
    <div className="lecture-learning">
      <div className="lecture-hero">
        <div>
          <span className="lecture-kicker">new lecture learning area</span>
          <h1>Learn the <em>why</em>, not just the formula.</h1>
          <p>
            Everything from the August 26 and August 31 lectures, plus the Exam 1
            formula sheet, broken into one guided path.
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
        {panel === 'path' && <LearningPath onOpen={setPanel} />}
        {panel === 'lessons' && <GuidedLessons />}
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
