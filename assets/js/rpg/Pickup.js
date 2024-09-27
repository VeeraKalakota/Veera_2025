// Pickup.js
import GameEnv from './GameEnv.js';
export class Pickup {
    constructor(x, y, imageSrc) {
        this.x = x; // X position of the pickup
        this.y = y; // Y position of the pickup
        this.image = new Image(); // Create a new image object
        this.image.src = imageSrc; // Set the source of the image
        this.width = 30; // Width of the pickup (adjust as needed)
        this.height = 30; // Height of the pickup (adjust as needed)
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height); // Draw the image on the canvas
    }
}

export default Pickup;
