#!/usr/bin/env node
import { rules, playGame } from '../games/progression';
import startGame from '..';

startGame(rules, playGame);
