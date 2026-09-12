import { useCallback, useEffect, useMemo, useState } from 'react';
import { LearningProgressContext } from './learningProgressStore';
import { getQuestionConcept, getQuestionKey } from '../utils/learningProgress';

const STORAGE_KEY = 'chaya-learning-progress-v1';

const emptyProgress = {
  attempts: {},
  mistakes: {},
  confidence: {},
  ladders: {},
  daily: {},
};

function dateOffset(days) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function loadProgress() {
  if (typeof window === 'undefined') return emptyProgress;
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    return saved ? { ...emptyProgress, ...saved } : emptyProgress;
  } catch {
    return emptyProgress;
  }
}

export function LearningProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const recordAttempt = useCallback((question, selectedLetter, correct) => {
    const key = getQuestionKey(question);
    const concept = getQuestionConcept(question);
    const now = new Date().toISOString();

    setProgress((previous) => {
      const oldAttempt = previous.attempts[key] ?? { total: 0, correct: 0 };
      const oldMistake = previous.mistakes[key];
      const correctStreak = correct && oldMistake ? (oldMistake.correctStreak ?? 0) + 1 : 0;
      const mastered = Boolean(oldMistake && correctStreak >= 2);

      return {
        ...previous,
        attempts: {
          ...previous.attempts,
          [key]: {
            question,
            concept,
            total: oldAttempt.total + 1,
            correct: oldAttempt.correct + (correct ? 1 : 0),
            lastCorrect: correct,
            lastAttemptAt: now,
          },
        },
        mistakes: correct
          ? oldMistake
            ? {
                ...previous.mistakes,
                [key]: {
                  ...oldMistake,
                  correctStreak,
                  mastered,
                  nextReview: dateOffset(mastered ? 3 : 1),
                  lastAttemptAt: now,
                },
              }
            : previous.mistakes
          : {
              ...previous.mistakes,
              [key]: {
                question,
                concept,
                selectedLetter,
                wrongCount: (oldMistake?.wrongCount ?? 0) + 1,
                correctStreak: 0,
                mastered: false,
                firstWrongAt: oldMistake?.firstWrongAt ?? now,
                lastAttemptAt: now,
                nextReview: dateOffset(1),
              },
            },
      };
    });
  }, []);

  const recordConfidence = useCallback((question, level) => {
    const key = getQuestionKey(question);
    setProgress((previous) => ({
      ...previous,
      confidence: {
        ...previous.confidence,
        [key]: {
          level,
          question,
          concept: getQuestionConcept(question),
          updatedAt: new Date().toISOString(),
          nextReview: level === 'confident' ? dateOffset(3) : dateOffset(1),
        },
      },
    }));
  }, []);

  const setLadderStage = useCallback((concept, stage) => {
    setProgress((previous) => ({
      ...previous,
      ladders: {
        ...previous.ladders,
        [concept]: {
          stage,
          updatedAt: new Date().toISOString(),
          revisitOn: stage >= 3 ? dateOffset(1) : null,
        },
      },
    }));
  }, []);

  const markDailyComplete = useCallback((date) => {
    setProgress((previous) => ({
      ...previous,
      daily: {
        ...previous.daily,
        [date]: { completed: true, completedAt: new Date().toISOString() },
      },
    }));
  }, []);

  const clearProgress = useCallback(() => setProgress(emptyProgress), []);

  const value = useMemo(() => ({
    progress,
    recordAttempt,
    recordConfidence,
    setLadderStage,
    markDailyComplete,
    clearProgress,
  }), [progress, recordAttempt, recordConfidence, setLadderStage, markDailyComplete, clearProgress]);

  return (
    <LearningProgressContext.Provider value={value}>
      {children}
    </LearningProgressContext.Provider>
  );
}

