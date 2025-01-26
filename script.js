// script.js

// Part 2: JavaScript Functions

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function demonstrating local vs. global scope
let globalVariable = "I am global";

function scopeDemo() {
    let localVariable = "I am local";
    console.log(globalVariable); // Accessing global variable
    console.log(localVariable); // Accessing local variable
}

// Function to toggle a CSS class for animations
function toggleAnimation(element) {
    element.classList.toggle("animated-banner");
}

// Example usage
console.log(calculateArea(5, 10)); // Outputs: 50
scopeDemo(); // Outputs: I am global and I am local
