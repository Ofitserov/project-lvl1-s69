import * as pairs from 'hexlet-pairs';

export const makeGame = (userAnswer, correctAnswer) => pairs.cons(userAnswer, correctAnswer);

export const userAnswer = game => pairs.car(game);

export const correctAnswer = game => pairs.cdr(game);
