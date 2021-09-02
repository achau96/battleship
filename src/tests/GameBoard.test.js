import GameBoard from "../factories/GameBoard";

const testBoard = [
  ['A1','A2','A3','A4','A5','A6'],
  ['B1','B2','B3','B4','B5','B6'],
  ['C1','C2','C3','C4','C5','C6'],
  ['D1','D2','D3','D4','D5','D6'],
  ['E1','E2','E3','E4','E5','E6'],
  ['F1','F2','F3','F4','F5','F6']
]
//Test that you can put a ship down, return new board array
test('Place ship', () => {
  const newGame = GameBoard();
  newGame.placeShip(false, 3, 'C3');
  expect(newGame.board[2].slice(2,5)).toStrictEqual([{tile: 'C3', hasShip: true, isHit:false},{tile: 'C4', hasShip: true, isHit:false},{tile: 'C5', hasShip: true, isHit:false}]  )
})

//Target miss

//Target hit
