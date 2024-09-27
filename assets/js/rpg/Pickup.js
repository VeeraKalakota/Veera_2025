// Pickup.js
import GameEnv from './GameEnv.js';

export class Pickup {
    constructor(x, y, imageSrc) {
        this.x = x; // Set initial x position
        this.y = y; // Set initial y position
        this.image = new Image();
        this.image.src = imageSrc; // Load the starfish image
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);
    }
}

export default Pickup;

