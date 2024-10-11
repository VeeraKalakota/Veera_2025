import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js';
import Fish from './Fish.js';

const GameControl = {
    pickup: null, 
    score: 0,
    gameOver: false,

    start: function(assets = {}) {
        this.initializeGame(assets);
        this.gameLoop();
    },

    initializeGame: function(assets) {
        this.background = new Background(assets.image || null);
        this.player = new Player(assets.sprite || null);
        this.fish = new Fish(assets.sprite2 || null);
        
        this.pickup = new Pickup(100, 100, assets.seaweed.src);
        this.score = 0; // Reset score
        this.gameOver = false; // Reset game over flag
    },

    gameLoop: function() {
        if (this.gameOver) return;

        GameEnv.clear();
        this.background.draw();
        this.player.update();
        this.fish.update();
        if (this.pickup) {
            this.pickup.draw(GameEnv.ctx);
        }

        if (this.pickup && this.pickup.isColliding(this.player)) {
            this.score += 1;
            this.pickup.resetPosition();
        }

        if (this.fish && this.fish.isColliding(this.player)) {
            this.endGame("Fish Wins!");
        }

        if (this.score >= 15) {
            this.endGame("Turtle Wins!");
        }

        this.drawScore();
        requestAnimationFrame(this.gameLoop.bind(this));
    },

    endGame: function(message) {
        this.gameOver = true;
        GameEnv.clear();
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, GameEnv.canvas.width, GameEnv.canvas.height);
        ctx.fillStyle = 'white';
        ctx.font = '60px Arial';
        ctx.fillText(message, GameEnv.canvas.width / 2 - ctx.measureText(message).width / 2, GameEnv.canvas.height / 2);
        
        ctx.font = '30px Arial';
        ctx.fillText("Press R to Restart", GameEnv.canvas.width / 2 - ctx.measureText("Press R to Restart").width / 2, GameEnv.canvas.height / 2 + 50);
        
        // Attach keydown event listener for restart
        window.addEventListener('keydown', this.restartGame.bind(this));
    },

    restartGame: function(event) {
        if (event.key === 'r' || event.key === 'R') {
            window.removeEventListener('keydown', this.restartGame.bind(this));
            this.initializeGame(); // Reinitialize game state
            this.gameLoop(); // Start the game loop again
        }
    },

    drawScore: function() {
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'black';
        ctx.font = '60px Arial';
        ctx.fillText(`Score: ${this.score}`, 10, 70);
    },

    resize: function() {
        GameEnv.resize();
        this.player.resize();
        this.fish.resize();
    }
};

window.addEventListener('resize', GameControl.resize.bind(GameControl));

export default GameControl;
