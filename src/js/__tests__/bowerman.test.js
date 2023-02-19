import Bowerman from '../Bowerman';
import Character from '../Character';

test('should create instance of class Bowerman', () => {
  const result = new Bowerman('Robin Hood');

  expect(result).toBeInstanceOf(Bowerman);
});

test('should create instance of class Character', () => {
  const result = new Bowerman('Robin Hood');

  expect(result).toBeInstanceOf(Character);
});

test('should create instance of class Bowerman with initial value', () => {
  const result = new Bowerman('Robin Hood');

  expect(result).toEqual({
    name: 'Robin Hood',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

test.each([
  [321321],
  [''],
  ['D'],
  ['Dark Knight'],
])('should throws on uncorrect name: %s', (name) => {
  expect(() => {
    // eslint-disable-next-line no-new
    new Bowerman(name);
  }).toThrow();
});
