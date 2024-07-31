import React, { useRef, useState } from "react";

import { GameScreen, Information } from "../../enum/EGaming";
import * as S from "./styles";

interface Props {
  onMidGameAction: (letter: string) => void;
  currentCategory: string;
  remainingAttempts: number;
  score: number;
  availableLetters: string[];
  correctlyGuessedLetters: string[];
  incorrectlyGuessedLetters: string[];
}

const Gaming: React.FC<Props> = ({
  onMidGameAction,
  currentCategory,
  remainingAttempts,
  score,
  availableLetters,
  correctlyGuessedLetters = [],
  incorrectlyGuessedLetters,
}: Props) => {
  const emptyLetter = <S.EmptySquare></S.EmptySquare>;
  const [letter, setLetter] = useState<string>("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onMidGameAction(letter);
    setLetter("");
    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  };

  return (
    <S.Content>
      <S.Header>{GameScreen.Playing}</S.Header>
      <S.Infos>
        {Information.Playing.Category}: {currentCategory}
      </S.Infos>
      <S.Points>
        {Information.Playing.score}: {score}
      </S.Points>
      <S.Text>{Information.Home.ChallengeSecretWord}</S.Text>
      <S.WordContainer>
        {availableLetters.map((availableLetters, index) => (
          <S.Letter key={index}>
            {correctlyGuessedLetters.includes(availableLetters)
              ? availableLetters
              : emptyLetter}
          </S.Letter>
        ))}
      </S.WordContainer>
      <S.LetterContainer onSubmit={handleSubmit}>
        <S.Input
          type="text"
          maxLength={1}
          required
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
        />
        <S.ButtonGaming type="submit">{Information.Next}</S.ButtonGaming>
      </S.LetterContainer>
      <S.Footer>
        <S.TextFooter>
          {Information.Playing.incorrectlyGuessedLetters}
        </S.TextFooter>
        {incorrectlyGuessedLetters.map((letter: string) => (
          <S.Letter key={letter}>{letter}</S.Letter>
        ))}
      </S.Footer>
    </S.Content>
  );
};

export default React.memo(Gaming);
