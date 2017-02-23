import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';

export const showRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
};

export const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${name}`);
  return name;
};

const getRandomInt = () => Math.round(Math.random() * 100);

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

export const askQuestion = (acc) => {
  const data = getCalcData(acc);
  const question = `${pairs.car(pairs.cdr(data))} ${pairs.car(data)} ${pairs.cdr(pairs.cdr(data))}`;
  const answer = readlineSync.question(`Question: ${question}`);
  return pairs.cons(data, answer);
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

export default () => {
  showRules();
  const userName = getUserName();

  const iter = (acc) => {
    const pairData = askQuestion(acc);
    const data = pairs.car(pairData);
    const answer = pairs.cdr(pairData);
    const correctAnswer = calc(data);
    const showAnswer = () => {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    };
    if (answer === correctAnswer) {
      if (acc >= 3) {
        showAnswer();
        console.log(`Congratulations, ${userName}!`);
        return 1;
      }
      showAnswer();
      return iter(acc + 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Lets try again, ${userName}!`);
    return 0;
  };

  return iter(1);
};
