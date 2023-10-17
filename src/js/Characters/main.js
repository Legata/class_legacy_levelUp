import BaseCharacter from './BaseCharacter';
import Bowman from './Bowman';
import Daemon from './Daemon';
import Magician from './Magician';
import Swordsman from './Swordsman';
import Undead from './Undead';
import Zombie from './Zombie';

const base = new BaseCharacter('God', 'Celestial');
const legolas = new Bowman('Legolas');
const diablo = new Daemon('Diablo');
const merlin = new Magician('Merlin');
const dragonKnight = new Swordsman('Knight');
const ghoul = new Undead('Ghoul');
const plantFighter = new Zombie('Plant');

legolas.levelUp();
diablo.damage(10);
merlin.levelUp();
dragonKnight.damage(20);
ghoul.damage(30);
plantFighter.levelUp();

function showEverybody(...args) {
  // eslint-disable-next-line no-console
  console.log([...args]);
}
showEverybody(base, legolas, diablo, merlin, dragonKnight, ghoul, plantFighter);
