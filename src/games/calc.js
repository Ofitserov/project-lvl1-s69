import { makeGame } from '../lib/make-game';

export const rules = 'What is the result of the expression?';

const getRandomInt = () => Math.round(Math.random() * 100);

const getOperation = (acc) => {
  switch (acc) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return 0;
  }
};
const calc = (arg1, arg2, operation) => {
  switch (operation) {
    case '+':
      return `${arg1 + arg2}`;
    case '-':
      return `${arg1 - arg2}`;
    case '*':
      return `${arg1 * arg2}`;
    default:
      return 0;
  }
};

export const playGame = (acc) => {
  const arg1 = getRandomInt();
  const arg2 = getRandomInt();
  const operation = getOperation(acc);
  const question = `${arg1} ${operation} ${arg2}`;
  const correctAnswer = calc(arg1, arg2, operation);
  return makeGame(question, correctAnswer);
};
