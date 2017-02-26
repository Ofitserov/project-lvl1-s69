import { makeGame } from '../lib/make-game';

export const rules = 'What number is missing in this progression?';

const getRandomInt = (min, max) => Math.round((min - 0.5) + (Math.random() * ((max - min) + 1)));

const makeProgression = (start, step) => {
  const iter = (current, acc) => {
    if (acc.length === 10) {
      return acc;
    }
    acc.push(current);
    return iter(current + step, acc);
  };
  return iter(start, []);
};

export const playGame = () => {
  const start = getRandomInt(0, 9);
  const step = getRandomInt(1, 9);
  const prog = makeProgression(start, step);
  const correctAnswer = prog[start];

  const question = prog.map((elem) => {
    const cond = elem === correctAnswer;
    return cond ? '..' : elem;
  }).join(' ');

  return makeGame(question, correctAnswer);
};
