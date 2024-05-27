import { useEffect, useState } from "react";
import { wordlist } from "../../data/WordList";
import { GameStage } from "../../enum/EGaming";
import utils from "../utils";

export function useGameState() {
  const [gameStage, setGameStage] = useState(GameStage.Starting);
  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<number>(5);
  const [points] = useState<number>(0);

  const handleEarlyGame = () => {
    const { catchWord } = utils();
    const { randomWord, randomCategory } = catchWord(wordlist);

    const word = randomWord
      .split("")
      .map((letter: string) => letter.toLowerCase());

    setPickedWord(randomWord);
    setPickedCategory(randomCategory);
    setLetters(word);
    setGameStage(GameStage.Gaming);
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
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        formatLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        formatLetter,
      ]);

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

  const handleEndGame = () => {
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
