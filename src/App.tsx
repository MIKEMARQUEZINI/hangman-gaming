import Starting from "./components/Starter/Starting";
import { useGameState } from "./hooks/useGameState";
import { GameStage } from "./enum/EGaming";
import { GlobalStyle } from "./styles/Globals";
import Gaming from "./components/Game/Gaming";
import Ending from "./components/End/Ending";

function App() {
  const gameState = useGameState();

  return (
    <>
      <GlobalStyle />
      <div>
        {gameState.gameStage === GameStage.Starting && (
          <Starting handleGuess={gameState.startGame} />
        )}
        {gameState.gameStage === GameStage.Playing && (
          <Gaming
            onMidGameAction={gameState.handleGuess}
            currentCategory={gameState.currentCategory}
            remainingAttempts={gameState.remainingAttempts}
            score={gameState.score}
            availableLetters={gameState.letters}
            correctlyGuessedLetters={gameState.correctlyGuessedLetters}
            incorrectlyGuessedLetters={gameState.incorrectlyGuessedLetters}
          />
        )}
        {gameState.gameStage === GameStage.End && (
          <Ending onEndGameAction={gameState.endGame} score={gameState.score} />
        )}
      </div>
    </>
  );
}

export default App;
