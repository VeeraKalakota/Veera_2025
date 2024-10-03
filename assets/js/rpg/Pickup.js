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
    // In Pickup.js
    isColliding(player) {
        // Calculate the centers of the player and pickup
        const playerCenterX = player.position.x + player.width / 2;
        const playerCenterY = player.position.y + player.height / 2;
        const pickupCenterX = this.x + this.width / 2;
        const pickupCenterY = this.y + this.height / 2;

        // Calculate the distance in x and y directions
        const dx = Math.abs(playerCenterX - pickupCenterX);
        const dy = Math.abs(playerCenterY - pickupCenterY);

        // Check if the distance is less than the combined width and height of both objects
        const combinedHalfWidth = (player.width / 2) + (this.width / 2);
        const combinedHalfHeight = (player.height / 2) + (this.height / 2);

        // Check for collision
        return dx < combinedHalfWidth && dy < combinedHalfHeight;
    }


    
    resetPosition() {
        // Reset the Pickup Sprite to a new random position
        this.x = Math.random() * (GameEnv.innerWidth - this.width);
        this.y = Math.random() * (GameEnv.innerHeight - this.height)
    }
}

export default Pickup;
