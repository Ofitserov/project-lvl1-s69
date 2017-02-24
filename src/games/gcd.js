import readlineSync from 'readline-sync';
import { makeGame } from '../lib/make-game';

export const rules = 'Find the greatest common divisor of given numbers.';

const getRandomInt = () => Math.round(Math.random() * 100);

const gcd = (a, b) => {
  if (b === 0) {
    return `${a}`;
  }
  return gcd(b, a % b);
};

export const game = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const generateQuestion = `${a} ${b}`;
  const userAnswer = readlineSync.question(`Question: ${generateQuestion}`);
  const correctAnswer = gcd(a, b);
  return makeGame(userAnswer, correctAnswer);
};
