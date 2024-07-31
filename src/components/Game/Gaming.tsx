import PropTypes from "prop-types";
import { useRef, useState } from "react";
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

const Gaming = ({
  onMidGameAction,
  currentCategory,
  remainingAttempts,
  score,
  availableLetters,
  correctlyGuessedLetters = [],
  incorrectlyGuessedLetters,
}: Props) => {
  const emptyLetter = <S.EmptySquare key="empty"></S.EmptySquare>;
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
      <S.Title>{GameScreen.Playing}</S.Title>
      <S.infos>
        {Information.Playing.Category}: {currentCategory}
      </S.infos>
      <S.score>
        {Information.Playing.score}: {score}
      </S.score>
      <S.infos>
        {Information.Playing.remainingAttempts}: {remainingAttempts}s
      </S.infos>
      <S.Text>{Information.Home.ChallengeSecretWord}</S.Text>
      <S.WordContainer>
        {availableLetters.map((availableLetters, index) => (
          <S.letter key={index}>
            {correctlyGuessedLetters.includes(availableLetters)
              ? availableLetters
              : emptyLetter}
          </S.letter>
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
      <S.LetterContainer>
        <S.Title>{Information.Playing.incorrectlyGuessedLetters}</S.Title>
        {incorrectlyGuessedLetters.map((letter: string) => (
          <S.letter key={letter}>{letter}</S.letter>
        ))}
      </S.LetterContainer>
    </S.Content>
  );
};

Gaming.propTypes = {
  onMidGameAction: PropTypes.func.isRequired,
  currentCategory: PropTypes.string.isRequired,
  remainingAttempts: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  availableLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctlyGuessedLetters: PropTypes.arrayOf(PropTypes.string),
  incorrectlyGuessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gaming;
