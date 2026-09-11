import test from 'node:test';
import assert from 'node:assert/strict';

import {
  lectureFlashcards,
  lectureFormulas,
  lectureLessons,
  lectureQuiz,
} from './lectureData.js';
import { getOptionLetter, isAnswerCorrect } from '../utils/quizScoring.js';

test('includes all lecture sources and a guided example for every lesson', () => {
  assert.equal(lectureLessons.length, 6);
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

test('formula reference covers the four source categories', () => {
  assert.equal(lectureFormulas.length, 4);
  lectureFormulas.forEach((group) => assert.ok(group.formulas.length >= 4));
});

test('lecture flashcards are unique', () => {
  assert.equal(lectureFlashcards.length, 18);
  assert.equal(new Set(lectureFlashcards.map((card) => card.front)).size, 18);
});

test('every lecture quiz answer maps to an option and scores correctly', () => {
  assert.equal(lectureQuiz.length, 12);
  lectureQuiz.forEach((question, index) => {
    const option = question.options.find(
      (candidate) => getOptionLetter(candidate) === question.answer,
    );
    assert.ok(option, `Lecture question ${index + 1} must include ${question.answer}`);
    assert.equal(isAnswerCorrect(getOptionLetter(option), question.answer), true);
  });
});
