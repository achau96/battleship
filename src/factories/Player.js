const randomCoordinate = (size) => {
  let random = `${String.fromCharCode(Math.floor(Math.random()*size)+65)}${Math.floor(Math.random()*size)+1}`
  return random;
}

const Player = () => {

  const spotHit = (coordinate,board) => {
    for(let i=0;i<board.length;i++){
      for(let j=0;j<board.length;j++){
        if (board[i][j].tile == coordinate && board[i][j].isHit == true) {
          return [true,board[i][j].shipID];
        } else if (board[i][j].tile == coordinate && board[i][j].isHit == false) {
          return [false,board[i][j].shipID];
        }
      }
    }
  }
//player should attack a coordinate
  const move = (coordinate,enemyBoard) => {
    const status = enemyBoard.receiveAttack(coordinate);
    if (status.shipID === null) {
      return 'missed'
    }
    return 'hit';
  }

  const randomMove = (enemyBoard) => {
    //let target = 'B3'; //my version of mock
    let target = randomCoordinate(enemyBoard.board.length);
    while(spotHit(target,enemyBoard.board)[0] == true) {
      target = randomCoordinate(enemyBoard.board.length);
    }
    console.log(target)
    const status = enemyBoard.receiveAttack(target);
    if (status.shipID === null){
      return 'missed';
    } else {
      return 'hit';
    }
  }
  return {move, randomMove}
}

export default Player;
