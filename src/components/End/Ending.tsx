import PropTypes from "prop-types";
import * as S from "../../styles/Globals";

interface Props {
  handleEndGame: () => void;
}

const Ending = ({ handleEndGame }: Props) => {
  return (
    <S.Container>
      <S.Title>Game Over</S.Title>
      <S.Text>Click the button to try again </S.Text>
      <S.Button onClick={handleEndGame}>Try!</S.Button>
    </S.Container>
  );
};

Ending.propTypes = {
  handleMidGame: PropTypes.func,
};

export default Ending;
