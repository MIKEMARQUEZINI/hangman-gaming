export enum GameStage {
  Starting = "Começando",
  Playing = "Jogando",
  End = "Fim de Jogo",
}

export enum GameScreen {
  Welcome = "Bem vindo ao Jogo da Forca",
  Playing = "Jogando Forca",
  Finish = "Fim de Jogo",
}

export class Information {
  static Home = {
    ChallengeSecretWord: "Desafio você a tentar adivinhar a palavra secreta!",
    ClickHere: "Clique para começar",
  };

  static Playing = {
    Category: "Categoria",
    score: "Pontos",
    remainingAttempts: "Tentativas",
    incorrectlyGuessedLetters: "Você ja tentou as letras: ",
  };

  static End = {
    Lost: "Você Perdeu!",
    TryAgain: "Tentar novamente!",
  };

  static Won = "Você Ganhou!";
  static LetsGo = "Vamos la!";
  static Next = "Proximo";
  static ScoreText = "Seus pontos são: ";
}
