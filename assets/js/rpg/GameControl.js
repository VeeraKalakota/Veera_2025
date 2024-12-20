import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js'; // Import the new class
import Fish from './Fish.js';


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
    pickup: null, 
    score: 0, // Initialize score to zero
    assets: null,
    scoreFactor: 5,

    start: function(assets = {}) {
        GameEnv.create(); // Call the static method to set up the game environment
        this.score = 0;
        this.assets = assets

        this.background = new Background(assets.image || null);
        this.player = new Player(assets.sprite || null);
        this.fish = new Fish(assets.sprite2 || null); 
        this.pickup = new Pickup(100, 100, assets.seaweed.src);
        // this.initKeyListeners(); // initialize key listeners
        this.gameLoop();
    },

    gameSettings: function () { 
        let setting = document.getElementById('setting')
        setting.style.display = 'block'
        window.addEventListener('keypress',(event) => {
           this.updateScoreFactor(event.code)
        })
    },
    
    
    endGame: function (winner) {
        GameEnv.clear();
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'white';
        ctx.font = '35px Arial';
        ctx.fillText(`Game Over! ${winner} Wins! Press "R" to restart. Press "P" for settings.`, 10, 70);
        
        const restartGame = (event) => {
            if (event.code === 'KeyR') { // Use 'KeyR' instead of '82'
                window.removeEventListener("keypress", restartGame); // Remove the listener
                this.start(this.assets);
            }
            if (event.code === 'KeyP') { // This uses the p key to access the settings
                this.gameSettings() 
            }
        };

        window.addEventListener("keypress", restartGame);
    },
    
    updateScoreFactor (difficulty) {
        if (difficulty === 'KeyE') {
            this.scoreFactor = 5;
            this.assets.seaweed.data.SCALE_FACTOR = 10;
        } else if (difficulty === 'KeyM') {
            this.scoreFactor = 7;
            this.assets.seaweed.data.SCALE_FACTOR = 7;
        } else if (difficulty === "KeyH"){
            this.scoreFactor = 10
            this.assets.seaweed.data.SCALE_FACTOR = 5;
        }
    },


    gameLoop: function() {
        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.player.update();
        this.fish.update();
        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check if the pickup is collected
        if (this.pickup && this.pickup.isColliding(this.player)) {
            this.score += 1;
            this.pickup.resetPosition(); // Remove the pickup by reseting position

        } 


        if (this.fish && this.fish.isColliding(this.player)) {
            this.score -= 1;
            if (this.score <= 0) {
               this.endGame("Trainer") 
               return
            }
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));

        if (this.score >= this.scoreFactor) {
            this.endGame("Pokemon");
            return
        }


    },


    drawScore: function() {
        const ctx = GameEnv.ctx
        ctx.fillStyle = 'black'
        ctx.font = '60px Arial'
        ctx.fillText(`Score: ${this.score}`,10,70)

    },


    resize: function() {
        GameEnv.resize(); // Adapts the canvas to the new window size, ie a new Game World.
        this.player.resize();
        this.fish.resize();
    }
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));



export default GameControl;