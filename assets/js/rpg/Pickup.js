// Pickup.js
import GameEnv from './GameEnv.js';

class Pickup {
    constructor(color = 'gold', radius = 15) {
        this.color = color; // Color of the pickup
        this.radius = radius; // Radius of the pickup
        this.position = {
            x: Math.random() * (GameEnv.innerWidth - this.radius * 2) + this.radius,
            y: Math.random() * (GameEnv.innerHeight - this.radius * 2) + this.radius,
        };
    }

    draw() {
        const ctx = GameEnv.ctx;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

export default Pickup;
