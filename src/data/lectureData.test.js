import test from 'node:test';
import assert from 'node:assert/strict';

import {
  lectureFlashcards,
  lectureFormulas,
  lectureLessons,
  lectureQuiz,
} from './lectureData.js';
import { lectureExamples } from './lectureExamples.js';
import { fullExamQuiz } from './studyData.js';
import { formulaDecisionQuestions } from './formulaDecisionData.js';
import { getQuizTeaching } from './quizTeaching.js';
import { getOptionLetter, isAnswerCorrect } from '../utils/quizScoring.js';
import { buildDailyPlan } from '../utils/learningPlan.js';

test('includes all lecture sources and a guided example for every lesson', () => {
  assert.equal(lectureLessons.length, 8);
  assert.ok(lectureLessons.some((lesson) => lesson.source.includes('08/26')));
  assert.ok(lectureLessons.some((lesson) => lesson.source.includes('08/31A')));
  assert.ok(lectureLessons.some((lesson) => lesson.source.includes('08/31B')));
  lectureLessons.forEach((lesson) => {
    assert.ok(lesson.explanation.length >= 3);
    assert.ok(lesson.example.prompt);
    assert.ok(lesson.example.work);
    assert.ok(lesson.example.answer);
  });
});

test('formula reference covers every lecture and formula-sheet category', () => {
  assert.equal(lectureFormulas.length, 5);
  lectureFormulas.forEach((group) => assert.ok(group.formulas.length >= 4));
});

test('lecture flashcards are unique', () => {
  assert.equal(lectureFlashcards.length, 24);
  assert.equal(new Set(lectureFlashcards.map((card) => card.front)).size, 24);
});

test('every lecture quiz answer maps to an option and scores correctly', () => {
  assert.equal(lectureQuiz.length, 16);
  lectureQuiz.forEach((question, index) => {
    const option = question.options.find(
      (candidate) => getOptionLetter(candidate) === question.answer,
    );
    assert.ok(option, `Lecture question ${index + 1} must include ${question.answer}`);
    assert.equal(isAnswerCorrect(getOptionLetter(option), question.answer), true);
  });
});

test('every lecture-slide question has a complete narrated walkthrough', () => {
  assert.equal(lectureExamples.length, 19);
  assert.equal(new Set(lectureExamples.map((example) => example.id)).size, 19);

  lectureExamples.forEach((example) => {
    assert.ok(example.source);
    assert.ok(example.prompt);
    assert.ok(example.idea);
    assert.ok(example.knowns.length >= 2);
    assert.ok(example.find);
    assert.ok(example.axis);
    assert.ok(example.formulas.length >= 1);
    assert.ok(example.steps.length >= 4);
    assert.ok(example.steps.every((step) => step.title && step.body));
    assert.ok(example.answer);
    assert.ok(example.check);
  });
});

test('every exam and practice question has a hint and start-from-zero correction', () => {
  const allQuestions = [...fullExamQuiz, ...lectureQuiz, ...formulaDecisionQuestions];
  assert.equal(allQuestions.length, 46);

  allQuestions.forEach((question) => {
    const teaching = getQuizTeaching(question);
    assert.ok(teaching.hint);
    assert.ok(teaching.ask);
    assert.ok(teaching.rule);
    assert.ok(teaching.steps.length >= 3);
    assert.ok(teaching.steps.every((step) => step.length >= 8));
    assert.ok(teaching.why);
  });
});

test('daily coach creates six unique questions with formula and confidence practice', () => {
  const progress = { attempts: {}, mistakes: {}, confidence: {}, ladders: {}, daily: {} };
  const questions = [...fullExamQuiz, ...lectureQuiz];
  const plan = buildDailyPlan(
    progress,
    questions,
    formulaDecisionQuestions,
    '2026-09-11',
  );

  assert.equal(plan.length, 6);
  assert.equal(new Set(plan.map((item) => item.question.question)).size, 6);
  assert.ok(plan.some((item) => item.type === 'formula'));
  assert.ok(plan.some((item) => item.type === 'easy'));
});
