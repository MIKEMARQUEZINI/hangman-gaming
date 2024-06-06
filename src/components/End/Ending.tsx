import PropTypes from "prop-types";
import { GameScreen, Infos } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  handleEndGame: () => void;
  points: number;
}

const Ending = ({ handleEndGame, points }: Props) => {
  return (
    <S.Container>
      <S.Title>{GameScreen.Finish}</S.Title>
      <S.Text>{Infos.ClickHere}</S.Text>
      <S.Text>
        {Infos.scoreText} {points}
      </S.Text>
      <S.Button onClick={handleEndGame}>{Infos.Try}</S.Button>
    </S.Container>
  );
};

Ending.propTypes = {
  handleMidGame: PropTypes.func,
};

export default Ending;
