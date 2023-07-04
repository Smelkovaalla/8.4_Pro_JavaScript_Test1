import lifeBar from './lifebar';
import sorting from './sorting';

const player = {
  name: 'Маг',
  health: '90',
};

const users = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

lifeBar(players);
sorting(users);