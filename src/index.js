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

const lightShip = (event, rotated, length) => {
  let coord = event.target.dataset.value;

  for (let i = 0; i < length; i++) {
    const coordSplit = coord.split('');
    if (rotated && Number(coord.charCodeAt(0)) + i < 73) {
      coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);
      const lightUpCoord = document.querySelector(
        `[data-value=${coordSplit.join('')}]`
      );
      lightUpCoord.classList.add('selected');
    } else if (!rotated && Number(coord.charAt(1)) + i < 9) {
      coordSplit[1] = Number(coord.charAt(1)) + i;
      const lightUpCoord = document.querySelector(
        `[data-value=${coordSplit.join('')}]`
      );
      lightUpCoord.classList.add('selected');
    }
  }
};
const unLightShip = (event, rotated, length) => {
  let coord = event.target.dataset.value;
  for (let i = 0; i < length; i++) {
    const coordSplit = coord.split('');
    if (rotated && Number(coord.charCodeAt(0)) + i < 73) {
      coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);
      const lightUpCoord = document.querySelector(
        `[data-value=${coordSplit.join('')}]`
      );
      lightUpCoord.classList.remove('selected');
    } else if (!rotated && Number(coord.charAt(1)) + i < 9) {
      coordSplit[1] = Number(coord.charAt(1)) + i;
      const lightUpCoord = document.querySelector(
        `[data-value=${coordSplit.join('')}]`
      );
      lightUpCoord.classList.remove('selected');
    }
  }
};

const placeTheShip = (event, rotated, playerBoard, length, title) => {
  playerBoard.placeShip(rotated, length, event.target.dataset.value, title);
  updateDOM(playerBoard.board);
};

const initialize = () => {
  const playerBoard = GameBoard(8);
  const enemyBoard = GameBoard(8);
  let rotated = false;
  let currShip = 0;
  //place ships
  const ships = [
    [5, 'commander'],
    [4, 'subCommander'],
    [3, 'general'],
    [3, 'lieutenant'],
    [2, 'smallShip'],
  ];
  const status = () => {
    if (currShip >= ships.length) {
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

  const removeHighlightHolder = (event) => {
    if (currShip >= 5) {
      playerTiles.forEach((tile) => {
        tile.removeEventListener('mouseout', removeHighlightHolder);
      });
    }
    unLightShip(event, rotated, ships[currShip][0]);
  };
  const lightShipHolder = (event) => {
    if (currShip >= 5) {
      playerTiles.forEach((tile) => {
        tile.removeEventListener('mouseover', lightShipHolder);
      });
    }
    lightShip(event, rotated, ships[currShip][0]);
  };

  const placeShipHolder = (event) => {
    let coord = event.target.dataset.value;
    let length = ships[currShip][0];
    let placeable = false;
    for (let i = 0; i < length; i++) {
      const coordSplit = coord.split('');
      if (rotated && Number(coord.charCodeAt(0)) + i < 73) {
        coordSplit[0] = String.fromCharCode(Number(coord.charCodeAt(0)) + i);
        if (playerBoard.checkCoordinate(coordSplit.join('')).shipID !== null) {
          placeable = false;
          break;
        }
        placeable = true;
      } else if (!rotated && Number(coord.charAt(1)) + i < 9) {
        coordSplit[1] = Number(coord.charAt(1)) + i;
        if (playerBoard.checkCoordinate(coordSplit.join('')).shipID !== null) {
          placeable = false;
          break;
        }
        placeable = true;
      } else {
        placeable = false;
      }
    }
    if (placeable === true) {
      placeTheShip(
        event,
        rotated,
        playerBoard,
        ships[currShip][0],
        ships[currShip][1]
      );
      currShip++;
    } else {
      console.log('cannot place ship here!');
    }

    if (currShip >= 5) {
      playerTiles.forEach((tile) => {
        tile.removeEventListener('click', placeShipHolder);
      });
    }
  };
  playerTiles.forEach((tile) => {
    tile.addEventListener('mouseover', lightShipHolder);
  });
  playerTiles.forEach((tile) => {
    tile.addEventListener('mouseout', removeHighlightHolder);
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

  const gameStart = () => {
    playerTurn.classList.add('animate-arrow');
    if (status() === true) {
      player.removeChild(rotateButton);
      Game(playerBoard, enemyBoard);
      start.removeEventListener('click', gameStart);
    } else if (status() === false) {
      console.log('not all ships placed yet');
    }
  };
  start.addEventListener('click', gameStart);
};

App();
