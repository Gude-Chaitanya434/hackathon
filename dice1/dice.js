const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext('2d');

// Define dot positions
const dotPositions = {
    1: [{ x: 0.5, y: 0.5 }],
    2: [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.75 }
    ],
    3: [
        { x: 0.25, y: 0.25 },
        { x: 0.5, y: 0.5 },
        { x: 0.75, y: 0.75 }
    ],
    4: [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.25 },
        { x: 0.25, y: 0.75 },
        { x: 0.75, y: 0.75 }
    ],
    5: [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.25 },
        { x: 0.5, y: 0.5 },
        { x: 0.25, y: 0.75 },
        { x: 0.75, y: 0.75 }
    ],
    6: [
        { x: 0.25, y: 0.25 },
        { x: 0.75, y: 0.25 },
        { x: 0.25, y: 0.5 },
        { x: 0.75, y: 0.5 },
        { x: 0.25, y: 0.75 },
        { x: 0.75, y: 0.75 }
    ]
};

function drawDice(number) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    const size = canvas.width / 18;
    dotPositions[number].forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x * canvas.width, dot.y * canvas.height, size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    drawDice(randomNumber);
}

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        rollDice();
    }
});

drawDice(1);
