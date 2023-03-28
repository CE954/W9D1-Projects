import Game from "./game"

class GameView {
    constructor(ctx) {
        this.game = new Game();
        this.ctx = ctx
    }

    start() {
        setInterval(() => {
            this.game.draw(this.ctx);
            this.game.moveObjects();
        }, 20);
        
        // setInterval(this.game.bind(draw), 20);
    }
}

export default GameView;