export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error(`Character with name: "${character.name}" and type: "${character.type}" allready exist`);
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.map(character => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }
}
