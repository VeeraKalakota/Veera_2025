import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Fish.js'; // Import the Fish class

// In GameControl.js

const GameControl = {
    turtle: null,
    fish: null,
    score: 0,
    seaweedCollected: 0, // Track seaweed collected by turtle

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World
        this.background = new Background(assets.image || null);
        this.turtle = new Turtle(assets.sprite || null); // Create Turtle player
        this.fish = new Fish(assets.fishSprite || null); // Create Fish player
        
        // Create starfish pickups
        this.pickup = new Pickup(100, 100, assets.seaweed.src); // Add a pickup at (100, 100)
        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.turtle.update(); // Update turtle
        this.fish.update(); // Update fish

        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check for collisions and scoring
        if (this.pickup && this.pickup.isColliding(this.turtle)) {
            console.log("Turtle collected a pickup!");
            this.seaweedCollected += 1;
            this.pickup.resetPosition();
        }

        // Check for fish collision with turtle
        if (this.fish.isColliding(this.turtle)) {
            console.log("Fish caught the turtle! Player 2 wins!");
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
