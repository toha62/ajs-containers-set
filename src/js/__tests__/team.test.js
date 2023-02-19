import Team from '../Team';
import Daemon from '../Daemon';
import Zombie from '../Zombie';

const team = new Team();
const chr1 = new Daemon('Baltazar');
const chr2 = new Zombie('Dark king');
const chr3 = new Daemon('Locky');

test('should add Deamon and Zombie characters to Team', () => {
  const result = new Set([
    {
      name: 'Baltazar',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Dark king',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ]);

  team.add(chr1);
  team.add(chr2);

  expect(team.members).toEqual(result);
});

test('should trow when adding the same characters to team', () => {
  expect(() => {
    team.add(chr1);
    team.add(chr2);
    team.add(chr1);
  }).toThrow();
});

test('should add three different characters to Team', () => {
  const result = new Set([
    {
      name: 'Baltazar',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Dark king',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Locky',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ]);

  team.addAll(chr1, chr2, chr3);

  expect(team.members).toEqual(result);
});

test('should add three different characters to Team, when we try to add some of the same', () => {
  const result = new Set([
    {
      name: 'Baltazar',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Dark king',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Locky',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ]);

  team.addAll(chr1, chr2, chr3, chr1, chr3, chr3, chr2);

  expect(team.members).toEqual(result);
});

test('should return array characters of Team, transformed from Set', () => {
  const result = [
    {
      name: 'Baltazar',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: 'Dark king',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Locky',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  ];

  team.addAll(chr1, chr2, chr3);

  expect(team.toArray()).toEqual(result);
});
