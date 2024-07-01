import { useCallback, useState } from "react";

export function useGamePlay(
  letters: string[],
  starterremainingAttempts: number
) {
  const [correctlyGuessedLetters, setcorrectlyGuessedLetters] = useState<
    string[]
  >([]);
  const [incorrectlyGuessedLetters, setincorrectlyGuessedLetters] = useState<
    string[]
  >([]);
  const [remainingAttempts, setremainingAttempts] = useState<number>(
    starterremainingAttempts
  );
  const [score, setscore] = useState<number>(0);

  const addLetterToArray = (
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    letter: string
  ) => {
    setState((actualLetters) => [...actualLetters, letter]);
  };

  const handleGuess = useCallback(
    (letter: string) => {
      const formatLetter = letter.toLowerCase();

      if (
        correctlyGuessedLetters.includes(formatLetter) ||
        incorrectlyGuessedLetters.includes(formatLetter)
      ) {
        return;
      }

      if (letters.includes(formatLetter)) {
        addLetterToArray(setcorrectlyGuessedLetters, formatLetter);
      } else {
        addLetterToArray(setincorrectlyGuessedLetters, formatLetter);
        setremainingAttempts((remainingAttempts) => remainingAttempts - 1);
      }
    },
    [correctlyGuessedLetters, incorrectlyGuessedLetters, letters]
  );

  const resetGame = useCallback(() => {
    setcorrectlyGuessedLetters([]);
    setincorrectlyGuessedLetters([]);
    setremainingAttempts(starterremainingAttempts);
    setscore(0);
  }, [starterremainingAttempts]);

  return {
    correctlyGuessedLetters,
    incorrectlyGuessedLetters,
    remainingAttempts,
    score,
    handleGuess,
    resetGame,
    setscore,
    setcorrectlyGuessedLetters,
  };
}
