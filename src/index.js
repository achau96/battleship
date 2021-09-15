import './index.css'
import GameBoard from './factories/GameBoard';
import Game from './Game'

const ships = [
  [false, 5, 'A2','commander'],
  [true, 4, 'B1','subCommander'],
  [false, 3,'B4','lieutenant'],
  [true, 3,'E3','general'],
  [false, 2,'G6','smallShip']
]; //want random coordinate and no overlap



const createGameBoard = (size,player) => {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('gameBoard');
  gameBoard.id = player;
  gameBoard.setAttribute('style', `grid-template-columns: repeat(${size},1fr);grid-template-rows: repeat(${size},1fr)`)
  for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
      const block = document.createElement('div');
      block.dataset.value = `${String.fromCharCode(i+65)}${j+1}`;
      block.classList.add('tile');
      gameBoard.appendChild(block);
    }
  }
  return gameBoard;
}

const randomShipPlace = (board) => {
  const rand50 = () => (Math.random() < 0.5); //for isRotated
  const randomCoordinate = (ySize = 8,xSize = 8) => { //used for placement coordinate
    console.log(xSize)
    console.log(ySize)
    const random = `${String.fromCharCode(Math.floor(Math.random()*xSize)+65)}${Math.floor(Math.random()*ySize)+1}`;
  return random;
  }
//first length is 5, 'commander'
const shipOrientation = rand50()
let length = 5;
let coordinate;
if (shipOrientation === true) {
  coordinate = randomCoordinate(8-length,);
  console.log(coordinate);
} else {
  coordinate = randomCoordinate(,8-length);
  console.log(coordinate);
}
}

const initialize = () => {
const playerBoard = GameBoard(8);
const enemyBoard = GameBoard(8);
//place ships
playerBoard.placeShip(...ships[0]);
playerBoard.placeShip(...ships[1]);
playerBoard.placeShip(...ships[2]);
playerBoard.placeShip(...ships[3]);
playerBoard.placeShip(...ships[4]);

enemyBoard.placeShip(...ships[0]);
enemyBoard.placeShip(...ships[1]);
enemyBoard.placeShip(...ships[2]);
enemyBoard.placeShip(...ships[3]);
enemyBoard.placeShip(...ships[4]);
//create a randomized ship placement
return {playerBoard,enemyBoard}
}

const updateDOM = (playerBoard) => {
  const playerDOM = document.getElementById('user');
  const playerTiles = playerDOM.querySelectorAll('.tile');
  playerTiles.forEach((tile) => {
    for(let i=0;i<playerBoard.length;i++){
      playerBoard[i].forEach((shipTile) => {
        if(shipTile.shipID != null && shipTile.tile === tile.dataset.value){
          tile.classList.add('ship');
        }
      })
    }
  })
}

const App = () => {
  const player = document.querySelector('.player');
  const opponent = document.querySelector('.opponent');

  player.appendChild(createGameBoard(8,'user'),);
  opponent.appendChild(createGameBoard(8,'enemy'));

  const {playerBoard,enemyBoard} = initialize();
  updateDOM(playerBoard.board);
  Game(playerBoard,enemyBoard);
}

App();
