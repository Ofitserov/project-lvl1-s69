import * as pairs from 'hexlet-pairs';
import { showRules, getUserName, askQuestion, getFunc } from './game-logic';

export default (gameName) => {
  showRules(gameName);
  const userName = getUserName();

  const iter = (acc) => {
    const pairData = askQuestion(gameName, acc);
    const data = pairs.car(pairData);
    const answer = pairs.cdr(pairData);
    const correctAnswer = getFunc(gameName)(data);
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
