import * as S from "../src/styles/Globals";
import Ending from "./components/End/Ending";
import Gaming from "./components/Game/Gaming";
import Starting from "./components/Starter/Starting";
import { useGameState } from "./components/hooks/useGameStage";
import { GameStage } from "./enum/EGaming";

function App() {
  const gameState = useGameState();

  return (
    <S.Container>
      {gameState.gameStage === GameStage.Starting && (
        <Starting handleEarlyGame={gameState.handleEarlyGame} />
      )}
      {gameState.gameStage === GameStage.Gaming && (
        <Gaming
          handleMidGame={gameState.handleMidGame}
          pickedWord={gameState.pickedWord}
          pickedCategory={gameState.pickedCategory}
          letters={gameState.letters}
          guessedLetters={gameState.guessedLetters}
          wrongLetters={gameState.wrongLetters}
          attempts={gameState.attempts}
          points={gameState.points}
        />
      )}
      {gameState.gameStage === GameStage.Ending && (
        <Ending handleEndGame={gameState.handleEndGame} />
      )}
    </S.Container>
  );
}

export default App;
