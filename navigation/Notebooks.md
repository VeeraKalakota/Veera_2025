---
layout: base
title: Jupyter Notebooks
permalink: /notebooks/
---

# Variables + Input & Output


## Variables
Variables are storage containers for data values used within a programming language. Variables can be useful when changing preferences, selecting a background, creating animations, and changing assets in game programming.

### Variable Inputs
To obtain data from user and save into a JavaScript variable requires the use of HTML.  
The `<input>` HTML element is used to create interactive controls for web-based forms in order to receive data from the user.
- Geeks for Geeks Referece on [input tag](https://www.geeksforgeeks.org/html-input-tag/)
- Remember in Jupyter Notebooks and in GitHub Pages we do not use `<head>` and `<body>` tags.  
- Additionally, we prefer using SASS for `<style>` in GitHub Pages.

### Variable Outputs
To output a variable in JavaScript it works in combination with HTML as well. To output the variable game_speed or any errors it requires  that outputs to be placed in the Document Object Model (DOM). Additionally, it is common practice in debugging a program to output to console.log.
To view DOM and Developer Outputs
- Open Help -> Toggle Developer Tools
- Go to Console menu, you can clear console to view outputs from console comands in this cell
- To see DOM go to Elements tab and use selector and click on output in this window.

%%html 

<!-- Input definitions -->
<div>
  <label for="speed">Adjust Speed (1-5):</label>
  <input type="number" id="speed" name="speed" min="1" max="5" value="2">
  <button onclick="submitSpeed()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<script>
  // Function to validate and output the game speed value
  function submitSpeed() {
    let gameSpeed = document.getElementById('speed').value;
    
    // Ensure the value is within the allowed range
    if (gameSpeed < 1 || gameSpeed > 5) {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid game speed value:", gameSpeed);
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid game speed value: " + gameSpeed;
    } else {
      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the game speed value to the console
      console.log("Game speed set to:", gameSpeed);
      // Output the game speed value to the HTML page
      document.getElementById('output').innerHTML = "Game speed set to: " + gameSpeed;
    }
  }
</script>


### Variable Naming Conventions
- **camelCase** In camel case, the first word is lowercase, and the first letter of the remaining words are uppercase: `gameSpeed`
- **snake_case** In snake casse, the words in variables are all lowercase and are separated by a underbar: `game_speed`
- **PascalCase** In PascalCase, the first letter in the word is capitalized: `GameSpeed`
In JavaScript, there will be usage of all three types in the RPG project.

## Variables containing Variables (Reference Types)
There are variables that contain other variables. These are called reference types.
- **JSON Objects**: These variables contain key names and associated values (key-value pairs). The key is used for reference and the    value contains the data.
  - **Key**: This is similar to a variable name. The key describes the value and is followed by a colon.
  - **Value**: The value is associated with the key.
  - **Sample Definition**: `let gameAttribute = {"Speed": 3, "Avatar": "Mario"}`
  - **Sample Reference**: `gameAttribute["Speed"]`
  - **Sample Output from Reference**: `3`
- **JSON Arrays**: These variables contain a sequence of values.
  - **Sample Definition**: `let scoreHistory = [50, 75, 66, 80, 100, 85]`
  - **Sample Reference**: `scoreHistory[2]`
  - **Sample Output from Reference**: `66`

%%js

// Reference Type example
// Open VSCode Help -> Toggle Developer Tools -> Console

// JSON Object
let gameAttribute = {
    "Speed": 3,
    "Avatar": "Mario"
};

// Accessing JSON Object values
// Accessing JSON Object values using dot notation
console.log("Speed-Dot:", gameAttribute.Speed); // Output: Speed: 3
console.log("Avatar-Dot:", gameAttribute.Avatar); // Output: Avatar: Mario

// Accessing JSON Object values using bracket notation
console.log("Speed-Bracket:", gameAttribute["Speed"]); // Output: Speed: 3
console.log("Avatar-Bracket:", gameAttribute["Avatar"]); // Output: Avatar: Mario

// JSON Array
let scoreHistory = [50, 75, 66, 80, 100, 85];

// Accessing JSON Array values
console.log("Score at index 2:", scoreHistory[2]); // Output: Score at index 2: 66

### Variable Naming Convention Hack
Search up naming convention for JavaScript.  Conventions are important to easily recognize purpose of definitions.
1. Usage of camelCase.  What is standard?
2. Usage of UPPER_CASE snake_case.  What is standard?
3. Usage of PascalCase.  What is standard?
### RPG Project Hack
Identify naming convention and data type used in this code.  Which items would you change according to your research on naming conventions?  What are the data types?  Change names and provide comments to to describe data types and name convention changes.  
1. Make a new code cell to make it easy to compare before and after.
2. Figure out naming convention for Key-Values items.  Source and share your reference.


Make a new code block for some game elements that you have in your "Ideation".


<br>


# Data Types and Operations


### Primitive Data Types
In game development, understanding the different data types in JavaScript is crucial for managing the various elements and attributes of your game. Primitive data types include numbers, strings, booleans, undefined, null, symbols, and BigInts. Reference data types include objects, arrays, and functions. Each type plays a unique role in creating a dynamic and interactive gaming experience.

1. **Number**:
   - Represents numerical values, health and timeInMilliSeconds
2. **String**:
   - Represents text, such as the user's name or keypress.
3. **Boolean**:
   - Represents true/false values, such as isAlive.
4. **Undefined**:
   - Represents a variable that has been declared but not yet assigned a value.
5. **Null**:
   - Represents the intentional absence of any object value, such as an empty inventory slot.
6. **Symbol**:
   - Represents a unique and immutable value, often used as unique identifiers for game objects.
7. **BigInt**:
   - Represents very large integers, such as the total number of points accumulated over many games.

### Reference Data Types
1. **Object**:
   - Represents a collection of key-value pairs, such as a player's attributes or game settings.
2. **Array**:
   - Represents an ordered collection of values, such as a list of high scores or inventory items.
3. **Function**:
   - Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game.


%%js

/* Primitive Data Types
These are data types that store a single value.
*/

// Number: Represents numerical values, such as health and speed
let health = 100; // Integer
let playerSpeed = 5.75; // Float representing the player's speed

console.log("Health (Number):", health, "Type:", typeof health);
console.log("Player Speed (Number):", playerSpeed, "Type:", typeof playerSpeed);

// String: Represents text, such as the user's name or keypress
let userName = "Hero123"; // User name
let keyPress = 'a'; // Keypress

console.log("User Name (String):", userName, "Type:", typeof userName);
console.log("Key Press (String):", keyPress, "Type:", typeof keyPress);

// Compare single character to its ASCII value
let asciiValue = keyPress.charCodeAt(0);
console.log("ASCII Value of Key Press:", asciiValue, "Type:", typeof asciiValue);
console.log("Is Key Press 'a' (ASCII 97)?", asciiValue === 97);

// Boolean: Represents true/false values, such as isAlive
let isAlive = true;

console.log("Is Alive (Boolean):", isAlive, "Type:", typeof isAlive);

// Undefined: Represents a variable that has been declared but not yet assigned a value
let questReward;

console.log("Quest Reward (Undefined):", questReward, "Type:", typeof questReward);

// Null: Represents the intentional absence of any object value, such as an empty inventory slot
let inventorySlot = null;

console.log("Inventory Slot (Null):", inventorySlot, "Type:", typeof inventorySlot);

// Symbol: Represents a unique and immutable value, often used as unique identifiers for game objects
let uniqueID = Symbol('playerID');

console.log("Unique ID (Symbol):", uniqueID, "Type:", typeof uniqueID);

// BigInt: Represents very large integers, such as the total time played in milliseconds
let totalTimePlayed = 1234567890123456789012345678901234567890n;

console.log("Total Time Played (BigInt):", totalTimePlayed, "Type:", typeof totalTimePlayed);

/* Reference Data Types
These are data types that store references to memory locations.
*/

// Object: Represents a collection of key-value pairs, such as player attributes or game settings
let playerAttributes = {
  name: "Hero123",
  health: 100,
  mana: 50
};

console.log("Player Attributes (Object):", playerAttributes, "Type:", typeof playerAttributes);

// Array: Represents an ordered collection of values, such as a list of high scores or inventory items
let highScores = [1500, 1200, 900, 600, 300];

console.log("High Scores (Array):", highScores, "Type:", typeof highScores);
console.log("1st index:", highScores[0])
console.log("Last index:", highScores[highScores.length - 1])

// Function: Represents a block of code designed to perform a specific task, such as attacking an enemy or saving the game
function attackEnemy() {
  console.log("Enemy attacked!");
}

console.log("Attack Enemy (Function):", attackEnemy, "Type:", typeof attackEnemy);
attackEnemy();


### Data Type Operations
In JavaScript, we will be interacting with data and data types. Data types have operators that allow you to alter the data types.

### Assignment Operators and Math Operators
In this example height is being assigned the value of a calculation in relation to conventional screen sizes. These operators are straight forward (`=`, `+`, `-`, `*`, `/`)

```js
let width = 1920;
let height = Math.round(width * 9 / 16);
```

### Compound Assignment
These are shorthand for common operations and are specified as follows. Here is an example of one compound assignment. Make a code cell and try some more (`+=`, `*=`, `-=`, `\=`)

```js
let number = 100;
number += 1;  // short for number = number + 1;
```

### Concatenation
Concatenation is used to join two or more elements together. This is the same as the plus (`+`) operator. It looks like math, but once a string gets involved, it turns into concatenation.

```js
// Simple concatenation
let blockSize = 50;
block.style.width = blockSize + "px";
```

```js
/// Math at first and then concatenation following PEMDAS
block.style.height = blockSize * 9 / 16 + "px";
```
### Popcorn Hack 1
Make a code cell that show usage of compound assignment in a Data Type Operations.
number = 2;
number *= 2;
print(number);

## Scale a Block
Scalling is an important Math operation that is used in Gaming.  This example is considering HD formats to construct a block.

%%html 

<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="width">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="width" name="width" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScale()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="output"></div>
<div id="error"></div>

<!-- Block display -->
<div id="block" style="width: 64px; height: 36px; background-color: red;"></div>

<script>

  // Function to validate and output the scale value
  function submitScale() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 1 / 1;
    let block = document.getElementById('block');
    let width = parseInt(document.getElementById('width').value);
    
    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);
      
      // Calculate block size as 1/20th of the scale dimensions
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;
      
      // Set/clear error messages when the value is valid
      document.getElementById('error').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('output').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
      
      // Adjust the size of the block
      block.style.width = blockSize + "px";
      block.style.height = blockSize * ASPECT_RATIO + "px";
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('output').innerHTML = "";
      // Output an error message to the console
      // Output an error message to the HTML page
      document.getElementById('error').innerHTML = "Invalid HD resolution: " + width;

      // Clear the block size
      block.style.width = "0px";
      block.style.height = "0px";
    }
    console.error("HD resolution:", block.style.width, "x", block.style.height);
  }
</script>

### Popcorn Hack 2
Make a code cell that changes block into a square, versus HD resolution
### Code for Popcorn Hack 2 is altered above.

## Placing a Block
Often in gaming you will want to position on element in relationship to another.

%%html 

<p>This example uses data types, operators, and functions to scale a block based on a user-defined width.</p>

<!-- Input definitions -->
<div>
  <label for="widthCanvas">Enter Width (1280, 1920, 2560, 3840):</label>
  <input type="number" id="widthCanvas" name="widthCanvas" min="1280" max="3840" step="640" value="1280">
  <button onclick="submitScaleImg()">Submit</button>
</div>

<!-- Document Object Model (DOM) output locations -->
<div id="outputMsg"></div>
<div id="errorMsg"></div>

<!-- Canvas for background display -->
<canvas id="canvas"></canvas>

<script>
  // Function to validate and output the scale value
  function submitScaleImg() {
    const BLOCK_SCALE_DIVISOR = 20;
    const ASPECT_RATIO = 9 / 16;
    const SCALE_DOWN_FACTOR = 0.5;
    let canvas = document.getElementById('canvas');
    let c = canvas.getContext('2d');
    let width = parseInt(document.getElementById('widthCanvas').value);
    
    // Restrict sizes to common HD resolutions
    if (width === 1280 || width === 1920 || width === 2560 || width === 3840) {
      // Calculate height based on 16:9 aspect ratio
      let height = Math.round(width * ASPECT_RATIO);
      
      // Set the canvas dimensions
      canvas.width = width * SCALE_DOWN_FACTOR;
      canvas.height = height * SCALE_DOWN_FACTOR;
      
      // Calculate block size as 1/20th of the scale dimensions and scale down by 50%
      let blockSize = Math.min(width, height) / BLOCK_SCALE_DIVISOR;
      
      // Set/clear error messages when the value is valid
      document.getElementById('errorMsg').innerHTML = "";
      // Output the scale value to the console
      document.getElementById('outputMsg').innerHTML = "Scale set to: " + width + " x " + height + " (Block size: " + blockSize + "px)";
      
      // Load background image
      let imageBackground = new Image();
      imageBackground.src = 'https://samayass.github.io/samayaCSA/images/background.png';
      imageBackground.onload = function() {
        // Clear the canvas before drawing
        c.clearRect(0, 0, canvas.width, canvas.height);
        // Draw the background image on the canvas
        c.drawImage(imageBackground, 0, 0, canvas.width, canvas.height);
        
        // Draw the red blocks on the corners of the canvas
        c.fillStyle = 'red';
        c.fillRect(0, 0, blockSize, blockSize); // Top-left corner
        c.fillRect(canvas.width - blockSize, 0, blockSize, blockSize); // Top-right corner
        c.fillRect(0, canvas.height - blockSize, blockSize, blockSize); // Bottom-left corner
        c.fillRect(canvas.width - blockSize, canvas.height - blockSize, blockSize, blockSize); // Bottom-right corner
      };
    } else {
      // Set/clear output messages when there is an error
      document.getElementById('outputMsg').innerHTML = "";
      // Output an error message to the console
      console.error("Invalid HD resolution:", width);
      // Output an error message to the HTML page
      document.getElementById('errorMsg').innerHTML = "Invalid HD resolution: " + width;
      
      // Clear the canvas
      c.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
</script> 

### Popcorn Hack 3
Try to place a square in every corner.
The results are shown above, with the original code altered.

### Turtle / Fish HW
Make the Turtle and Fish start on screen in different locations (ie Fish Center/Left, Turtle Center/Right)


<br>


# For Loops & Sprites

## MetaData, Class, For Loops
The objective of this article is to enhance your knowledge and understanding of MetaData, Class Definitions, and For-Loops.

**MetaData**: In this article, MetaData contains information about the sprite, including its name, source URL, and orientation details such as the number of rows and columns, header size, padding, and jagged rows.
**Class**: In this context, the canvas and drawing operations are initialized and stored in a class. These are used to output the sprite sheet image and individual frames within the sprite sheet.
  - **constructor**: Initializes the canvas, context, and sprite image.
  - **draw() method**: Uses nested **for-loops** to iterate through the sprite sheet and draw each frame independently on the canvas. It calculates the source and destination coordinates for each frame, taking into account the header and padding.

### Introduction to For Loops
For Loops are commonly used to iterate over data structures, including JavaScript Arrays and Objects. Below is an example of a conventional for loop that iterates over an array of names and displays each name in a paragraph (`<p>`) tag within a designated HTML div.

%%html

<!-- HTML output div -->
<div id="forConventional"></div>

<script>
    var names = ['turtle', 'fish', 'frog', 'penguin'];

    // Conventional for loop with index used to access elements
    for (let i = 0; i < names.length; i++) {

        // Create a p tag for each name and add it to the forConventional div
        const p = document.createElement('p');
        p.innerHTML = names[i];
        document.getElementById('forConventional').appendChild(p);

    }
</script> 

### ForEach Loop
The ForEach loop is another way to iterate over data structures, such as JavaScript Arrays and Objects. Below is an example of a ForEach loop that iterates over an array of coding adventures and displays each adventure in a paragraph (`<p>`) tag within a designated HTML div.

%%html

<!-- HTML output div -->
<div id="forEach"></div>

<script>
    var quest = ['GitHub', 'Terminal', 'Jupyter', 'JavaScript'];

    // ForEach loop to iterate over the array
    for (let adventure of quest) {

        // Create a p tag for each adventure and add it to the forEach div
        const p = document.createElement('p');
        p.innerHTML = adventure;
        document.getElementById('forEach').appendChild(p);

    }
</script>

### 2D array
There is a data structure called **arrays in arrays** or **2D arrays**.  The data structure helps organize the data efficiently and access it using **nested loops**. Each row in the 2D array will represent a category (e.g., GitHub, Terminal), and each column will contain an array of questions and answers for that category.

%%html

<div id="questionsAnswers"></div>

<script>
    // 2D array of questions and answers with titles
    var qaArray = [
        [
            'Player',
            [{ question: 'What should I do here?' }]
        ],
        [
            'NPC',
            [{ answer: 'You should kill the mobs before damaging the final boss.' }]
        ],
        [
            'Player',
            [{ question: 'Could you give me some tips on how to defeat the final boss?' }]
        ],
        [
            'NPC',
            [{ answer: 'Sure! Use a long-range weapon, and shoot the indicated weakspots on him.' }]
        ],
        [
            'Player',
            [{ question: 'Oh no! My health bar is really low! What should I do?'}]
        ],
        [
            'NPC',
            [{ answer: 'Check your inventory for healing items.'}]
        ],
        
        [
            'Player',
            [
                { question: 'Umm.. There are healing items in the game?'}
            ]
            
        ],
        [
            'NPC',
            [
                { answer: 'Yes, of course! Around the map, there are potions and berries which you can use to heal yourself'}
            ]
            
        ],
        [
            'Player',
            [
                { answer: 'Hmm.. I have none. Ooh! I know! Do you have any on you by chance?'}
            ]
            
        ],
        [
            'NPC',
            [
                { answer: 'Let me check... Yes, I do! Here you go!'}
            ]
            
        ],
    ];

    // Nested for loops to display questions and answers with titles
    for (let category of qaArray) {
        // Create an h2 tag for each category title
        const h2 = document.createElement('h3');
        h2.innerHTML = category[0];  // index 0 is the title of the category
        document.getElementById('questionsAnswers').appendChild(h2);

        // Iterate through each question and answer in the category
        for (let qa of category[1]) {  // index 1 is the array of questions and answers
            // Create a p tag for each question and answer
            const p = document.createElement('p');
            if (qa.question) {
                p.innerHTML += `<strong>Q:</strong> ${qa.question}<br>`;
            }
            if (qa.answer) {
                p.innerHTML += `<strong>A:</strong> ${qa.answer}`;
            }
            document.getElementById('questionsAnswers').appendChild(p);
        }
    }
</script>

### Hack #1: Apply Your Own Game Idea
Create new code cells to implement some of the sprite interactions or features you have ideated for your game. This exercise is crucial if you plan to have interactions with a Non-Player Character (NPC). This hack is done above in the given code cell

**Challenge**: Use the concepts of 2D arrays and nested loops to create and display interactions or features for your game. Think about how you can organize and manage different elements, such as NPC dialog, questions, and receiving answers.

## Sprite Files

### Transition to Sprite Files
Now that we have a solid understanding of data structures and loops, we will transition to working with Sprite Files. This section will help you understand how to manage and display sprite images, which are essential for creating animations in your game.

### Sprite Files
Sprite files are essentially a 2D table of sprite images. They contain 2D columnar sequences of pictures that aid in creating animation.

### Display Sprite File
The next code block shows a sprite file. This can be helpful in understanding the properties of your sprite. It contains `console.log` output that shows the sprite properties.
Here are some terms that you will see in the next code block:
- **MetaData**: Data that describes the file
  - **name**: A friendly identifier naming the file
  - **src**: The location of the file
- **drawImage**: A function call that, when used with five parameters, outputs the entirety of the file
- **class**: A coding structure that contains a constructor, data, and method (draw) to read and output a file

%%html

<style>
    #gameCanvas {
        border: 4px solid rgb(102, 4, 4); /* Red border for the canvas */
    }
</style>

<canvas id="gameCanvas" width="521" height="967"></canvas>

<script>
    function defineAndDrawImage() {
        /**
        * Function to define the sprite metadata for Tux the penguin
        * @returns {Object} spriteMetaData - The metadata for the Tux sprite
        */
        function TuxSpriteMetaData() {
            // NPC sprite data (Tux the penguin)
            const isLocal =  window.location.protocol === 'vscode-webview:' | false;
            const baseUrl = isLocal ? '.' : '{{site.baseurl}}';
            console.log(baseUrl);
            const spriteMetaData = {
                name: 'tux',
                src: `${baseUrl}/images/tux.png`,
            };

            return spriteMetaData;
        }

        /**
        * Class to handle the canvas data and drawing of the image file
        */
        class CanvasDrawImage {
            constructor(spriteMetaData) {
                this.INIT_POSITION = { x: 0, y: 0 };
                this.spriteMetaData = spriteMetaData;
                this.canvas = document.getElementById('gameCanvas');
                this.ctx = this.canvas.getContext('2d');
                this.spriteImage = new Image();
                this.spriteImage.src = spriteMetaData.src;
                this.spriteImage.onload = () => this.draw(); // Ensure draw is called after image is loaded
            }

            // Method to draw the sprite on the canvas
            draw() {
                // This is the size of the sprite file, calculated from the PNG file 
                const width = this.spriteImage.width; 
                const height = this.spriteImage.height;

                console.log(`Drawing sprite: ${this.spriteMetaData.name}`);
                console.log(`Sprite Dimensions: ${width}x${height}`);

                this.ctx.drawImage(this.spriteImage, 0, 0, width, height);
            }
        }

        const tux = new CanvasDrawImage(TuxSpriteMetaData());
    }

    // Call the function to define the class and draw the sprite
    defineAndDrawImage();
</script>

### Display Frames in Sprite File
The next code block contains logic to extract frames within the sprite sheet. This is a more practical game enhancement compared to the previous example.
Here are terms to describe key elements in the code:
- **MetaData**: Contains information about the sprite file, including its name, source URL, and orientation details.
  - **orientation**: Describes the layout of the sprite in the PNG file.
    - **header**: Size of the area of description above the sprite.
    - **pad**: Size of the area between the sprites.
    - **jagged**: Indicates that each row can contain a different number of sprites.
- **drawImage**: In the 9-property format, it provides the ability to scale the source into the destination.
- **class**: Continues using the constructor and draw methods for source and output; adds math to abstract each frame independently.
- **for-loops**: Demonstrates nested for loops to process each frame within the 2D sprite sheet.

%%html

<canvas id="spriteCanvas" width="288" height="288"></canvas>
<script>
// Variables for the spritesheet and sprite dimensions
const spritesheetSrc = "https://i.sstatic.net/AjFP5.png"; // Path to the spritesheet
const spritesheetWidth = 256;
const spritesheetHeight = 256;
const spriteWidth = 64;
const spriteHeight = 64;
const totalFrames = 16;
const fps = 10;
// Select the canvas and get context
const canvas = document.getElementById('spriteCanvas');
const ctx = canvas.getContext('2d');
// Load the spritesheet
const spriteSheet = new Image();
spriteSheet.src = spritesheetSrc;
let currentFrame = 0;
// Function to draw the current sprite frame
function drawSprite() {
    // Calculate the column and row of the current frame
    const col = currentFrame % (spritesheetWidth / spriteWidth);  // Total columns
    const row = Math.floor(currentFrame / (spritesheetWidth / spriteWidth)); // Total rows
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw the current sprite on the canvas
    ctx.drawImage(
        spriteSheet,
        col * spriteWidth,                // Source x in the spritesheet
        row * spriteHeight,               // Source y in the spritesheet
        spriteWidth,                      // Width of the sprite
        spriteHeight,                     // Height of the sprite
        0,                                // Destination x on the canvas
        0,                                // Destination y on the canvas
        spriteWidth,                      // Destination width
        spriteHeight                      // Destination height
    );
    // Move to the next frame, looping back to the first after the last one
    currentFrame = (currentFrame + 1) % totalFrames;
}
// Start the animation once the image is loaded
spriteSheet.onload = function() {
    setInterval(drawSprite, 1000 / fps); // Change frame based on FPS
};
</script>

### Hack 2: Display Individual Sprites
Create new code cell(s) to display individual sprites from a sprite sheet. This sprite sheet will potentially be used in your game. (Done Above)

**Challenge**: Use the concepts of 2D arrays, nested loops, and sprite metadata to extract and display individual sprites. Think about how you can manage and display different frames or animations for your game characters or objects.