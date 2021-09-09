import './index.css'

const createGameBoard = (size) => {
  const gameBoard = document.createElement('div');
  gameBoard.classList.add('gameBoard');
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
  // player.appendChild(createGameBoard(6));
  const block = document.createElement('div');
      block.dataset.value = `${String.fromCharCode(0+65)}${0+1}`;
      block.classList.add('tile');
  player.appendChild(createGameBoard(8));
  opponent.appendChild(createGameBoard(8));
}

App();
