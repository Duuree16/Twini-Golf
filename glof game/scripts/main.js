const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let aliveBalls = 2
let currentLevel = 1

canvas.width = 600
canvas.height = 400

const ball = new Ball(150, 300, 0, 300);
const ball2 = new Ball(canvas.width / 2 + 150, 300, 300, 600);
const hole = new Hole(150, 360)
const hole2 = new Hole(450, 150)

let firstX = 0
let firstY = 0

function animate() {
    ctx.clearRect(0, 0, 600, 400)
    requestAnimationFrame(animate)
    hole.draw();
    hole2.draw();
    ball.update();
    ball2.update();
    holeCheck()

    if (aliveBalls == 0) {
        currentLevel++
    }
}

animate()

addEventListener("mousedown", (e) => {
    firstX = e.x
    firstY = e.y
})

addEventListener("mouseup", (e) => {
    const angle = Math.atan2(
        e.x - firstX,
        e.y - firstY
    );
    let dist = Math.hypot(firstX - e.x, firstY - e.y);
    ball.vy = Math.cos(angle) * dist / 16
    ball.vx = Math.sin(angle) * dist / 16
    ball2.vy = Math.cos(angle) * dist / 16
    ball2.vx = Math.sin(angle) * dist / 16
})


function holeCheck() {
    if (ball.x >= hole.x - hole.radius && ball.y >= hole.y - hole.radius && ball.x + ball.radius <= hole.x + hole.radius && ball.y + ball.radius <= hole.y + hole.radius) {
        ball.eaten = true
    }
    if (ball2.x >= hole2.x - hole2.radius && ball2.y >= hole2.y - hole2.radius && ball2.x + ball2.radius <= hole2.x + hole2.radius && ball2.y + ball2.radius <= hole2.y + hole2.radius) {
        ball2.eaten = true
    }
}