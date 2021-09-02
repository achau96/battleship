import Ship from "./Ship";

const createGameBoard = (size=6) => {
  //for now we define l*w as 6 by 6
  //and create a board with coordinates as their values
  const board = [];
  for(let i=0;i<size;i++){
    board[i] = [];
    for(let j=0;j<size;j++){
      board[i][j] = {
        tile: `${String.fromCharCode(i+65)}${j+1}`,
        hasShip: false,
        isHit: false
      }
    }
  }
  return board;
}

const GameBoard = (size) => {

const shipList = [];
const board = createGameBoard(size);

const placeShip = (isRotated, length, coordinate) => {
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board.length;j++){   //could use findIndex instead of another for loop
      if (board[i][j].tile == coordinate){
        const shipCoords = [];
        for(let k=0;k<length;k++){
        board[i][j+k].hasShip = true;
        shipCoords.push(board[i][j+k].tile);
        }
        //need to store newShip to ship list so we can check for same spot in future
        const newShip = Ship(shipCoords);
        shipList.push(newShip);
        return board[i].slice(j, j+length)
      }
    }
  }
}

// const receiveAttack = (coordinate) => {
// if ()
// }

return {board, placeShip,shipList}
}

export default GameBoard;
