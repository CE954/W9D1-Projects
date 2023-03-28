
class MovingObject {
    constructor (object) {
        this.pos = object.pos;
        this.vel = object.vel;
        this.radius = object.radius;
        this.color = object.color;
        this.game = object.game;
    }

    draw (ctx) {
        // debugger
        let x = this.pos[0];
        let y = this.pos[1];
        ctx.beginPath();
        ctx.arc(x, y,this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    move () {
        let x1 = this.pos[0];
        let y1 = this.pos[1];
        let x2 = this.vel[0];
        let y2 = this.vel[1];
        this.pos = [x1 + x2, y1 + y2]
        if (this.game.outOfBounds(this.pos)) {
            this.pos = this.game.wrap(this.pos);
        }
    }

    
}

export default MovingObject;