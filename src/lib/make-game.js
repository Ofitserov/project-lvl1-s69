import * as pairs from 'hexlet-pairs';

export const makeGame = (question, correctAnswer) => pairs.cons(question, correctAnswer);

export const getQuestion = game => pairs.car(game);

export const getCorrectAnswer = game => pairs.cdr(game);
