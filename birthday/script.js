// script.js
const container = document.querySelector('.confetti-container');
for (let i = 0; i < 150; i++) { // Adjust the number of confetti pieces for density
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`; // Random horizontal position
    confetti.style.width = `${Math.random() * 12 + 8}px`; // Random size between 8-20px
    confetti.style.height = confetti.style.width; // Make it a square
    confetti.style.animationDelay = `${Math.random() * 5}s`; // Random start delay
    confetti.style.animationDuration = `${Math.random() * 3 + 3}s`; // Random fall duration
    container.appendChild(confetti);
}

