export function getQuestionKey(question) {
  return question.number
    ? `exam-${question.number}`
    : `question-${question.question.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 70)}`;
}

export function getQuestionConcept(question) {
  if (question.concept) return question.concept;
  if (question.number) {
    if (question.number <= 9) return 'Motion & measurement';
    if (question.number <= 13) return 'Vectors & projectiles';
    if (question.number <= 15) return 'Circular motion & graphs';
    return 'Forces & Newton’s laws';
  }

  const text = question.question.toLowerCase();
  if (text.includes('vector') || text.includes('quadrant') || text.includes('component')) return 'Vectors & projectiles';
  if (text.includes('graph') || text.includes('area')) return 'Circular motion & graphs';
  if (text.includes('force') || text.includes('newton') || text.includes('friction')) return 'Forces & Newton’s laws';
  return 'Motion & measurement';
}
