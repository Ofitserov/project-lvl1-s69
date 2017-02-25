#!/usr/bin/env node
import { rules, playGame } from '../games/calc';
import startGame from '..';

startGame(rules, playGame);
