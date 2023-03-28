import MovingObject from "./moving_object";
import * as Util from "./util.js";


class Asteroid extends MovingObject {
    static COLOR = "red";
    static RADIUS = 25;

    constructor(object){
        object.color = Asteroid.COLOR;
        object.radius = Asteroid.RADIUS;
        object.vel = Util.randomVec(5);

        super(object)
    }
}

export default Asteroid;

// const asteroid = new Asteroid({ pos: [30, 30] });
// asteroid.draw()
// window.asteroid = asteroid;
// console.log(asteroid)