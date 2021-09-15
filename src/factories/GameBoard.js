import Ship from './Ship';

const createGameBoard = (size = 8) => {
  //for now we define l*w as 8 by 8
  //and create a board with coordinates as their values
  const board = [];
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      board[i][j] = {
        tile: `${String.fromCharCode(i + 65)}${j + 1}`,
        shipID: null,
        isHit: false,
      };
    }
  }
  return board;
};

const GameBoard = (size) => {
  const shipList = [];
  const board = createGameBoard(size);

  const placeShip = (isRotated, length, coordinate, id) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        //could use findIndex instead of another for loop
        if (board[i][j].tile == coordinate) {
          const shipCoords = [];
          //can take out after, just returning for test
          const testReturn = [];
          for (let k = 0; k < length; k++) {
            if (isRotated) {
              testReturn.push(board[i + k][j]);
              board[i + k][j].shipID = id;
              shipCoords.push(board[i + k][j].tile);
            } else {
              testReturn.push(board[i][j + k]);
              board[i][j + k].shipID = id;
              shipCoords.push(board[i][j + k].tile);
            }
          }
          //need to store newShip to ship list so we can check for same spot in future
          const newShip = Ship(shipCoords, id);
          shipList.push(newShip);
          return testReturn;
        }
      }
    }
  };
  //test for sending to right ship
  const receiveAttack = (coordinate) => {
    let result = undefined;
    for (let i = 0; i < board.length; i++) {
      board[i].find((ele, index, arr) => {
        if (ele.tile == coordinate) {
          if (arr[index].shipID != null) {
            shipList.find((ship) => {
              if (ship.id == arr[index].shipID) {
                ship.hit(coordinate);
              }
            });
          }
          arr[index].isHit = true;
          result = arr[index];
        }
      });
    }
    return result;
  };

  const allShipStatus = () => {
    return shipList.every((ship) => ship.isSunk());
  };

  const randomShipPlace = (length, title) => {
    //--------------- Helper functions for random ship -----------------//
    const rand50 = () => Math.random() < 0.5; //for isRotated
    const randomCoordinate = (xSize = 8, ySize = 8) => {
      //used for placement coordinate
      const random = `${String.fromCharCode(
        Math.floor(Math.random() * xSize) + 65
      )}${Math.floor(Math.random() * ySize) + 1}`;
      return random;
    };

    //----------------- logic for random ship ------------------------//
    let shipOrientation, coordinate;
    let flag = true;
    while (flag) {
      let hasShip = false;
      shipOrientation = rand50();
      if (shipOrientation === true) {
        //must check for has ship
        coordinate = randomCoordinate(8 - length + 1, undefined);
      } else {
        coordinate = randomCoordinate(undefined, 8 - length + 1);
      }
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
          if (board[i][j].tile === coordinate) {
            for (let k = 0; k < length; k++) {
              if (shipOrientation === true) {
                if (board[i + k][j].shipID !== null) {
                  hasShip = true;
                }
              } else if (shipOrientation === false) {
                if (board[i][j + k].shipID !== null) {
                  hasShip = true;
                }
              }
            }
          }
        }
      }
      if (hasShip === false) {
        flag = false;
      }
    }
    placeShip(shipOrientation, length, coordinate, title);
  };

  return {
    board,
    placeShip,
    shipList,
    receiveAttack,
    allShipStatus,
    randomShipPlace,
  };
};

export default GameBoard;
