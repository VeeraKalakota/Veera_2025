---
layout: base
title: RPG
permalink: /rpg/
---

<canvas id='gameCanvas'></canvas>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/GameControl.js';

    // Background data
    const image_src = "{{site.baseurl}}/images/rpg/coral_reef.jpg";
    const image_data = {
        pixels: {height: 580, width: 1038}
    };
    const image = {src: image_src, data: image_data};

    // Turtle sprite data
    const turtle_src = "{{site.baseurl}}/images/rpg/turtle.png";
    const turtle_data = {
        SCALE_FACTOR: 10,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 100,
        pixels: {height: 280, width: 256},
        orientation: {rows: 4, columns: 3 },
        down: {row: 0, start: 0, columns: 3 },
        left: {row: 1, start: 0, columns: 3 },
        right: {row: 2, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
    };
    const turtle = {src: turtle_src, data: turtle_data};

    // Seaweed sprite data
    const seaweed_src = "{{site.baseurl}}/images/rpg/Seaweed.png";
    const seaweed_data = {
        SCALE_FACTOR: 10,    
        pixels: { height: 66, width: 59 },
    };
    const seaweed = { src: seaweed_src, data: seaweed_data };

    // Assets for game
    const assets = { image: image, sprite: turtle, seaweed: seaweed};

    // Start game engine
    GameControl.start(assets);
</script>
