// Pickup.js
import GameEnv from './GameEnv.js';

export class Pickup {
    constructor(x, y, imageSrc) {
        this.x = x; // Set initial x position
        this.y = y; // Set initial y position
        this.width = 59; // Set the width of the pickup
        this.height = 66; // Set the height of the pickup
        this.image = new Image();
        this.image.src = imageSrc; // Load the starfish image
        
        // Ensure the image is drawn only after it's loaded
        this.image.onload = () => {
            this.loaded = true; // Flag to indicate the image is loaded
        };
        this.loaded = false; // Initially set to false
    }

    draw(ctx) {
        if (this.loaded) { // Only draw if the image is loaded
            ctx.drawImage(this.image, this.x, this.y);
        }
    }

// In Pickup.js
    isColliding(player) {
        const playerCenterX = player.position.x + player.width / 2;
        const playerCenterY = player.position.y + player.height / 2;
        const pickupCenterX = this.x + this.width / 2;
        const pickupCenterY = this.y + this.height / 2;

        const dx = playerCenterX - pickupCenterX;
        const dy = playerCenterY - pickupCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const collisionRadius = 50; // You can adjust this based on your needs

        return distance < collisionRadius; // Returns true if the player is close enough
    }

    
    resetPosition() {
        // Reset the Pickup Sprite to a new random position
        this.x = Math.random() * (GameEnv.innerWidth - this.width);
        this.y = Math.random() * (GameEnv.innerHeight - this.height)
    }
}

export default Pickup;
