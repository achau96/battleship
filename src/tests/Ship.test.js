import Ship from "../factories/Ship";

const position = ['A1', 'A2', 'A3', 'A4'];
const newShip = Ship(position);
test('Ship takes a hit', () => {
  newShip.hit('A2');
  const { shipArray } = newShip;
  expect(shipArray).toStrictEqual(['A1','hit','A3','A4']);
})
