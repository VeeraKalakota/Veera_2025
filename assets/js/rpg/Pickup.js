import GameEnv from './GameEnv.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate

/**
 * pickup is a dynamic class that manages the data and events for a pickup object.
 * 
 * The focus of this class is to handle the pickup's state, rendering, and key events.
 * 
 * This class uses a classic Java class pattern which is nice for managing object data and events.
 * 
 * The classic Java class pattern provides a structured way to define the properties and methods
 * associated with the pickup. This approach helps encapsulate the pickup's state and behavior,
 * making the code more modular and easier to maintain. By using this pattern, we can create
 * multiple instances of the pickup class, each with its own state and behavior.
 * 
 * @class pickup
 * @property {Object} position - The current position of the pickup.
 * @property {Object} velocity - The current velocity of the pickup.
 * @property {Object} scale - The scale of the pickup based on the game environment.
 * @property {number} size - The size of the pickup.
 * @property {number} width - The width of the pickup.
 * @property {number} height - The height of the pickup.
 * @property {number} xVelocity - The velocity of the pickup along the x-axis.
 * @property {number} yVelocity - The velocity of the pickup along the y-axis.
 * @property {Image} spriteSheet - The sprite sheet image for the pickup.
 * @property {number} frameIndex - The current frame index for animation.
 * @property {number} frameCount - The total number of frames for each direction.
 * @property {Object} spriteData - The data for the sprite sheet.
 * @property {number} frameCounter - Counter to control the animation rate.
 * @method resize - Resizes the pickup based on the game environment.
 * @method draw - Draws the pickup on the canvas.
 * @method update - Updates the pickup's position and ensures it stays within the canvas boundaries.
 * @method bindEventListeners - Binds key event listeners to handle pickup movement.
 * @method handleKeyDown - Handles key down events to change the pickup's velocity.
 * @method handleKeyUp - Handles key up events to stop the pickup's velocity.
 */
class pickup {
    /**
     * The constructor method is called when a new pickup object is created.
     * 
     * @param {Object|null} sprite - The sprite data for the pickup. If null, a default red square is used.
     */
    constructor(sprite = null) {
        // Initialize the pickup's scale based on the game environment
        this.scale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        // Check if sprite data is provided
        if (sprite) {
            this.scaleFactor = sprite.data.SCALE_FACTOR || SCALE_FACTOR;
            this.stepFactor = sprite.data.STEP_FACTOR || STEP_FACTOR;
            this.animationRate = sprite.data.ANIMATION_RATE || ANIMATION_RATE;
    
            // Load the sprite sheet
            this.spriteSheet = new Image();
            this.spriteSheet.src = sprite.src;

            // Initialize animation properties
            this.frameIndex = 0; // index reference to current frame
            this.frameCounter = 0; // count each frame rate refresh
            this.direction = 'down'; // Initial direction
            this.spriteData = sprite.data;
        } else {
            // Default to red square
            this.scaleFactor = SCALE_FACTOR;
            this.stepFactor = STEP_FACTOR;
            this.animationRate = ANIMATION_RATE;
            // No sprite sheet for default
            this.spriteSheet = null;
        }

        // Set the initial size of the pickup
        this.size = GameEnv.innerHeight / this.scaleFactor;

        // Initialize the pickup's position and velocity
        this.position = { x: 0, y: GameEnv.innerHeight - this.size };
        this.velocity = { x: 0, y: 0 };

        // Set the initial size and velocity of the pickup
        this.resize();

        // Bind event listeners to allow object movement
        this.bindEventListeners();
    }

    /**
     * Resizes the pickup based on the game environment.
     * 
     * This method adjusts the pickup's size and velocity based on the scale of the game environment.
     * It also adjusts the pickup's position proportionally based on the previous and current scale.
     */
    resize() {
        // Calculate the new scale resulting from the window resize
        const newScale = { width: GameEnv.innerWidth, height: GameEnv.innerHeight };

        // Adjust the pickup's position proportionally
        this.position.x = (this.position.x / this.scale.width) * newScale.width;
        this.position.y = (this.position.y / this.scale.height) * newScale.height;

        // Update the pickup's scale to the new scale
        this.scale = newScale;

        // Recalculate the pickup's size based on the new scale
        this.size = this.scale.height / this.scaleFactor; 


        // Set the pickup's width and height to the new size (object is a square)
        this.width = this.size;
        this.height = this.size;
    }

    /**
     * Draws the pickup on the canvas.
     * 
     * This method renders the pickup using the sprite sheet if provided, otherwise a red square.
     */
    draw() {
        if (this.spriteSheet) {
            // Sprite Sheet frame size: pixels = total pixels / total frames
            const frameWidth = this.spriteData.pixels.width / this.spriteData.orientation.columns;
            const frameHeight = this.spriteData.pixels.height / this.spriteData.orientation.rows;

            // Sprite Sheet direction data source (e.g., front, left, right, back)
            const directionData = this.spriteData[this.direction];

            // Sprite Sheet x and y declarations to store coordinates of current frame
            let frameX, frameY;
            // Sprite Sheet x and y current frame: coordinate = (index) * (pixels)
            frameX = (directionData.start + this.frameIndex) * frameWidth;
            frameY = directionData.row * frameHeight;

            // Draw the current frame of the sprite sheet
            GameEnv.ctx.drawImage(
                this.spriteSheet,
                frameX, frameY, frameWidth, frameHeight, // Source rectangle
                this.position.x, this.position.y, this.width, this.height // Destination rectangle
            );

            // Update the frame index for animation at a slower rate
            this.frameCounter++;
            if (this.frameCounter % this.animationRate === 0) {
                this.frameIndex = (this.frameIndex + 1) % directionData.columns;
            }
        } else {
            // Draw default red square
            GameEnv.ctx.fillStyle = 'red';
            GameEnv.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    /**
     * Updates the pickup's position and ensures it stays within the canvas boundaries.
     * 
     * This method updates the pickup's position based on its velocity and ensures that the pickup
     * stays within the boundaries of the canvas.
     */
    update() {
        // Update begins by drawing the pickup object
        this.draw();

        // Ensure the pickup stays within the canvas boundaries
        // Bottom of the canvas
        if (this.position.y + this.height > GameEnv.innerHeight) {
            this.position.y = GameEnv.innerHeight - this.height;
        }
        // Top of the canvas
        if (this.position.y < 0) {
            this.position.y = 0;
        }
        // Right of the canvas
        if (this.position.x + this.width > GameEnv.innerWidth) {
            this.position.x = GameEnv.innerWidth - this.width;
        }
        // Left of the canvas
        if (this.position.x < 0) {
            this.position.x = 0;        }
    }
}
