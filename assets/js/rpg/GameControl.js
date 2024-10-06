import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Fish from './Fish.js';
import Pickup from './Pickup.js'; // Import the Pickup class

const GameControl = {
    turtle: null,
    fish: null,
    score: 0,
    seaweedCollected: 0,

    start: function(assets = {}) {
        GameEnv.create();
        this.background = new Background(assets.image || null);
        this.turtle = new Player(assets.sprite || null); // Create Turtle player
        this.fish = new Fish(assets.fish || null); // Create Fish player

        this.pickup = new Pickup(100, 100, assets.seaweed.src); // Seaweed pickup
        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear();
        this.background.draw();
        this.turtle.update(); // Update turtle
        this.fish.update(); // Update fish

        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check for collisions
        if (this.pickup && this.pickup.isColliding(this.turtle)) {
            console.log("Turtle collected a pickup!");
            this.seaweedCollected += 1;
            this.pickup.resetPosition();
        }

        if (this.fish.isColliding(this.turtle)) {
            console.log("Fish caught the turtle! Player 2 wins!");
            // Display win message and stop game...
        }

        if (this.seaweedCollected >= 20) {
            console.log("Player 1 wins!");
            // Display win message and stop game...
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    drawScore: function() {
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'white';
        ctx.font = '20px Arial';
        ctx.fillText(`Seaweed Collected: ${this.seaweedCollected}`, 10, 20);
    },
};

export default GameControl;
