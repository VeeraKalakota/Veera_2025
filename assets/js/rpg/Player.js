import GameEnv from './GameEnv.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate

/**
 * Player is a dynamic class that manages the data and events for a player object.
 * 
 * The focus of this class is to handle the player's state, rendering, and key events.
 * 
 * This class uses a classic Java class pattern which is nice for managing object data and events.
 * 
 * The classic Java class pattern provides a structured way to define the properties and methods
 * associated with the player. This approach helps encapsulate the player's state and behavior,
 * making the code more modular and easier to maintain. By using this pattern, we can create
 * multiple instances of the Player class, each with its own state and behavior.
 * 
 * @class Player
 * @property {Object} position - The current position of the player.
 * @property {Object} velocity - The current velocity of the player.
 * @property {Object} scale - The scale of the player based on the game environment.
 * @property {number} size - The size of the player.
 * @property {number} width - The width of the player.
 * @property {number} height - The height of the player.
 * @property {number} xVelocity - The velocity of the player along the x-axis.
 * @property {number} yVelocity - The velocity of the player along the y-axis.
 * @property {Image} spriteSheet - The sprite sheet image for the player.
 * @property {number} frameIndex - The current frame index for animation.
 * @property {number} frameCount - The total number of frames for each direction.
 * @property {Object} spriteData - The data for the sprite sheet.
 * @property {number} frameCounter - Counter to control the animation rate.
 * @method resize - Resizes the player based on the game environment.
 * @method draw - Draws the player on the canvas.
 * @method update - Updates the player's position and ensures it stays within the canvas boundaries.
 * @method bindEventListeners - Binds key event listeners to handle player movement.
 * @method handleKeyDown - Handles key down events to change the player's velocity.
 * @method handleKeyUp - Handles key up events to stop the player's velocity.
 */
// In GameControl.js

const GameControl = {
    turtle: null,
    score: 0,
    seaweedCollected: 0, // Track seaweed collected by turtle

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World
        this.background = new Background(assets.image || null);
        this.turtle = new Turtle(assets.sprite || null); // Create Turtle player
        
        // Create starfish pickups
        this.pickup = new Pickup(100, 100, assets.seaweed.src); // Add a pickup at (100, 100)
        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.turtle.update(); // Update turtle

        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check for collisions and scoring
        if (this.pickup && this.pickup.isColliding(this.turtle)) {
            console.log("Turtle collected a pickup!");
            this.seaweedCollected += 1;
            this.pickup.resetPosition();
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    // Existing methods...
};

// Don't forget to bind resize and any other necessary methods

export default GameControl;