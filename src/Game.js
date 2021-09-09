import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard'

const ships = [
  [false, 5, 'A2','commander'],
  [true, 4, 'B1','subCommander'],
  [false,3,'B4','lieutenant'],
  [true,3,'E3','general'],
  [false,2,'G6','smallShip']
];


const Game = () => {
const playerBoard = GameBoard(8);
const enemyBoard = GameBoard(8);
//place ships
playerBoard.placeShip(...ships[0]);
playerBoard.placeShip(...ships[1]);
playerBoard.placeShip(...ships[2]);
playerBoard.placeShip(...ships[3]);
playerBoard.placeShip(...ships[4]);
console.log(playerBoard.board);
//start game
//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent
//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
