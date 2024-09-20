---
layout: base 
title: Ideas
search_exclude: true
permalink: /ideas
---

{% include nav/home.html %}

%%javascript

var compsci_joke_list = [
    { joke: "Why do programmers prefer dark mode? Because light attracts bugs.", complexity: "O(1)" },
    { joke: "Why do Java developers wear glasses? Because they don't see sharp.", complexity: "O(1)" },
    { joke: "How many programmers does it take to change a light bulb? None, that's a hardware problem.", complexity: "O(1)" },
    { joke: "Why do programmers hate nature? It has too many bugs.", complexity: "O(n)" },
    { joke: "Why do Python programmers prefer snake_case? Because they can't C.", complexity: "O(1)" },
    { joke: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.", complexity: "O(1)" },
    { joke: "Why do programmers always mix up Christmas and Halloween? Because Oct 31 == Dec 25.", complexity: "O(1)" },
    { joke: "Why did the programmer quit his job? Because he didn't get arrays.", complexity: "O(n)" },
    { joke: "Why do programmers prefer using the terminal? Because they don't like Windows.", complexity: "O(1)" },
    { joke: "Why was the function sad after a breakup? It couldn't find its closure.", complexity: "O(1)" }
];
var randomIndex = Math.floor(Math.random() * compsci_joke_list.length);
var selectedJoke = compsci_joke_list[randomIndex];
console.log("Joke #" + (randomIndex + 1) + ": " + selectedJoke.joke + " (Complexity: " + selectedJoke.complexity + ")");
