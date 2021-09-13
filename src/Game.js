import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard';


const hitCoordinate = (event,enemyBoard,isPlayer) => {
  const status = document.querySelector('.status');

  //should send coordinate into player, which goes to board and returns a hit or miss
  //and effects the DOM accordingly
  for(let i=0;i<enemyBoard.length;i++){
    enemyBoard[i].forEach((ship) => {
      if (ship.tile == event.dataset.value && ship.shipID!==null){
        event.textContent = 'X';
        event.classList.add('hit');
        if (isPlayer) {
        status.textContent = 'Hit!'
        }
      }
      else if(ship.tile == event.dataset.value && ship.shipID===null){
        event.textContent = 'O';
        event.classList.add('miss');
        if(isPlayer){
        status.textContent = 'Missed...';
        }
      }
    })
  }
  if (isPlayer){
  status.classList.remove('show');
  setTimeout(()=>{
    status.classList.add('show');
  },10)}
}


const Game = (playerBoard,enemyBoard) => {
const status = document.querySelector('.turnOrder');
const player = Player();
const AI = Player();
const enemyDOM = document.getElementById('enemy');
const enemyTiles = enemyDOM.querySelectorAll('.tile');
const userDOM = document.getElementById('user');

//listener callback to clean up listener or remove depending on turn
const doClick = (event) => {
  hitCoordinate(event.target,enemyBoard.board,true);
  player.move(event.target.dataset.value,enemyBoard);
//check win condition
  if (enemyBoard.allShipStatus() === true){
    enemyTiles.forEach((tile) => {
      tile.removeEventListener('click',doClick, {once:true});
    })
    status.textContent = 'YOU WIN!';
    status.style.color = 'green';
    status.classList.add('winner');
  }
  const AITarget = AI.randomMove(playerBoard);
  const targetDOM = userDOM.querySelector(`[data-value=${AITarget}`);
  hitCoordinate(targetDOM,playerBoard.board,false);

  if (playerBoard.allShipStatus() === true){
    enemyTiles.forEach((tile) => {
      tile.removeEventListener('click',doClick, {once:true});
    })
    status.textContent = 'YOU LOSE!';
    status.style.color = 'red';
    status.classList.add('winner');
  }
}
//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent
  enemyTiles.forEach((tile) => {
    tile.addEventListener('click',doClick, {once:true});
  })


//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
