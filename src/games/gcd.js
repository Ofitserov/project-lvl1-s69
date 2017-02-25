import { makeGame } from '../lib/make-game';

export const rules = 'Find the greatest common divisor of given numbers.';

const getRandomInt = () => Math.round(Math.random() * 100);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const playGame = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const question = `${a} ${b}`;
  const correctAnswer = gcd(a, b);
  return makeGame(question, correctAnswer);
};
