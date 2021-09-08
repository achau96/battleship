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
  const move = (boardStatus) => {
    if (boardStatus.shipID == null) {
      return 'missed'
    }
    return 'hit';
  }

  const randomMove = (board,receiveAttack) => {
    let target = 'B3';

    while(spotHit(target,board)[0] == true) {
      target = randomCoordinate(board.length);
    }
    console.log(target);
    if (spotHit(target,board)[1] == null){
      return 'missed';
    } else {
      return 'hit';
    }
  }
  return {move, randomMove}
}

export default Player;
