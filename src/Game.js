import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard';


const hitCoordinate = (event) => {
  const status = document.querySelector('.status');
  status.textContent = 'Player Missed';
  status.style.display = 'block';
  setTimeout(()=>{
    status.style.display='none';
  },2000)
  //should send coordinate into player, which goes to board and returns a hit or miss
  //and effects the DOM accordingly
  console.log(event.target.dataset.value);
}

const Game = (playerBoard,enemyBoard) => {
let turn = 'player';
const enemyDOM = document.getElementById('enemy');
const enemyTiles = enemyDOM.querySelectorAll('.tile');

//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent
if(turn === 'player'){
  enemyTiles.forEach((tile) => {
    tile.addEventListener('click',hitCoordinate, {once:true});
  })
}

//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
