import './index.css'
import Game from './Game'

const hitCoordinate = (event) => {
  console.log(event.target.dataset.value);
}

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

const App = () => {
  const player = document.querySelector('.player');
  const opponent = document.querySelector('.opponent');

  player.appendChild(createGameBoard(8,'user'),);
  opponent.appendChild(createGameBoard(8,'enemy'));

  Game();

}

App();
