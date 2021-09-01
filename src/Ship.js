const Ship = (position) => {
  //position should be an array of coordinates
  let lives = position.length;
  const hit = (hitMark) => {
    position.forEach(pos => {
      if (pos == hitMark){
        lives--;
      }
    })
  }
  const isSunk = () => {
    if(lives == 0){
      console.log('ship is sunk');
    }
  }
  return {length,hit,isSunk}
}

export default Ship;
