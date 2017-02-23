import readlineSync from 'readline-sync';
import * as pairs from 'hexlet-pairs';

export const showRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${name}`);
  return name;
};

const isEven = (num) => {
  const cond = num % 2 === 0;
  return cond ? 'yes' : 'no';
};

const getRandomInt = () => Math.round(Math.random() * 100);

const askQuestion = () => {
  const data = getRandomInt();
  const question = `${data}`;
  const answer = readlineSync.question(`Question: ${question}`);
  return pairs.cons(data, answer);
};

export default () => {
  showRules();
  const userName = getUserName();

  const iter = (acc) => {
    const pairData = askQuestion();
    const data = pairs.car(pairData);
    const answer = pairs.cdr(pairData);
    const correctAnswer = isEven(data);
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
