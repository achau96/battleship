import Player from "../factories/Player";
import GameBoard from "../factories/GameBoard";

test('Player takes turn', () => {
  const newGame = GameBoard();
  const playerOne = Player();

  expect(playerOne.move(newGame.receiveAttack('A3'))).toBe('missed');
})
