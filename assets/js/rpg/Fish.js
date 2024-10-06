import GameEnv from './GameEnv.js';

class Fish {
    constructor(sprite = null) {
        this.position = { x: 200, y: 200 }; // Initial position for the fish
        this.velocity = { x: 0, y: 0 };
        this.size = GameEnv.innerHeight / 25; // Scale size
        this.width = this.size;
        this.height = this.size;

        if (sprite) {
            this.spriteSheet = new Image();
            this.spriteSheet.src = sprite.src;
            this.spriteData = sprite.data;
        } else {
            this.spriteSheet = null; // Default sprite handling
        }

        this.bindEventListeners(); // Bind movement controls
    }

    draw() {
        if (this.spriteSheet) {
            GameEnv.ctx.drawImage(this.spriteSheet, this.position.x, this.position.y, this.width, this.height);
        }
    }

    update() {
        // Move fish (can be random or based on player input)
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Ensure fish stays within bounds
        this.position.x = Math.max(0, Math.min(GameEnv.innerWidth - this.width, this.position.x));
        this.position.y = Math.max(0, Math.min(GameEnv.innerHeight - this.height, this.position.y));
    }

    isColliding(player) {
        return (this.position.x < player.position.x + player.width &&
                this.position.x + this.width > player.position.x &&
                this.position.y < player.position.y + player.height &&
                this.position.y + this.height > player.position.y);
    }

    bindEventListeners() {
        // Bind controls for the Fish (e.g., arrow keys)
        window.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    this.velocity.y = -5;
                    break;
                case 'ArrowDown':
                    this.velocity.y = 5;
                    break;
                case 'ArrowLeft':
                    this.velocity.x = -5;
                    break;
                case 'ArrowRight':
                    this.velocity.x = 5;
                    break;
            }
        });

        window.addEventListener('keyup', () => {
            this.velocity.x = 0;
            this.velocity.y = 0;
        });
    }
}

export default Fish;
