import PropTypes from "prop-types";
import { GameScreen, Infos } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  handleEndGame: () => void;
}

const Ending = ({ handleEndGame }: Props) => {
  return (
    <S.Container>
      <S.Title>{GameScreen.Finish}</S.Title>
      <S.Text>{Infos.ClickHere}</S.Text>
      <S.Button onClick={handleEndGame}>{Infos.Try}</S.Button>
    </S.Container>
  );
};

Ending.propTypes = {
  handleMidGame: PropTypes.func,
};

export default Ending;
