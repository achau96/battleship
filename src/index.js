import './index.css';
import GameBoard from './factories/GameBoard';
import Game from './Game';

// const ships = [
//   [false, 5, 'A2', 'commander'],
//   [true, 4, 'B1', 'subCommander'],
//   [false, 3, 'B4', 'lieutenant'],
//   [true, 3, 'E3', 'general'],
//   [false, 2, 'G6', 'smallShip'],
// ]; //want random coordinate and no overlap

const createGameBoard = (size, player) => {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('gameBoard');
  gameBoard.id = player;
  gameBoard.setAttribute(
    'style',
    `grid-template-columns: repeat(${size},1fr);grid-template-rows: repeat(${size},1fr)`
  );
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const block = document.createElement('div');
      block.dataset.value = `${String.fromCharCode(i + 65)}${j + 1}`;
      block.classList.add('tile');
      gameBoard.appendChild(block);
    }
  }
  return gameBoard;
};

const updateDOM = (playerBoard) => {
  const playerDOM = document.getElementById('user');
  const playerTiles = playerDOM.querySelectorAll('.tile');
  playerTiles.forEach((tile) => {
    for (let i = 0; i < playerBoard.length; i++) {
      playerBoard[i].forEach((shipTile) => {
        if (shipTile.shipID != null && shipTile.tile === tile.dataset.value) {
          tile.classList.add('ship');
        }
      });
    }
  });
};

const lightShip = (event) => {
  // console.log(event.target.dataset.value);
};

const placeTheShip = (event, rotated, playerBoard) => {
  playerBoard.placeShip(rotated, 5, event.target.dataset.value, 'commander');
  updateDOM(playerBoard.board);
  console.log(playerBoard.board);
};

const initialize = () => {
  const placeShipHolder = (event) => {
    placeTheShip(event, rotated, playerBoard);
  };

  const playerBoard = GameBoard(8);
  const enemyBoard = GameBoard(8);
  let rotated = false;
  //place ships
  const ships = [
    [5, 'commander'],
    [4, 'subCommander'],
    [3, 'general'],
    [3, 'lieutenant'],
    [2, 'smallShip'],
  ];
  const rotateButton = document.querySelector('.rotateButton');
  const player = document.getElementById('user');
  const playerTiles = player.querySelectorAll('.tile');
  rotateButton.addEventListener('click', () => {
    rotated = !rotated;
  });

  playerTiles.forEach((tile) => {
    tile.addEventListener('mouseover', lightShip);
  });
  playerTiles.forEach((tile) => {
    tile.addEventListener('click', placeShipHolder);
  });

  enemyBoard.randomShipPlace(5, 'commander');
  enemyBoard.randomShipPlace(4, 'subCommander');
  enemyBoard.randomShipPlace(3, 'general');
  enemyBoard.randomShipPlace(3, 'lieutenant');
  enemyBoard.randomShipPlace(2, 'smallShip');
  //create a randomized ship placement
  return { playerBoard, enemyBoard };
};

const App = () => {
  const player = document.querySelector('.player');
  const opponent = document.querySelector('.opponent');

  player.appendChild(createGameBoard(8, 'user'));
  opponent.appendChild(createGameBoard(8, 'enemy'));

  const rotateButton = document.createElement('div');
  rotateButton.textContent = 'Rotate';
  rotateButton.classList.add('rotateButton');
  player.appendChild(rotateButton);

  const { playerBoard, enemyBoard } = initialize();
  updateDOM(playerBoard.board);

  const start = document.querySelector('.start');
  const playerTurn = document.querySelector('.playerTurn');

  start.addEventListener('click', () => {
    playerTurn.classList.add('animate-arrow');
    Game(playerBoard, enemyBoard);
  });
};

App();
