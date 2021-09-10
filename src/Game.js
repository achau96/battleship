import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard';


const hitCoordinate = (event) => {
  //should send coordinate into player, which goes to board and returns a hit or miss
  //and effects the DOM accordingly
  console.log(event.target.dataset.value);
}

const Game = () => {

const enemyDOM = document.getElementById('enemy');
const enemyTiles = enemyDOM.querySelectorAll('.tile');

//start game
//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent

enemyTiles.forEach((tile) => {
  tile.addEventListener('click',hitCoordinate, {once:true});
})
//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
