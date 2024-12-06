const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const plantSounds = document.querySelectorAll(".plantSound");
const levelUpSound = document.getElementById("levelUpSound");

let plants = [];
let score = 0;
let randnum;

document.getElementById('plantBtn').addEventListener('click', () => {
    plantSounds.forEach(sound => {
        if(!sound.paused){
            sound.pause();
            sound.currentTime = 0;
        }
    });
    plantSounds[Math.floor(Math.random() * 3)].play();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    plants.push({ x, y, size: 2.5 });
    drawPlants();
    document.getElementById("scoreText").textContent = ++score;
    if(score % 100 == 0) levelUpSound.play();
});

function drawPlants() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#9e4200';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    plants.forEach(plant => {
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.arc(plant.x, plant.y, plant.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function growPlants() {
    plants.forEach(plant => {
        if (plant.size < 10) {
            plant.size += 0.05;
        }
    });
    drawPlants();
    requestAnimationFrame(growPlants);
}

growPlants();