import readlineSync from 'readline-sync';


const showRules = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
};

const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello!, ${name}`);
  return name;
};

const getRandomInt = () => Math.round(Math.random() * 100);

const isEven = (num) => {
  const cond = num % 2 === 0;
  return cond ? 'yes' : 'no';
};

const askQuestion = (int) => {
  const answer = readlineSync.question(`Question: ${int}`, {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  return answer ? 'yes' : 'no';
};

export default () => {
  showRules();
  const userName = getUserName();

  const iter = (acc) => {
    const randomInt = getRandomInt();
    const answer = askQuestion(randomInt);
    const showAnswer = () => {
      console.log(`Your answer: ${answer}`);
      console.log('Correct!');
    };

    if (answer === isEven(randomInt)) {
      if (acc >= 3) {
        showAnswer();
        console.log(`Congratulations, ${userName}!`);
        return 1;
      }
      showAnswer();
      return iter(acc + 1);
    }

    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Lets try again, ${userName}!`);
    return 0;
  };

  return iter(1);
};
