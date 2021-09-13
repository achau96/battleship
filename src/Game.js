import Ship from './factories/Ship';
import Player from './factories/Player';
import GameBoard from './factories/GameBoard';


const hitCoordinate = (event,enemyBoard) => {
  const status = document.querySelector('.status');

  //should send coordinate into player, which goes to board and returns a hit or miss
  //and effects the DOM accordingly
  for(let i=0;i<enemyBoard.length;i++){
    enemyBoard[i].forEach((ship) => {
      if (ship.tile == event.target.dataset.value && ship.shipID!==null){
        console.log('ship hit!');
        event.target.textContent = 'X';
        event.target.classList.add('hit');
        status.textContent = 'Hit!'
      }
      else if(ship.tile == event.target.dataset.value && ship.shipID===null){
        console.log('ship missed');
        event.target.textContent = 'O';
        event.target.classList.add('miss');
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
//listener callback to clean up listener or remove depending on turn
const doClick = (event) => hitCoordinate(event,enemyBoard.board);
//game figures out whose turn it is, and waits for event listener if player
//or makes random move if opponent
  enemyTiles.forEach((tile) => {
    tile.addEventListener('click',doClick, {once:true});
  })


//Check status if ship is hit, check if all ships are sunk and display winner
}

export default Game;
