const Player = () => {
//player should attack a coordinate
  const move = (boardStatus) => {
    if (boardStatus.shipID == null) {
      return 'missed'
    }
    return 'hit';
  }

  return {move}
}

export default Player;
