---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<!-- <div id="questionAnswers" style="padding: 20px; background-color: #f9f9f9: border: 1px solid #ccc; margin-top: 20px;">
</div> -->

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/forest.jpg";
    const image_data = {
        pixels: {height: 129, width: 330}
    };
    const image = {src: image_src, data: image_data};

    // Turtle sprite data
    const turtle_src = "{{site.baseurl}}/images/pokemon.png";
    const fish_src = "{{site.baseurl}}/images/trainer.png";
    const turtle_data = {
        SCALE_FACTOR: 8,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 100,
        pixels: {height: 1470, width: 1421},
        orientation: {rows: 4, columns: 4 },
        down: {row: 0, start: 0, columns: 4 },
        left: {row: 1, start: 0, columns: 4 },
        right: {row: 2, start: 0, columns: 4 },
        up: {row: 3, start: 0, columns: 4 },
    };
    const fish_data = {
        SCALE_FACTOR: 8,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 100,
        pixels: {height: 256, width: 256},
        orientation: {rows: 4, columns: 4 },
        down: {row: 0, start: 0, columns: 4 },
        left: {row: 1, start: 0, columns: 4 },
        right: {row: 2, start: 0, columns: 4 },
        up: {row: 3, start: 0, columns: 4 },
    };

    const sprite = {src: turtle_src, data: turtle_data};
    const sprite2 = {src: fish_src, data: fish_data};

    // Seaweed sprite data
    const seaweed_src = "{{site.baseurl}}/images/berry.png";
    const seaweed_data = {
        SCALE_FACTOR: 10,    
        pixels: { height: 160, width: 160 },
    };
    const seaweed = { src: seaweed_src, data: seaweed_data };


    // Assets for game
    const assets = { image: image, sprite: sprite, sprite2: sprite2, seaweed: seaweed};
     // Fullscreen toggle function
    function toggleFullScreen() {
        const canvas = document.getElementById('gameCanvas');
        if (!document.fullscreenElement) {
            if (canvas.requestFullscreen) {
                canvas.requestFullscreen();
            } else if (canvas.mozRequestFullScreen) { // Firefox
                canvas.mozRequestFullScreen();
            } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                canvas.webkitRequestFullscreen();
            } else if (canvas.msRequestFullscreen) { // IE/Edge
                canvas.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    }

    // Optionally add a button to toggle full-screen mode
    const canvas = document.getElementById('gameCanvas');
    canvas.addEventListener('click', toggleFullScreen); // Click to enter full-screen
    // Start game engine
    GameControl.start(assets);
</script>
