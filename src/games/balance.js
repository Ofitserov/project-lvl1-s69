import { makeGame } from '../lib/make-game';

export const rules = 'Balance the given number.';

const getRandomInt = () => Math.round(Math.random() * 1000);

const sort = (num) => {
  const str = String(num);
  return Number(str.split('').sort().join(''));
};

const balance = (num) => {
  const sorted = sort(num);
  const str = String(sorted);
  const length = str.length - 1;

  if (str[length] - str[0] <= 1) {
    return sorted;
  }

  let result = '';
  for (let i = 0; i <= length; i += 1) {
    if (i === 0) {
      result += String(Number(str[i]) + 1);
    } else if (i === length) {
      result += String(Number(str[i] - 1));
    } else {
      result += str[i];
    }
  }
  return balance(Number(result));
};

export const playGame = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const correctAnswer = balance(num);
  return makeGame(question, correctAnswer);
};
