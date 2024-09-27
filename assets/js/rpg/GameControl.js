import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js'; // Import the new class

/**
 * The GameControl object manages the game.
 * 
 * This code uses the JavaScript "object literal pattern" which is nice for centralizing control logic.
 * 
 * The object literal pattern is a simple way to create singleton objects in JavaScript.
 * It allows for easy grouping of related functions and properties, making the code more organized and readable.
 * In the context of GameControl, this pattern helps centralize the game's control logic, 
 * making it easier to manage game states, handle events, and maintain the overall flow of the game.
 * 
 * @type {Object}
 * @property {Player} player - The player object.
 * @property {function} start - Initialize game assets and start the game loop.
 * @property {function} gameLoop - The game loop.
 * @property {function} resize - Resize the canvas and player object when the window is resized.
 */
const GameControl = {
    pickups: [], // Array to hold pickups

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World, this is pre-requisite for all game objects.
        this.background = new Background(assets.image || null);
        this.player = new Player(assets.sprite || null);
       
        // Create starfish pickups
        const starfishImageSrc = "{{site.baseurl}}/images/rpg/starfish.png"; // Path to your starfish image
        this.pickups.push(new Pickup(100, 100, starfishImageSrc)); // Add a pickup at (100, 100)
        this.pickups.push(new Pickup(300, 200, starfishImageSrc)); // Add another pickup at (300, 200)

        this.gameLoop();
    },

    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.player.update();
         // Draw all pickups
        this.pickups.forEach(pickup => pickup.draw(GameEnv.ctx));
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    resize: function() {
        GameEnv.resize(); // Adapts the canvas to the new window size, ie a new Game World.
        this.player.resize();
    }
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;
