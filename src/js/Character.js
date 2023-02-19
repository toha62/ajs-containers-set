export default class Character {
  constructor(name, type) {
    const charactersType = [
      'Bowerman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];
    if (!(typeof (name) === 'string')) {
      throw new Error('"name" is not a string');
    }
    if (!charactersType.includes(type)) {
      throw new Error('type of character not correct');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Length of "name" does not match expected value: from 2 to 10 symbols');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
