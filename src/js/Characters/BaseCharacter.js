export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string' || (name.length < 2 || name.length > 10)) {
      throw new Error('Invalid name');
    }
    if (typeof type !== 'string') {
      throw new Error('Character type must be a string');
    }
    this.name = name;
    this.type = type;
    this.attack = undefined;
    this.defence = undefined;  
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
      return;
    }
    throw new Error('нельзя повысить левел умершего');
  }

  damage(points) {
    if (!this.health) {
      this.health = 0;
      return;
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
