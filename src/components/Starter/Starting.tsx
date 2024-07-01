import React from "react";

import { GameScreen, Information } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  handleGuess: () => void;
}

const Starting: React.FC<Props> = ({ handleGuess }) => {
  return (
    <>
      <S.Title>{GameScreen.Welcome}</S.Title>
      <S.Container>
        <S.Text>{Information.Home.ClickHere}</S.Text>
        <S.Button onClick={handleGuess}>{Information.LetsGo}</S.Button>
      </S.Container>
    </>
  );
};

export default React.memo(Starting);
