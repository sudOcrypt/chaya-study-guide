export function getOptionLetter(option) {
  const match = String(option).trim().match(/^([A-D])(?:[.)]|\s)/i);
  return match ? match[1].toUpperCase() : '';
}

export function normalizeAnswer(answer) {
  return String(answer).trim().charAt(0).toUpperCase();
}

export function isAnswerCorrect(selected, answer) {
  return normalizeAnswer(selected) === normalizeAnswer(answer);
}

export function calculateScore(questions, answers) {
  return questions.reduce(
    (score, question, index) => score + (isAnswerCorrect(answers[index], question.answer) ? 1 : 0),
    0,
  );
}
