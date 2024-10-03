import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js';
import Shark from './Shark.js'; // Import the Shark class

// In GameControl.js

const GameControl = {
    turtle: null,
    shark: null,
    score: 0,
    seaweedCollected: 0, // Track seaweed collected by turtle

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World
        this.background = new Background(assets.image || null);
        this.turtle = new Turtle(assets.sprite || null); // Create Turtle player
        this.shark = new Shark(assets.sharkSprite || null); // Create Shark player
        
        // Create starfish pickups
        this.pickup = new Pickup(100, 100, assets.seaweed.src); // Add a pickup at (100, 100)
        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.turtle.update(); // Update turtle
        this.shark.update(); // Update shark

        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check for collisions and scoring
        if (this.pickup && this.pickup.isColliding(this.turtle)) {
            console.log("Turtle collected a pickup!");
            this.seaweedCollected += 1;
            this.pickup.resetPosition();
        }

        // Check for shark collision with turtle
        if (this.shark.isColliding(this.turtle)) {
            console.log("Shark caught the turtle! Player 2 wins!");
            // Display win message and stop game...
        }

        // Check if turtle wins
        if (this.seaweedCollected >= 20) {
            console.log("Player 1 wins!");
            // Display win message and stop game...
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    // Existing methods...
};

// Don't forget to bind resize and any other necessary methods

export default GameControl;
