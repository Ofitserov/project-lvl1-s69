#!/usr/bin/env node
import { rules, playGame } from '../games/gcd';
import startGame from '..';

startGame(rules, playGame);
