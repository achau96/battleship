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
        shipID: null,
        isHit: false,
      }
    }
  }
  return board;
}

const GameBoard = (size) => {

const shipList = [];
const board = createGameBoard(size);

const placeShip = (isRotated, length, coordinate,id) => {
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board.length;j++){   //could use findIndex instead of another for loop
      if (board[i][j].tile == coordinate){
        const shipCoords = [];
        //can take out after, just returning for test
        const testReturn = [];
        for(let k=0;k<length;k++){
          if (isRotated) {
            testReturn.push(board[i+k][j]);
            board[i+k][j].shipID = id;
            shipCoords.push(board[i+k][j].tile);
          } else {
            testReturn.push(board[i][j+k]);
            board[i][j+k].shipID = id;
            shipCoords.push(board[i][j+k].tile);
          }
        }
        //need to store newShip to ship list so we can check for same spot in future
        const newShip = Ship(shipCoords,id);
        shipList.push(newShip);
        return testReturn;
      }
    }
  }
}
//test for sending to right ship
const receiveAttack = (coordinate) => {
let result = []
  for(let i=0;i<board.length;i++){
    board[i].find((ele,index,arr)=> {
      if (ele.tile == coordinate){
        if (arr[index].shipID != null){
          shipList.find((ship) => {
           if (ship.id == arr[index].shipID) {
             ship.hit(coordinate);
           }
          })
        }
        arr[index].isHit = true;
        result.push(arr[index]);
      }
    })
  }
  return result;
}

const allShipStatus = () => {
  return shipList.every(ship => ship.isSunk())
}

return {board, placeShip, shipList, receiveAttack, allShipStatus}
}

export default GameBoard;
