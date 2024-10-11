import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js';
import Fish from './Fish.js';

const GameControl = {
    pickup: null, 
    score: 0, // Initialize score to zero
    gameOver: false, // Add a gameOver property

    start: function(assets = {}) {
        GameEnv.create(); // Create the Game World
        this.background = new Background(assets.image || null);
        this.player = new Player(assets.sprite || null);
        this.fish = new Fish(assets.sprite2 || null);
        
        this.pickup = new Pickup(100, 100, assets.seaweed.src); // Add a pickup at (100, 100)
        this.gameLoop();
    },

    gameLoop: function() {
        if (this.gameOver) return; // Stop the loop if the game is over

        GameEnv.clear(); // Clear the canvas
        this.background.draw();
        this.player.update();
        this.fish.update();
        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        // Check if the pickup is collected
        if (this.pickup && this.pickup.isColliding(this.player)) {
            console.log("Pickup collected!");
            this.score += 1;
            this.pickup.resetPosition(); // Reset position of the pickup
        }

        // Check for collision with fish
        if (this.fish && this.fish.isColliding(this.player)) {
            console.log("Fish Collided with Player!");
            this.endGame("Fish Wins!"); // End game if fish collides
        }

        // Check for win condition
        if (this.score >= 15) {
            this.endGame("Turtle Wins!"); // End game if score reaches 15
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    endGame: function(message) {
        this.gameOver = true; // Set game over flag
        GameEnv.clear(); // Clear the canvas
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, GameEnv.canvas.width, GameEnv.canvas.height); // Fill the screen with black
        ctx.fillStyle = 'white'; // Change text color
        ctx.font = '60px Arial';
        ctx.fillText(message, GameEnv.canvas.width / 2 - ctx.measureText(message).width / 2, GameEnv.canvas.height / 2);
    },

    drawScore: function() {
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'black';
        ctx.font = '60px Arial';
        ctx.fillText(`Score: ${this.score}`, 10, 70);
    },

    resize: function() {
        GameEnv.resize(); // Adapts the canvas to the new window size
        this.player.resize();
        this.fish.resize();
    }
};

// Detect window resize events and call the resize function.
window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;
