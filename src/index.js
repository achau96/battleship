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

const placeTheShip = (event, rotated, playerBoard, length, title) => {
  playerBoard.placeShip(rotated, length, event.target.dataset.value, title);
  updateDOM(playerBoard.board);
};

const initialize = () => {
  const playerBoard = GameBoard(8);
  const enemyBoard = GameBoard(8);
  let rotated = false;
  let i = 0;
  //place ships
  const ships = [
    [5, 'commander'],
    [4, 'subCommander'],
    [3, 'general'],
    [3, 'lieutenant'],
    [2, 'smallShip'],
  ];
  const status = () => {
    if (i === ships.length) {
      console.log(i);
      console.log(ships.length);
      return true;
    }
    return false;
  };

  const rotateButton = document.querySelector('.rotateButton');
  const player = document.getElementById('user');
  const playerTiles = player.querySelectorAll('.tile');
  rotateButton.addEventListener('click', () => {
    rotated = !rotated;
  });

  const placeShipHolder = (event) => {
    placeTheShip(event, rotated, playerBoard, ships[i][0], ships[i][1]);
    i++;
    if (i === 5) {
      playerTiles.forEach((tile) => {
        tile.removeEventListener('click', placeShipHolder);
      });
    }
  };
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
  return { playerBoard, enemyBoard, status };
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

  const { playerBoard, enemyBoard, status } = initialize();
  // updateDOM(playerBoard.board);

  const start = document.querySelector('.start');
  const playerTurn = document.querySelector('.playerTurn');

  start.addEventListener('click', () => {
    playerTurn.classList.add('animate-arrow');
    if (status() === true) {
      Game(playerBoard, enemyBoard);
    } else if (status() === false) {
      console.log('not all ships placed yet');
    }
  });
};

App();
