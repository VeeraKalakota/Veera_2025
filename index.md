---
layout: base
title: Course Descriptions
description: An overview of Computer Science pathway at Del Norte High School
author: Veera
image: /images/mario_animation.png
hide: true
---
<style>
.button {
float: right;
} 
</style>
<a class ="button" href ="https://veerakalakota.github.io/Veera_2025/about/">
<button> Click this to learn about me</button>
</a>
<!-- Liquid:  statements -->

<!-- Include submenu from _includes to top of pages -->
{% include nav/home.html %}
<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.2 * scale})`;
    mario.startResting();
  });

</script>

# Home
This blog contains my journey into Coding.

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/home" style="text-decoration: none;">
        <div class="button" style="background-color: #007bff; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Student Home
        </div>
    </a>

    <a href="{{site.baseurl}}/about" style="text-decoration: none;">
        <div class="button" style="background-color: #28a745; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            About Me
        </div>
    </a>

    <a href="{{site.baseurl}}/codingjourney" style="text-decoration: none;">
        <div class="button" style="background-color: #dc3545; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Coding
        </div>
    </a>

</div>

<br>

## Game Progress
> Here is my progress through game coding, click to see these online

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="{{site.baseurl}}/rpg" style="text-decoration: none;">
        <div class="button" style="background-color: #8e44ad; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            RPG
        </div>
    </a>
    <a href="{{site.baseurl}}/snake" style="text-decoration: none;">
        <div class="button" style="background-color: #2ecc71; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Snake
        </div>
    </a>
    <a href="https://nighthawkcoders.github.io/portfolio_2025/rpg/latest" style="text-decoration: none;">
        <div class="button" style="background-color: #f1c40f; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            RPG Latest
        </div>
    </a>
    <a href="{{site.baseurl}}/tictactoe" style="text-decoration: none;">
        <div class="button" style="background-color: #f1c40f; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Tic-Tac-Toe
        </div>
    </a>
</div>

<br>

## Jupyter Notebooks
> Here is my preparation for my Sprint objectives, click to review all hacks

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
    <a href="https://github.com/VeeraKalakota/Veera_2025/tree/main/_notebooks/Foundation/Sprint1" style="text-decoration: none;">
        <div class="button" style="background-color: #f1c40f; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Sprint 1
        </div>
    </a>
    <a href="https://github.com/VeeraKalakota/Veera_2025/tree/main/_notebooks/Foundation/Sprint2" style="text-decoration: none;">
        <div class="button" style="background-color: #d35400; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Sprint 2
        </div>
    </a>
    <a href="https://github.com/VeeraKalakota/Veera_2025/tree/main/_notebooks/Foundation/Sprint3" style="text-decoration: none;">
        <div class="button" style="background-color: #38a0b5; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Sprint 3
        </div>
    </a>
    <a href="https://github.com/VeeraKalakota/Veera_2025/tree/main/_notebooks/Foundation/Sprint4" style="text-decoration: none;">
        <div class="button" style="background-color: #fc77f6; color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Sprint 4
        </div>
    </a>
        <a href="https://github.com/VeeraKalakota/Veera_2025/tree/main/N@tM-FinalBlogs/CSSE2/CSSE2-Journal.md" style="text-decoration: none;">
        <div class="button" style="background-color:rgb(21, 113, 139); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; transition: transform 0.3s;">
            Sprint 6
        </div>
    </a>
</div>

<style>
  /* Apply hover effect on the button to scale it */
  .button:hover {
    transform: scale(1.2); /* Increase size by 20% */
  }

  /* Ensure buttons in the Home section are aligned side by side */
  .button {
    display: inline-block; /* Make the buttons inline elements */
  }
</style>

<!-- from https://github.com/utterance/utterances -->
<script src="https://utteranc.es/client.js"
        repo="{{ site.github_username }}/{{ site.github_repo | default: site.baseurl | remove: "/" }}"
        issue-term="title"
        label="blogpost-comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>