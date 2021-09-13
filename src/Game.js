import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard';


const hitCoordinate = (event,enemyBoard) => {
  const status = document.querySelector('.status');

  //should send coordinate into player, which goes to board and returns a hit or miss
  //and effects the DOM accordingly
  for(let i=0;i<enemyBoard.length;i++){
    enemyBoard[i].forEach((ship) => {
      if (ship.tile == event.dataset.value && ship.shipID!==null){
        console.log('ship hit!');
        event.textContent = 'X';
        event.classList.add('hit');
        status.textContent = 'Hit!'
      }
      else if(ship.tile == event.dataset.value && ship.shipID===null){
        console.log('ship missed');
        event.textContent = 'O';
        event.classList.add('miss');
        status.textContent = 'Missed...';
      }
    })
  }
  status.classList.remove('show');
  setTimeout(()=>{
    status.classList.add('show');
  },10)
}


const Game = (playerBoard,enemyBoard) => {
const player = Player();
const AI = Player();
const enemyDOM = document.getElementById('enemy');
const enemyTiles = enemyDOM.querySelectorAll('.tile');
const userDOM = document.getElementById('user');

//listener callback to clean up listener or remove depending on turn
const doClick = (event) => {
hitCoordinate(event.target,enemyBoard.board);
player.move(event.target.dataset.value,enemyBoard);
//check win condition
if (enemyBoard.allShipStatus === true){
  console.log('You win!')
}
const AITarget = AI.randomMove(playerBoard);
const targetDOM = userDOM.querySelector(`[data-value=${AITarget}`);
console.log(targetDOM.dataset.value);
hitCoordinate(targetDOM,playerBoard.board);

if (playerBoard.allShipStatus === true){
  console.log('You Lose')
}
console.log(playerBoard.board)
}
//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent
  enemyTiles.forEach((tile) => {
    tile.addEventListener('click',doClick, {once:true});
  })


//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
