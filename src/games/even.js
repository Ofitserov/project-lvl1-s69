import { makeGame } from '../lib/make-game';

export const rules = 'Answer "yes" if number odd otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getRandomInt = () => Math.round(Math.random() * 100);

export const playGame = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return makeGame(question, correctAnswer);
};
