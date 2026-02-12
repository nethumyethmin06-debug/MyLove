// Initialize scale variable
let currentScale = 1;

function dodgeOnly() {
    const noBtn = document.getElementById('noBtn');
    const range = window.innerWidth < 600 ? 70 : 130;
    
    // Calculate new position
    const x = Math.random() * (range * 2) - range;
    const y = Math.random() * (range * 2) - range;
    
    // Apply transform
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function growYesAndThinkAgain() {
    // 1. SELECT ELEMENTS
    const yesBtn = document.getElementById('yesBtn');
    const msg = document.getElementById('thinkAgain');

    // 2. INCREASE SCALE
    currentScale += 0.4;
    yesBtn.style.transform = `scale(${currentScale})`;
    
    // 3. SHOW TEXT (Using Opacity)
    msg.style.opacity = "1";
    
    // 4. MOVE NO BUTTON
    dodgeOnly();
    
    // 5. HIDE TEXT AFTER DELAY
    setTimeout(() => { 
        msg.style.opacity = "0";
    }, 1200);
}

function showLove() {
    document.getElementById('customModal').style.display = 'flex';
    
    // Confetti
    confetti({ 
        particleCount: 150, 
        spread: 80, 
        origin: { y: 0.6 }, 
        zIndex: 1200,
        colors: ['#ff4d6d', '#ff0a54', '#ff7096', '#ffd700'] 
    });
    
    // Email
    const form = document.getElementById('valentineForm');
    fetch(form.action, { 
        method: 'POST', 
        body: new FormData(form), 
        headers: { 'Accept': 'application/json' } 
    });
}

function closeModal() { 
    document.getElementById('customModal').style.display = 'none'; 
}

// Falling Roses
function createRose() {
    const container = document.getElementById('rose-container');
    if(!container) return;
    const rose = document.createElement('div');
    rose.innerHTML = Math.random() > 0.5 ? '🌹' : '💖';
    rose.classList.add('rose');
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 2 + 3 + "s";
    container.appendChild(rose);
    setTimeout(() => { rose.remove(); }, 5000);
}
setInterval(createRose, 500);
