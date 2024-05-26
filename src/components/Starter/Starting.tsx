import PropTypes from "prop-types";
import * as S from "../../styles/Globals";

interface Props {
  handleEarlyGame: () => void;
}

const Starting = ({ handleEarlyGame }: Props) => {
  return (
    <S.Container>
      <S.Title>Starting</S.Title>
      <S.infos>Guess the secret word in 5 tries or less!</S.infos>
      <S.Text>Click the button to start the game</S.Text>
      <S.Button onClick={handleEarlyGame}>Let's Go!</S.Button>
    </S.Container>
  );
};

Starting.propTypes = {
  handleEarlyGame: PropTypes.func,
};

export default Starting;
