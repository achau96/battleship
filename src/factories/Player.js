const randomCoordinate = (size) => {
  let random = `${String.fromCharCode(Math.floor(Math.random()*size)+65)}${Math.floor(Math.random()*size)+1}`
  return random;
}

const Player = () => {
//player should attack a coordinate
  const move = (boardStatus) => {
    if (boardStatus.shipID == null) {
      return 'missed'
    }
    return 'hit';
  }

  const computerMove = () => {
    return
  }
  return {move}
}

export default Player;
