/* eslint-disable no-unused-vars */
import Character from '../Characters/BaseCharacter';

test('should return normal char', () => {
  const char = new Character('God', 'Celestial');
  const result = {
    name: 'God',
    type: 'Celestial',
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Invalid name';
  expect(() => {
    const char = new Character('ы', 'Celestial');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Character type must be a string';
  expect(() => {
    const char = new Character('Боооог', 13);
  }).toThrow(error);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Character('God', 'Celestial');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});
