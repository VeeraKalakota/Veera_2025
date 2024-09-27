// Pickup.js
import GameEnv from './GameEnv.js';

export class Pickup {
    constructor(x, y, imageSrc) {
        this.x = x; // Set initial x position
        this.y = y; // Set initial y position
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
}

export default Pickup;
