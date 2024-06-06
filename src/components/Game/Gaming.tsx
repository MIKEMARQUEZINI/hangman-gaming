import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { GameStage, Infos } from "../../enum/EGaming";
import * as S from "./styles";

interface Props {
  handleMidGame: (letter: string) => void;
  pickedCategory: string;
  attempts: number;
  points: number;
  letters: string[];
  guessedLetters: string[];
  wrongLetters: string[];
}

const Gaming = ({
  handleMidGame,
  pickedCategory,
  attempts,
  points,
  letters,
  guessedLetters = [],
  wrongLetters,
}: Props) => {
  const emptyLetter = <S.EmptySquare key="empty"> </S.EmptySquare>;
  const [letter, setLetter] = useState<string>("");
  const letterInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleMidGame(letter);
    setLetter("");
    if (letterInputRef.current) {
      letterInputRef.current.focus();
    }
  };

  return (
    <S.Content>
      <S.Title>{GameStage.Gaming}</S.Title>
      <S.infos>
        {Infos.Category}: {pickedCategory}
      </S.infos>
      <S.Points>
        {Infos.Points}: {points}
      </S.Points>
      <S.infos>
        {Infos.Attempts}: {attempts}
      </S.infos>
      <S.Text>{Infos.GuessTheSecretWord}</S.Text>
      <S.WordContainer>
        {letters.map((letter, index) => (
          <S.letter key={index}>
            {guessedLetters.includes(letter) ? letter : emptyLetter}
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
        <S.ButtonGaming type="submit">{Infos.Next}</S.ButtonGaming>
      </S.LetterContainer>
      <S.LetterContainer>
        <S.Title>{Infos.WrongLetters}</S.Title>
        {wrongLetters.map((letter: string) => (
          <S.letter key={letter}>{letter}</S.letter>
        ))}
      </S.LetterContainer>
    </S.Content>
  );
};

Gaming.propTypes = {
  handleMidGame: PropTypes.func.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  attempts: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gaming;
