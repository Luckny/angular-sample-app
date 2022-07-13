import { Hero } from './hero';

const powers: string[] = [
  'Really Smart',
  'Super Flexible',
  'Super Hot',
  'Weather Changer',
];
const rand = () => {
  return Math.floor(Math.random() * 3);
};

export const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice', power: powers[rand()] },
  { id: 13, name: 'Bombasto', power: powers[rand()] },
  { id: 14, name: 'Celeritas', power: powers[rand()] },
  { id: 15, name: 'Magneta', power: powers[rand()] },
  { id: 16, name: 'RubberMan', power: powers[rand()] },
  { id: 17, name: 'Dynama', power: powers[rand()] },
  { id: 18, name: 'Dr. IQ', power: powers[0] },
  { id: 19, name: 'Magma', power: powers[rand()] },
  { id: 20, name: 'Tornado', power: powers[rand()] },
];
