import PropTypes from "prop-types";
import { GameStage, Infos } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  handleEarlyGame: () => void;
}

const Starting = ({ handleEarlyGame }: Props) => {
  return (
    <S.Container>
      <S.Title>{GameStage.Starting}</S.Title>
      <S.infos>{Infos.GuessTheSecretWord}</S.infos>
      <S.Text>{Infos.ClickHere}</S.Text>
      <S.Button onClick={handleEarlyGame}>{Infos.Go}</S.Button>
    </S.Container>
  );
};

Starting.propTypes = {
  handleEarlyGame: PropTypes.func,
};

export default Starting;
