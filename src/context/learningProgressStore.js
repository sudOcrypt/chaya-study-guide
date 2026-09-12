import { createContext, useContext } from 'react';

export const LearningProgressContext = createContext(null);

export function useLearningProgress() {
  const context = useContext(LearningProgressContext);
  if (!context) throw new Error('useLearningProgress must be used inside LearningProgressProvider');
  return context;
}
