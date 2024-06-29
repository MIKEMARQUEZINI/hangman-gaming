import { useCallback, useEffect, useState } from "react";
import { GameStage } from "../enum/EGaming";
import { useGameInitialization } from "./useGameInitialization";
import { useGamePlay } from "./useGamePlay";

export function useGameState() {
  const [gameStage, setGameStage] = useState(GameStage.Starting);
  const { pickedWord, currentCategory, letters, initializeGame } =
    useGameInitialization();
  const starterremainingAttempts = 5;
  const {
    correctlyGuessedLetters,
    incorrectlyGuessedLetters,
    remainingAttempts,
    score,
    handleGuess,
    resetGame,
    setscore,
  } = useGamePlay(letters, starterremainingAttempts);

  const startGame = useCallback(() => {
    initializeGame();
    setGameStage(GameStage.Playing);
  }, [initializeGame]);

  useEffect(() => {
    if (remainingAttempts <= 0) {
      setGameStage(GameStage.End);
    }
  }, [remainingAttempts]);

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (correctlyGuessedLetters.length === uniqueLetters.length) {
      setscore((actualscore) => actualscore + 10);
      initializeGame();
    }
  }, [correctlyGuessedLetters, letters, initializeGame, setscore]);

  const endGame = () => {
    resetGame();
    setGameStage(GameStage.Starting);
  };

  return {
    gameStage,
    startGame,
    handleGuess,
    endGame,
    pickedWord,
    currentCategory,
    letters,
    correctlyGuessedLetters,
    incorrectlyGuessedLetters,
    remainingAttempts,
    score,
  };
}
