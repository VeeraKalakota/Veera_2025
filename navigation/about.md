---
layout: page
title: About Me (Veera Kalakota)
permalink: /about/
---

Creator of Student 2025
<style>
    /* Style looks pretty compact, 
       - grid-container and grid-item are referenced the code 
    */
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Dynamic columns */
        gap: 10px;
    }
    .grid-item {
        text-align: center;
    }
    .grid-item img {
        width: 100%;
        height: 100px; /* Fixed height for uniformity */
        object-fit: contain; /* Ensure the image fits within the fixed height */
    }
    .grid-item p {
        margin: 5px 0; /* Add some margin for spacing */
    }

    .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }

    .image-gallery img {
        max-height: 150px;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

<!-- This grid_container class is for the CSS styling, the id is for JavaScript connection -->
<div class="grid-container" id="grid_container">
    <!-- content will be added here by JavaScript -->
</div>

<script>
    // 1. Make a connection to the HTML container defined in the HTML div
    var container = document.getElementById("grid_container"); // This container connects to the HTML div

    // 2. Define a JavaScript object for our http source and our data rows for the Living in the World grid
    var http_source = "https://upload.wikimedia.org/wikipedia/commons/";
    var origin_country = [
        {"flag": "0/01/Flag_of_California.svg","description": "My parents are from India, but immigrated here. I was born in               California, as well as my 11 year old brother."}, 
        {"flag": "0/0c/Heads_of_badminton_raquets.jpg",
         "description": "One of my favorite hobbies is playing badminton."},
        {"flag": "4/4b/Cute_yorkier_puppies_ready_for_new_home_._2_boys_left_and_two_girls_.It_will_be_up_to_the_new_puppies.jpg",
         "description": "If I were to have a pet, I would have a medium-sized puppy. I am a huge fan of dogs. Woof!"},
        {"flag": "d/d5/Thai_Prawn_Noodles_%2822154724644%29.jpg",
         "description": "I like Thai and Chinese cuisine, but my mom's cooking beats them all, hands down."}
    ];  
    // 3a. Consider how to update style count for size of container
    // The grid-template-columns has been defined as dynamic with auto-fill and minmax

    // 3b. Build grid items inside of our container for each row of data
    for (const location of origin_country) {
        // Create a "div" with "class grid-item" for each row
        var gridItem = document.createElement("div");
        gridItem.className = "grid-item";  // This class name connects the gridItem to the CSS style elements
        // Add "img" HTML tag for the flag
        var img = document.createElement("img");
        img.src = http_source + location.flag; // concatenate the source and flag
        img.alt = location.flag + "Flag"; // add alt text for accessibility
        
        // Add "p" HTML tag for the description
        var description = document.createElement("p");
        description.textContent = location.description; // extract the description

        // Add "p" HTML tag for the greeting
        var greeting = document.createElement("p");
        greeting.textContent = location.greeting;  // extract the greeting

        // Append img and p HTML tags to the grid item DIV
        gridItem.appendChild(img);
        gridItem.appendChild(description);
        gridItem.appendChild(greeting);

        // Append the grid item DIV to the container DIV
        container.appendChild(gridItem);
    }
</script>

## My Journey Through Life
- Went to Monterey Ridge Elementary School
- Transition to middle school was difficult for me
    - So many new changes...
- Going into high school, I was scared
    - New faces, new teachers, different schedules
    - Overall, it wasn't that bad. Teachers helped me, made new friends, and quickly adapted to schedule changes.

## Culture, Family, and More
- Family originated from India, but parents immigrated here for college
- Me and my brother were both born here and raised in California
- I like to play badminton, stay healthy, and have fun with peers and family members

I took this class because I wanted to explore new fields. For me, I was told that I was a natural leader, and very good at picking up things that I liked. These included fields like sports, math, and science. Other subjects were challeging, but managed to pick them up and embrace them. Stepping in to high school, I did not have a single clue on how to code. Because of Mr. Mortensen and my friends, I am able to enjoy a topic that I had never even considered. 

<comment>
Gallery of Pics, scroll to the right for more ...
</comment>
<div class="image-gallery">
  <img src="images/about/FAMILY.JPG" alt="Image 1"/>
  <img src="{{site.baseurl}}/images/about/FAMILY.jpg" alt="Image 2">
  <img src="{{site.baseurl}}/images/about/download.jpg" alt="Image 3">
</div>
