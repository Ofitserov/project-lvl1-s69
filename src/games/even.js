import readlineSync from 'readline-sync';
import { makeGame } from '../lib/make-game';

export const rules = 'Answer "yes" if number odd otherwise answer "no".';

const isEven = (num) => {
  const cond = num % 2 === 0;
  return cond ? 'yes' : 'no';
};

const getRandomInt = () => Math.round(Math.random() * 100);

export const game = () => {
  const generateQuestion = getRandomInt();
  const userAnswer = readlineSync.question(`Question: ${generateQuestion}`);
  const correctAnswer = isEven(generateQuestion);
  return makeGame(userAnswer, correctAnswer);
};
