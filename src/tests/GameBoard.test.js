import GameBoard from "../factories/GameBoard";

//Test that you can put a ship down, return new board array
test('Place ship', () => {
  const newGame = GameBoard();
  newGame.placeShip(false, 3, 'C3','smallShip');
  expect(newGame.board[2].slice(2,5)).toStrictEqual([{tile: 'C3', shipID: 'smallShip', isHit:false},{tile: 'C4', shipID: 'smallShip', isHit:false},{tile: 'C5', shipID: 'smallShip', isHit:false}]  )
})

test('Place rotated ship', () => {
  const newGame = GameBoard();

  expect(newGame.placeShip(true, 3, 'B3','smallShip')).toStrictEqual([{tile: 'B3', shipID: 'smallShip', isHit:false},{tile: 'C3', shipID: 'smallShip', isHit:false},{tile: 'D3', shipID: 'smallShip', isHit:false}]  )
})

//Target miss
test('Missed target', () => {
  const newGame = GameBoard();
  expect(newGame.receiveAttack('A4')).toStrictEqual({tile:'A4', shipID: null, isHit: true});
})
//Target hit
test('Hitting a target', () => {
  const newGame = GameBoard();
  newGame.placeShip(false, 3, 'C3','smallShip');
  expect(newGame.receiveAttack('C4')).toStrictEqual({tile:'C4', shipID: 'smallShip', isHit: true});
})
