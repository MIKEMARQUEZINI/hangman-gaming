import React from "react";

import { GameScreen, Information } from "../../enum/EGaming";
import * as S from "../../styles/Globals";

interface Props {
  onEndGameAction: () => void;
  score: number;
}

const Ending: React.FC<Props> = ({ onEndGameAction, score }) => {
  return (
    <S.Container>
      <S.Title>{GameScreen.Finish}</S.Title>
      <S.Text>{Information.Home.ClickHere}</S.Text>
      <S.Button onClick={onEndGameAction}>{Information.End.TryAgain}</S.Button>
      <S.Text>
        {Information.ScoreText} {score}
      </S.Text>
    </S.Container>
  );
};

export default React.memo(Ending);
