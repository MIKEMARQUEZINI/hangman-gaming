import { useCallback, useEffect, useState } from "react";
import { wordlist } from "../../data/WordList";
import { GameStage } from "../../enum/EGaming";
import utils from "../utils";

type SetStateFunction = (state: (actualLetters: string[]) => string[]) => void;

const starterAttempts = 5;

export function useGameState() {
  const [gameStage, setGameStage] = useState(GameStage.Starting);
  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<number>(starterAttempts);
  const [points, setPoints] = useState<number>(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleEarlyGame = useCallback(() => {
    clearLettersStates();
    const { catchWord } = utils();
    const { randomWord, randomCategory } = catchWord(wordlist);

    const word = randomWord
      .split("")
      .map((letter: string) => letter.toLowerCase());

    setPickedWord(randomWord);
    setPickedCategory(randomCategory);
    setLetters(word);
    setGameStage(GameStage.Gaming);
  }, []);

  const addLetterToArray = (setState: SetStateFunction, letter: string) => {
    setState((actualLetters: string[]) => [...actualLetters, letter]);
  };

  const handleMidGame = (letter: string) => {
    const formatLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(formatLetter) ||
      wrongLetters.includes(formatLetter)
    ) {
      return;
    }

    if (letters.includes(formatLetter)) {
      addLetterToArray(setGuessedLetters, formatLetter);
    } else {
      addLetterToArray(setWrongLetters, formatLetter);
      setAttempts((attempts) => attempts - 1);
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    if (attempts <= 0) {
      clearLettersStates();
      setGameStage(GameStage.Ending);
    }
  }, [attempts]);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setPoints((actualPoints) => actualPoints + 10);
      setAttempts(starterAttempts);
      handleEarlyGame();
    }
  }, [guessedLetters, letters, handleEarlyGame]);

  const handleEndGame = () => {
    setPoints(0);
    setAttempts(starterAttempts);
    setGameStage(GameStage.Starting);
  };

  return {
    gameStage,
    handleEarlyGame,
    handleMidGame,
    handleEndGame,
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    attempts,
    points,
  };
}
