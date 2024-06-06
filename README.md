# Jogo da Forca em ReactJS

Este é um jogo da forca simples desenvolvido utilizando ReactJS. O projeto é composto por três componentes principais: `Starting`, `Gaming` e `Ending`. Além disso, um hook customizado `useGameState` é usado para gerenciar os estados do jogo.

## Visão Geral do Projeto

O jogo segue as etapas tradicionais da forca:
1. **Starting**: Onde o jogador inicia o jogo.
2. **Gaming**: Onde o jogador tenta adivinhar as letras da palavra.
3. **Ending**: Onde o jogo termina, exibindo a pontuação e permitindo reiniciar.

## Estrutura do Projeto

src/
├── components/
│ ├── Starting.js
│ ├── Gaming.js
│ └── Ending.js
├── hooks/
│ └── useGameState.js
├── data/
│ └── WordList.js
├── enum/
│ └── EGaming.js
├── utils/
│ └── index.js
└── App.js


## Hook Customizado: `useGameState`

O hook `useGameState` gerencia todos os estados do jogo, incluindo a palavra escolhida, as letras adivinhadas, as tentativas restantes, a pontuação e a fase atual do jogo.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/MIKEMARQUEZINI/hangman-gaming.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd hangman-gaming
    ```

3. Instale as dependências:
    ```sh
    npm i
    ```

## Execução

Para iniciar o aplicativo em modo de desenvolvimento, execute:
```sh
npm run dev

