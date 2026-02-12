let scale = 1;

// Function to move the No button when hovered
function dodgeOnly() {
    const noBtn = document.getElementById('noBtn');
    // Moves the button randomly within a 200px box
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Function to grow the Yes button and show message when No is clicked
function growYesAndThinkAgain() {
    // 1. Grow the Yes Button
    scale += 0.4;
    document.getElementById('yesBtn').style.transform = `scale(${scale})`;

    // 2. Show the "Think Again" message
    const msg = document.getElementById('thinkAgain');
    msg.style.opacity = "1";
    
    // 3. Dodge again so it moves after the click too
    dodgeOnly();

    // 4. Hide the "Think Again" message after 1.5 seconds
    setTimeout(() => {
        msg.style.opacity = "0";
    }, 1500);
}

// Function to show the final "I love you" modal
function showLove() {
    document.getElementById('customModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
    document.getElementById('customModal').style.display = 'none';
}

// Falling Roses Animation Loop
function createRose() {
    const rose = document.createElement('div');
    rose.innerHTML = '🌹';
    rose.classList.add('rose');
    rose.style.left = Math.random() * 100 + "vw";
    // Random speed between 3 and 6 seconds
    rose.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.getElementById('rose-container').appendChild(rose);
    
    // Cleanup memory by removing the rose after it falls
    setTimeout(() => {
        rose.remove();
    }, 6000);
}

// Create a new rose every 400 milliseconds
setInterval(createRose, 400);