import readlineSync from 'readline-sync';
import { userAnswer, correctAnswer } from './lib/make-game';

const showRules = (rules) => {
  console.log(rules);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${userName}`);
  return userName;
};

export default (rules, game) => {
  console.log('Welcome to the Brain Games!');
  if (rules) {
    showRules(rules);
  }

  const userName = getUserName();

  const iter = (acc) => {
    const gameData = game(acc);
    const answer = userAnswer(gameData);
    const trueAnswer = correctAnswer(gameData);
    const showAnswer = () => {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    };
    if (answer === trueAnswer) {
      if (acc >= 3) {
        showAnswer();
        console.log(`Congratulations, ${userName}!`);
        return 1;
      }
      showAnswer();
      return iter(acc + 1);
    }
    console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}. Lets try again, ${userName}!`);
    return 0;
  };

  if (game) {
    return iter(1);
  }
  return 0;
};
