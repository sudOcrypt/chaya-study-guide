import test from 'node:test';
import assert from 'node:assert/strict';

import { fullExamQuiz } from '../data/studyData.js';
import { calculateScore, getOptionLetter, isAnswerCorrect } from './quizScoring.js';

test('extracts the clicked answer letter without depending on option text', () => {
  assert.equal(getOptionLetter('A. 13.1 m³'), 'A');
  assert.equal(getOptionLetter(' d) final choice '), 'D');
});

test('accepts normalized forms of the same correct answer', () => {
  assert.equal(isAnswerCorrect('b', 'B'), true);
  assert.equal(isAnswerCorrect('B. 13.2 m³', 'B'), true);
  assert.equal(isAnswerCorrect('A', 'B'), false);
});

test('every correct option in the 20-question exam scores as correct', () => {
  fullExamQuiz.forEach((question) => {
    const correctOption = question.options.find(
      (option) => getOptionLetter(option) === question.answer,
    );
    assert.ok(correctOption, `Question ${question.number} must include answer ${question.answer}`);
    assert.equal(isAnswerCorrect(getOptionLetter(correctOption), question.answer), true);
  });
});

test('a perfect set of clicked answers receives 20 out of 20', () => {
  const answers = Object.fromEntries(
    fullExamQuiz.map((question, index) => [index, question.answer]),
  );
  assert.equal(calculateScore(fullExamQuiz, answers), 20);
});
