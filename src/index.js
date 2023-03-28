console.log("Webpack is working!")
import MovingObject from "./moving_object.js";
import Asteroid from "./asteroid";
import Game from "./game";
import GameView from "./game_view"

window.MovingObject = MovingObject;
let canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext('2d');
// const asteroid = new Asteroid({ pos: [30, 30] });
// console.log(asteroid)
// asteroid.draw(ctx).move(ctx)

const gameView = new GameView(ctx);
gameView.start()
canvas.height = Game.DIM_Y;
canvas.width = Game.DIM_X;
