import PropTypes from "prop-types";
import { GameScreen, Information } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  handleGuess: () => void;
}

const Starting = ({ handleGuess }: Props) => {
  return (
    <S.Container>
      <S.Title>{GameScreen.Starter}</S.Title>
      <S.infos>{Information.Home.ChallengeSecretWord}</S.infos>
      <S.Text>{Information.Home.ClickHere}</S.Text>
      <S.Button onClick={handleGuess}>{Information.LetsGo}</S.Button>
    </S.Container>
  );
};

Starting.propTypes = {
  handleGuess: PropTypes.func,
};

export default Starting;
