import Player from "../factories/Player";
import GameBoard from "../factories/GameBoard";

test('Player makes a miss', () => {
  const newGame = GameBoard();
  const playerOne = Player();

  expect(playerOne.move('A3',newGame)).toBe('missed');
})

test('Player makes a hit', () => {
  const newGame = GameBoard();
  const playerOne = Player();
  newGame.placeShip(false, 3, 'A2','smallShip')
  expect(playerOne.move('A3',newGame)).toBe('hit');
})

test('AI makes a miss', () => {
  const myGameBoard = GameBoard();
  const playerOne = Player();
  myGameBoard.receiveAttack('B3')
  expect(playerOne.randomMove(myGameBoard)).toBe('missed');
})

test('AI makes a miss - test for randomness', () => {
  const myGameBoard = GameBoard();
  const playerOne = Player();
  myGameBoard.receiveAttack('B3')
  expect(playerOne.randomMove(myGameBoard)).toBe('missed');
})


