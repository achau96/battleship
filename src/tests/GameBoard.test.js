import GameBoard from "../factories/GameBoard";

//Test that you can put a ship down, return new board array
test('Place ship', () => {
  const newGame = GameBoard();
  newGame.placeShip(false, 3, 'C3');
  expect(newGame.board[2].slice(2,5)).toStrictEqual([{tile: 'C3', hasShip: true, isHit:false},{tile: 'C4', hasShip: true, isHit:false},{tile: 'C5', hasShip: true, isHit:false}]  )
})

//Target miss
test('Missed target', () => {
  const newGame = GameBoard();
  expect(newGame.receiveAttack('A4')).toStrictEqual([{tile:'A4', hasShip: false, isHit: true}]);
})
//Target hit
