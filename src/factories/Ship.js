//user defines position of ship

const Ship = (position,id) => {
  //position should be an array of coordinates
  const shipArray = [...position];
  let lives = position.length;
  const hit = (hitMark) => {
    //in board, we will check if position is 'hit' and perform action
    //we will take out the ability to click same spot in DOM
    shipArray[shipArray.indexOf(hitMark)] = 'hit';
    lives--;
  }
  const isSunk = () => {
   if (lives === 0) {
   return true;
   }
   return false;
  }
  return {hit,isSunk,shipArray,id}
}

export default Ship;
