import GameEnv from './GameEnv.js';
import Background from './Background.js';
import Player from './Player.js';
import Pickup from './Pickup.js'; // Import the new class
import Fish from './Fish.js';

/* const qaArray = [
    ["Sea-Life", [
        { question: "True or false: JavaScript is an OOP Programing language", answer:"True"},
        { question: "True or false: Turtles can only survive in the ocean", answer:"False"},
        { question: "True or false: This game is the best game ever", answer:"True"}
    ]],
];

function displayQuestionAnswers(qaArray) {
    const questionAnswersDiv = document.getElementById('questionAnswers');
    questionAnswersDiv.innerHTML = "";

    for (let category of qaArray) {
        const h2 = document.createElement('h2');
        h2.innerHTML = category[0];
        questionAnswersDiv.appendChild(h2);

        for (let qa of category[1]) {
            const p = document.createElement('p');
            p.innerHTML = `<strong>Q:<strong/> ${qa.question} <br> <strong>A:</strong> ${qa.answer}`;
            questionAnswersDiv.appendChild(p);
        }
    }

} */
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
    isQuestionActive: false, // New flag to manage the state of the game


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


/*     initKeyListeners: function() {
        window.addEventListener("keydown", (event) => {
            if (event.code === "Escape" && !this.isQuestionActive) {
                this.isQuestionActive = true; // Prevent further inputs
                displayQuestionAnswers(qaArray); 
            }
        });
    }, */
    
    endGame: function (winner) {
        GameEnv.clear();
        const ctx = GameEnv.ctx;
        ctx.fillStyle = 'white';
        ctx.font = '50px Arial';
        ctx.fillText(`Game Over! ${winner} Wins! Press "R" to restart the Game`, 10, 70);
        
        const restartGame = (event) => {
            if (event.code === 'KeyR') { // Use 'KeyR' instead of '82'
                window.removeEventListener("keypress", restartGame); // Remove the listener
                this.start(this.assets);
            }
        };
    
        window.addEventListener("keypress", restartGame);
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
        if (this.pickup && this.pickup.isColliding(this.player) && !this.isQuestionActive) {
            this.score += 1;
            this.pickup.resetPosition(); // Remove the pickup by reseting position
            //this.isQuestionActive = true; // Set flag to true
            //displayQuestionAnswers(qaArray); 
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

        if (this.score >= 5) {
            this.endGame("Pokemon");
            return
        }
    },

/*     // New method to reset the question state
    resetQuestionState: function() {
        this.isQuestionActive = false;
        document.getElementById('questionAnswers').innerHTML = ""; // Clear the display if needed
    }, */

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