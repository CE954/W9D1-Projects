import MovingObject from "./moving_object";
import Asteroid from "./asteroid"

class Game {
    static DIM_X = 800
    static DIM_Y = 600
    static NUM_ASTEROIDS = 10

    constructor() {
        this.asteroids = []
        this.addAsteroids()
    }

    randomPosition() {
        let x = Math.floor(Math.random() * Game.DIM_X);
        let y = Math.floor(Math.random() * Game.DIM_Y);
        return [x,y];
    }

    addAsteroids () {
        for(let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            let pos = this.randomPosition();
            this.asteroids.push(new Asteroid({pos: pos, game: this}));
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        this.asteroids.forEach(asteroid => {
            asteroid.draw(ctx);
        })
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => {
            asteroid.move();
        })
    }

    wrap(pos) {
        let x = Game.DIM_X - (pos[0] % Game.DIM_X);
        let y = Game.DIM_Y - (pos[1] % Game.DIM_Y);
        pos = [x, y];
        return pos;
    }

    outOfBounds(pos){
        return ((pos[0] < 0 || pos[0] > Game.DIM_X) || (pos[1] < 0 || pos[1] > Game.DIM_Y))
    }
}

export default Game;