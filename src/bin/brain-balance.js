#!/usr/bin/env node
import { rules, playGame } from '../games/balance';
import startGame from '..';

startGame(rules, playGame);
