import { makeGame } from '../lib/make-game';

export const rules = 'Answer "yes" if number simple otherwise answer "no".';

const getRandomInt = () => Math.round(Math.random() * 100);

const isPrime = (num) => {
  const iter = (acc) => {
    if (num === acc) {
      return true;
    } else if (num % acc === 0) {
      return false;
    }
    return iter(num, acc + 1);
  };
  return iter(2);
};

export const playGame = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return makeGame(question, correctAnswer);
};
