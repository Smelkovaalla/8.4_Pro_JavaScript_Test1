import healthLevel from '../app';

const healthobj = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 35 }, 'wounded'],
  [{ name: 'Маг', health: 7 }, 'critical'],
];

const handler = test.each(healthobj);

handler('check healf level for %O', (person, expected) => {
  const result = healthLevel(person);
  expect(result).toBe(expected);
});