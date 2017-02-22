import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';

export const showRules = (gameName) => {
  console.log('Welcome to the Brain Games!');
  switch (gameName) {
    case 'even':
      console.log('Answer "yes" if number odd otherwise answer "no".');
      break;
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    default:
      console.log('This game has no rules');
  }
};

export const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${name}`);
  return name;
};

const getRandomInt = () => Math.round(Math.random() * 100);

const isEven = (num) => {
  const cond = num % 2 === 0;
  return cond ? 'yes' : 'no';
};

const calc = (data) => {
  const arg1 = pairs.car(pairs.cdr(data));
  const arg2 = pairs.cdr(pairs.cdr(data));
  const operation = pairs.car(data);
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

export const getFunc = (gameName) => {
  switch (gameName) {
    case 'even':
      return isEven;
    case 'calc':
      return calc;
    default:
      return 0;
  }
};

const getCalcData = (acc) => {
  const getOperation = () => {
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
  const args = pairs.cons(getRandomInt(), getRandomInt());
  const operation = getOperation();
  const data = pairs.cons(operation, args);
  return data;
};

export const askQuestion = (gameName, acc) => {
  switch (gameName) {
    case 'even': {
      const data = getRandomInt();
      const question = `${data}`;
      const answer = readlineSync.question(`Question: ${question}`);
      return pairs.cons(data, answer);
    }
    case 'calc': {
      const data = getCalcData(acc);
      const question = `${pairs.car(pairs.cdr(data))} ${pairs.car(data)} ${pairs.cdr(pairs.cdr(data))}`;
      const answer = readlineSync.question(`Question: ${question}`);
      return pairs.cons(data, answer);
    }
    default:
      return 0;
  }
};
