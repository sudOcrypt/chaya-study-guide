import test from 'node:test';
import assert from 'node:assert/strict';

import {
  correctResponses,
  incorrectResponses,
  pickEncouragement,
} from './encouragements.js';

test('contains exactly 100 unique correct-answer responses', () => {
  assert.equal(correctResponses.length, 100);
  assert.equal(new Set(correctResponses).size, 100);
});

test('contains exactly 100 unique incorrect-answer responses', () => {
  assert.equal(incorrectResponses.length, 100);
  assert.equal(new Set(incorrectResponses).size, 100);
});

test('selects feedback from the appropriate response list', () => {
  assert.ok(correctResponses.includes(pickEncouragement(true)));
  assert.ok(incorrectResponses.includes(pickEncouragement(false)));
});

test('all responses are complete, readable sentences', () => {
  [...correctResponses, ...incorrectResponses].forEach((response) => {
    assert.ok(response.length >= 25);
    assert.match(response, /[!.]$/);
  });
});
