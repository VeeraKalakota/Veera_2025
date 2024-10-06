import GameEnv from './GameEnv.js';

export class Pickup {
    constructor(x, y, imageSrc) {
        this.x = x;
        this.y = y;
        this.width = 59; // Set the width of the pickup
        this.height = 66; // Set the height of the pickup
        this.image = new Image();
        this.image.src = imageSrc; 
        
        // Ensure the image is drawn only after it's loaded
        this.image.onload = () => {
            this.loaded = true; 
        };
        this.loaded = false; 
    }

    draw(ctx) {
        if (this.loaded) { 
            ctx.drawImage(this.image, this.x, this.y);
        }
    }

    isColliding(player) {
        return (this.x < player.position.x + player.width &&
                this.x + this.width > player.position.x &&
                this.y < player.position.y + player.height &&
                this.y + this.height > player.position.y);
    }

    resetPosition() {
        this.x = Math.random() * (GameEnv.innerWidth - this.width);
        this.y = Math.random() * (GameEnv.innerHeight - this.height);
    }
}

export default Pickup;
