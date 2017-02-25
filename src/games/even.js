import { makeGame } from '../lib/make-game';

export const rules = 'Answer "yes" if number odd otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getRandomInt = () => Math.round(Math.random() * 100);

export const playGame = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return makeGame(question, correctAnswer);
};
