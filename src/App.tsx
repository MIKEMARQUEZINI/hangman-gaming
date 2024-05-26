import { useEffect, useState } from "react";
import * as S from "../src/styles/Globals";
import Ending from "./components/End/Ending";
import Gaming from "./components/Game/Gaming";
import Starting from "./components/Starter/Starting";
import { wordlist } from "./data/WordList";

type Stage = { id: number; name: string };

const stages: Stage[] = [
  { id: 1, name: "Starting" },
  { id: 2, name: "Gaming" },
  { id: 3, name: "Ending" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordlist);

  const [pickedWord, setPickedWord] = useState<string>("");
  const [pickedCategory, setPickedCategory] = useState<string>("");
  const [letters, setLetters] = useState<string[]>([]);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);
  const [attempts, setAttempts] = useState<number>(5);
  const [points, setPoints] = useState<number>(0);

  const catchWord = () => {
    const categories = Object.keys(words);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const randomWord =
      words[randomCategory][
        Math.floor(Math.random() * words[randomCategory].length)
      ];

    return { randomWord, randomCategory };
  };

  const handleEarlyGame = () => {
    const { randomWord, randomCategory } = catchWord();

    const word = randomWord
      .split("")
      .map((letter: string) => letter.toLowerCase());

    setPickedWord(randomWord);
    setPickedCategory(randomCategory);
    setLetters(word);
    setGameStage(stages[1].name);
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
    if (attempts === 0) {
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [attempts]);

  const handleEndGame = () => {
    setGameStage(stages[0].name);
  };

  return (
    <S.Container>
      {gameStage === "Starting" && (
        <Starting handleEarlyGame={handleEarlyGame} />
      )}
      {gameStage === "Gaming" && (
        <Gaming
          handleMidGame={handleMidGame}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          attempts={attempts}
          points={points}
        />
      )}
      {gameStage === "Ending" && <Ending handleEndGame={handleEndGame} />}
    </S.Container>
  );
}

export default App;
