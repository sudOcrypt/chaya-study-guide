import { useState } from 'react';
import { topics, combinedFlashcards, combinedQuiz } from './data/studyData';
import FlashcardDeck from './components/FlashcardDeck';
import Quiz from './components/Quiz';
import MatchingGame from './components/MatchingGame';
import './App.css';

const SECTIONS = ['notes', 'flashcards', 'quiz', 'matching'];
const SECTION_LABELS = { notes: 'Study Notes', flashcards: 'Flashcards', quiz: 'Quiz', matching: 'Matching Game' };

export default function App() {
  const [view, setView] = useState('home'); // 'home' | topicId | 'combined'
  const [section, setSection] = useState('notes');
  const activeTopic = topics.find(t => t.id === view);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <button className="logo-btn" onClick={() => setView('home')}>
            <span className="logo-icon">💗</span>
            <span className="logo-text">chaya's physics corner</span>
            <span className="logo-sub">made with love (and a little panic)</span>
          </button>
          <nav className="header-nav">
            {topics.map(t => (
              <button
                key={t.id}
                className={`nav-pill ${view === t.id ? 'active' : ''}`}
                style={{ '--accent': t.color }}
                onClick={() => { setView(t.id); setSection('notes'); }}
              >
                {t.title}
              </button>
            ))}
            <button
              className={`nav-pill combined ${view === 'combined' ? 'active' : ''}`}
              onClick={() => { setView('combined'); setSection('flashcards'); }}
            >
              Practice Exam
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {view === 'home' && <HomeView setView={setView} setSection={setSection} />}
        {activeTopic && (
          <TopicView
            topic={activeTopic}
            section={section}
            setSection={setSection}
          />
        )}
        {view === 'combined' && (
          <CombinedView section={section} setSection={setSection} />
        )}
      </main>

      <footer className="app-footer">
        <p>made for chaya with way too much love + a little physics ♡</p>
      </footer>
    </div>
  );
}

function HomeView({ setView, setSection }) {
  return (
    <div className="home-view">
      <div className="home-hero">
        <div className="eyebrow">hey babe, you've got this ♡</div>
        <h1>physics, but <em>less scary</em></h1>
        <p className="hero-sub">I put everything from your practice exam in one little place so you can study without digging through a million pages.</p>
        <div className="love-note">
          <span className="note-label">a note for you</span>
          <p>No pressure to know everything right away. Take your time, trust that smart brain of yours, and remember I'm already proud of you.</p>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-val">{combinedFlashcards.length}</span>
            <span className="stat-lbl">little flashcards</span>
          </div>
          <div className="hero-stat">
            <span className="stat-val">{combinedQuiz.length}</span>
            <span className="stat-lbl">practice questions</span>
          </div>
          <div className="hero-stat">
            <span className="stat-val">{topics.length}</span>
            <span className="stat-lbl">cozy study sections</span>
          </div>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map(t => (
          <div key={t.id} className="topic-card" style={{ '--accent': t.color }}>
            <div className="topic-card-header">
              <span className="topic-icon">{t.icon}</span>
              <h2 className="topic-title">{t.title}</h2>
            </div>
            <p className="topic-summary-preview">{t.summary[0].content.substring(0, 100)}...</p>
            <div className="topic-card-meta">
              <span>{t.flashcards.length} flashcards</span>
              <span>{t.quiz.length} questions</span>
              <span>{t.summary.length} topics</span>
            </div>
            <div className="topic-card-actions">
              <button className="card-btn notes" onClick={() => { setView(t.id); setSection('notes'); }}>Study Notes</button>
              <button className="card-btn flash" onClick={() => { setView(t.id); setSection('flashcards'); }}>Flashcards</button>
              <button className="card-btn quiz" onClick={() => { setView(t.id); setSection('quiz'); }}>Quiz</button>
              <button className="card-btn match" onClick={() => { setView(t.id); setSection('matching'); }}>Match</button>
            </div>
          </div>
        ))}

        <div className="topic-card combined-card">
          <div className="topic-card-header">
            <span className="topic-icon">🎯</span>
            <h2 className="topic-title">Full Practice Exam</h2>
          </div>
          <p className="topic-summary-preview">Take all 20 PDF questions in order, see immediate feedback, then review every worked solution.</p>
          <div className="topic-card-meta">
            <span>{combinedFlashcards.length} flashcards</span>
            <span>{combinedQuiz.length} questions</span>
            <span>All 4 units</span>
          </div>
          <div className="topic-card-actions">
            <button className="card-btn flash" onClick={() => { setView('combined'); setSection('flashcards'); }}>Flashcards</button>
            <button className="card-btn quiz" onClick={() => { setView('combined'); setSection('quiz'); }}>Start Exam</button>
          </div>
        </div>
      </div>

    </div>
  );
}

function TopicView({ topic, section, setSection }) {
  return (
    <div className="topic-view">
      <div className="topic-header" style={{ '--accent': topic.color }}>
        <span className="topic-view-icon">{topic.icon}</span>
        <div>
          <h1 className="topic-view-title">{topic.title}</h1>
          <p className="topic-view-meta">{topic.flashcards.length} flashcards · {topic.quiz.length} quiz questions · {topic.summary.length} key topics</p>
        </div>
      </div>

      <div className="section-tabs">
        {SECTIONS.map(s => (
          <button
            key={s}
            className={`section-tab ${section === s ? 'active' : ''}`}
            style={{ '--accent': topic.color }}
            onClick={() => setSection(s)}
          >
            {SECTION_LABELS[s]}
          </button>
        ))}
      </div>

      <div className="section-content">
        {section === 'notes' && <NotesSection topic={topic} />}
        {section === 'flashcards' && <FlashcardDeck key={topic.id} cards={topic.flashcards} title={topic.title + ' Flashcards'} />}
        {section === 'quiz' && <Quiz key={topic.id + '-quiz'} questions={topic.quiz} title={topic.title + ' Quiz'} />}
        {section === 'matching' && <MatchingGame key={topic.id + '-match'} cards={topic.flashcards} title={topic.title} />}
      </div>
    </div>
  );
}

function NotesSection({ topic }) {
  const [open, setOpen] = useState(new Set([0]));
  const toggle = (i) => {
    setOpen(prev => {
      const s = new Set(prev);
      if (s.has(i)) s.delete(i); else s.add(i);
      return s;
    });
  };
  return (
    <div className="notes-section">
      <div className="notes-intro">
        <h2>Key Concepts: {topic.title}</h2>
        <p>Click each section to expand. These notes target the concepts and equations used on the practice exam.</p>
      </div>
      <div className="accordion">
        {topic.summary.map((item, i) => (
          <div key={i} className={`accordion-item ${open.has(i) ? 'open' : ''}`} style={{ '--accent': topic.color }}>
            <button className="accordion-header" onClick={() => toggle(i)}>
              <span>{item.heading}</span>
              <span className="accordion-chevron">{open.has(i) ? '▲' : '▼'}</span>
            </button>
            {open.has(i) && (
              <div className="accordion-body">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CombinedView({ section, setSection }) {
  const COMBINED_SECTIONS = ['flashcards', 'quiz'];
  return (
    <div className="topic-view">
      <div className="topic-header combined-header">
        <span className="topic-view-icon">🎯</span>
        <div>
          <h1 className="topic-view-title">Full Practice Exam</h1>
          <p className="topic-view-meta">{combinedFlashcards.length} flashcards · {combinedQuiz.length} questions · All 4 units</p>
        </div>
      </div>

      <div className="section-tabs">
        {COMBINED_SECTIONS.map(s => (
          <button
            key={s}
            className={`section-tab ${section === s ? 'active' : ''}`}
            onClick={() => setSection(s)}
          >
            {SECTION_LABELS[s]}
          </button>
        ))}
      </div>

      <div className="section-content">
        {section === 'flashcards' && <FlashcardDeck key="combined-flash" cards={combinedFlashcards} title="Exam 1 Review Flashcards" />}
        {section === 'quiz' && <Quiz key="combined-quiz" questions={combinedQuiz} title="Physics Exam 1 Practice Test" />}
      </div>
    </div>
  );
}
