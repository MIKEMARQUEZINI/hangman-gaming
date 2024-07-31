import { useCallback, useState } from "react";
import utils from "../components/utils";
import { wordlist } from "../data/WordList";

export function useGameInitialization() {
  const [pickedWord, setPickedWord] = useState<string>("");
  const [currentCategory, setcurrentCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);

  const initializeGame = useCallback(() => {
    const { catchWord } = utils();
    const { randomWord, randomCategory } = catchWord(wordlist);
    const word = randomWord.split("").map((letter) => letter.toLowerCase());

    setPickedWord(randomWord);
    setcurrentCategory(randomCategory);
    setLetters(word);
  }, []);

  return {
    pickedWord,
    currentCategory,
    letters,
    initializeGame,
  };
}
