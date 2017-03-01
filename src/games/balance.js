import { makeGame } from '../lib/make-game';

export const rules = 'Balance the given number.';

const getRandomInt = () => Math.round(Math.random() * 1000);

const sort = (num) => {
  const str = String(num);
  return Number(str.split('').sort().join(''));
};

const rebalance = (num) => {
  const str = String(num);
  const arr = str.split('');
  const length = arr.length - 1;
  return arr.map((item, i) => {
    if (i === 0) {
      return Number(item) + 1;
    } else if (i === length) {
      return Number(item) - 1;
    }
    return Number(item);
  }).join('');
};

const balance = (num) => {
  const sorted = sort(num);
  const str = String(sorted);
  const length = str.length - 1;

  if (str[length] - str[0] <= 1) {
    return sorted;
  }
  console.log(sorted);
  const rebalanced = rebalance(sorted);
  return balance(Number(rebalanced));
};
console.log(balance('4181'));
export const playGame = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const correctAnswer = balance(num);
  return makeGame(question, correctAnswer);
};
