import { getQuestionConcept, getQuestionKey } from './learningProgress.js';

function dayNumber(date) {
  return [...date].reduce((total, character) => total + character.charCodeAt(0), 0);
}

function rotate(items, offset) {
  if (!items.length) return [];
  const start = offset % items.length;
  return [...items.slice(start), ...items.slice(0, start)];
}

export function buildDailyPlan(progress, questions, formulaQuestions, date) {
  const plan = [];
  const used = new Set();
  const offset = dayNumber(date);

  const add = (question, type, label) => {
    if (!question) return false;
    const key = getQuestionKey(question);
    if (used.has(key)) return false;
    used.add(key);
    plan.push({ question, type, label });
    return true;
  };

  const mistakes = Object.values(progress.mistakes)
    .filter((entry) => !entry.mastered)
    .sort((a, b) => new Date(a.lastAttemptAt) - new Date(b.lastAttemptAt));

  mistakes.slice(0, 2).forEach((entry) => add(entry.question, 'mistake', 'Old mistake'));

  const foundation = rotate(questions, offset);
  while (plan.filter((item) => item.type === 'mistake' || item.type === 'foundation').length < 2) {
    const next = foundation.find((question) => !used.has(getQuestionKey(question)));
    if (!next) break;
    add(next, 'foundation', 'Foundation warm-up');
  }

  const weakKeys = new Set([
    ...Object.entries(progress.attempts)
      .filter(([, attempt]) => attempt.correct / attempt.total < 0.8)
      .map(([key]) => key),
    ...Object.entries(progress.confidence)
      .filter(([, item]) => item.level !== 'confident')
      .map(([key]) => key),
  ]);

  const weakQuestions = questions
    .filter((question) => weakKeys.has(getQuestionKey(question)))
    .sort((a, b) => {
      const aAttempt = progress.attempts[getQuestionKey(a)];
      const bAttempt = progress.attempts[getQuestionKey(b)];
      const aRate = aAttempt ? aAttempt.correct / aAttempt.total : 0;
      const bRate = bAttempt ? bAttempt.correct / bAttempt.total : 0;
      return aRate - bRate;
    });

  const selectedWeakConcepts = new Set();

  Object.entries(progress.ladders ?? {})
    .filter(([, ladder]) => ladder.stage >= 3 && ladder.revisitOn <= date)
    .forEach(([concept]) => {
      if (plan.filter((item) => item.type === 'weak').length >= 2) return;
      const reviewQuestion = questions.find(
        (question) => getQuestionConcept(question) === concept
          && !used.has(getQuestionKey(question)),
      );
      if (add(reviewQuestion, 'weak', 'Tomorrow review')) selectedWeakConcepts.add(concept);
    });

  weakQuestions.forEach((question) => {
    if (plan.filter((item) => item.type === 'weak').length >= 2) return;
    const concept = getQuestionConcept(question);
    if (selectedWeakConcepts.has(concept)) return;
    if (add(question, 'weak', 'Weak-skill review')) selectedWeakConcepts.add(concept);
  });

  weakQuestions.forEach((question) => {
    if (plan.filter((item) => item.type === 'weak').length >= 2) return;
    add(question, 'weak', 'Weak-skill review');
  });

  while (plan.filter((item) => item.type === 'weak' || item.type === 'builder').length < 2) {
    const next = foundation.find((question) => !used.has(getQuestionKey(question)));
    if (!next) break;
    add(next, 'builder', 'Skill builder');
  }

  add(
    formulaQuestions[offset % formulaQuestions.length],
    'formula',
    'Choose the formula',
  );

  const easyCandidates = questions.filter((question) => {
    const text = question.question.toLowerCase();
    return text.includes('slope')
      || text.includes('quadrant')
      || text.includes('very top')
      || text.includes('same for a person');
  });
  const easy = rotate(easyCandidates, offset).find(
    (question) => !used.has(getQuestionKey(question)),
  ) ?? foundation.find((question) => !used.has(getQuestionKey(question)));
  add(easy, 'easy', 'Confidence finisher');

  return plan.slice(0, 6);
}

export function summarizeConcepts(progress) {
  const concepts = {};

  Object.values(progress.attempts).forEach((attempt) => {
    const concept = attempt.concept ?? getQuestionConcept(attempt.question);
    const current = concepts[concept] ?? { attempts: 0, correct: 0, unsure: 0 };
    current.attempts += attempt.total;
    current.correct += attempt.correct;
    concepts[concept] = current;
  });

  Object.values(progress.confidence).forEach((entry) => {
    const concept = entry.concept ?? getQuestionConcept(entry.question);
    const current = concepts[concept] ?? { attempts: 0, correct: 0, unsure: 0 };
    if (entry.level !== 'confident') current.unsure += 1;
    concepts[concept] = current;
  });

  return concepts;
}
