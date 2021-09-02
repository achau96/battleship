import Ship from "../factories/Ship";

const position = ['A1', 'A2', 'A3', 'A4'];

test('Ship takes a hit', () => {
  const newShip = Ship(position);
  newShip.hit('A2');
  const { shipArray } = newShip;
  expect(shipArray).toStrictEqual(['A1','hit','A3','A4']);
})


test('Ship is sunk', () => {
  const newShip = Ship(position);
  newShip.hit('A1');
  newShip.hit('A2');
  newShip.hit('A3');
  newShip.hit('A4');
  expect(newShip.isSunk()).toBe(true)
})

test('Ship is  not sunk', () => {
  const newShip = Ship(position);
  newShip.hit('A1');
  newShip.hit('A2');
  newShip.hit('A3');
  expect(newShip.isSunk()).toBe(false)
})
