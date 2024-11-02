import { Game } from './game.js';

const canvas = document.querySelector('canvas');
const game = new Game(canvas);
game.loadAssets().then(() => game.start());