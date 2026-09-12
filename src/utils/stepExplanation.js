export function explainOneStep(step) {
  const explanations = [
    `In ordinary words, this step says: ${step}`,
    'Only do this one instruction right now. Do not jump ahead to the final answer.',
  ];

  if (step.includes('=')) explanations.push('Each equals sign means the amount on its left is exactly the same as the amount on its right.');
  if (step.includes('Δ')) explanations.push('The triangle Δ means “change in”: ending value minus starting value.');
  if (step.includes('²')) explanations.push('A small ² means multiply that quantity by itself once.');
  if (step.includes('√')) explanations.push('The square-root sign asks for the positive number that produces the value underneath when multiplied by itself.');
  if (step.includes('/') || step.toLowerCase().includes('divide')) explanations.push('A slash or division separates the total into equal-sized groups.');
  if (step.includes('−') || step.includes('negative')) explanations.push('A minus sign can mean subtraction or a direction opposite the chosen positive axis. Keep it attached until the last interpretation.');
  if (/[a-z]\/s|m\/s|m\/s²/i.test(step)) explanations.push('Keep the units attached. m means meters, s means seconds, m/s means meters each second, and m/s² means velocity changes each second.');

  return explanations;
}
