let scale = 1;

function dodgeOnly() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function growYesAndThinkAgain() {
    scale += 0.4;
    document.getElementById('yesBtn').style.transform = `scale(${scale})`;
    const msg = document.getElementById('thinkAgain');
    msg.style.opacity = "1";
    dodgeOnly();
    setTimeout(() => { msg.style.opacity = "0"; }, 1500);
}

function showLove() {
    document.getElementById('customModal').style.display = 'flex';
    
    // Trigger Formspree email
    const form = document.getElementById('valentineForm');
    const data = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });
}

function closeModal() { document.getElementById('customModal').style.display = 'none'; }

function createRose() {
    const rose = document.createElement('div');
    rose.innerHTML = Math.random() > 0.5 ? '🌹' : '💖';
    rose.classList.add('rose');
    rose.style.left = Math.random() * 100 + "vw";
    rose.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.getElementById('rose-container').appendChild(rose);
    setTimeout(() => { rose.remove(); }, 6000);
}
setInterval(createRose, 400);
