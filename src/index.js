import readlineSync from 'readline-sync';
import { getQuestion, getCorrectAnswer } from './lib/make-game';

const showRules = (rules) => {
  console.log(rules);
};

const getUserName = () => {
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${userName}`);
  return userName;
};

export default (rules, playGame) => {
  console.log('Welcome to the Brain Games!');
  if (rules) {
    showRules(rules);
  }

  const userName = getUserName();

  const iter = (acc) => {
    const game = playGame(acc);
    const question = getQuestion(game);
    const correctAnswer = `${getCorrectAnswer(game)}`;
    const userAnswer = readlineSync.question(`Question: ${question}`);
    const showAnswer = () => {
      console.log(`Your answer: ${userAnswer}`);
      console.log('Correct!');
    };
    if (userAnswer === correctAnswer) {
      if (acc >= 3) {
        showAnswer();
        console.log(`Congratulations, ${userName}!`);
        return 1;
      }
      showAnswer();
      return iter(acc + 1);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Lets try again, ${userName}!`);
    return 0;
  };

  if (playGame) {
    return iter(1);
  }
  return 0;
};
