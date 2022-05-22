class Ball {
    constructor(x, y, sx, ex) {
        this.x = x
        this.y = y
        this.radius = 12
        this.color = '#ffffff'
        this.vy = 0
        this.vx = 0
        this.sx = sx
        this.ex = ex
        this.eaten = false
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.eaten) {

            if (this.radius > 0.5) {
                this.vx *= 0.5
                this.vy *= 0.5
                this.radius -= 0.3

            } else {
                aliveBalls--
            }
        }
        this.x += this.vx
        this.y += this.vy

        if (this.radius > 1) {

            this.draw()
        }
        if (this.x - this.radius < this.sx || this.x + this.radius > this.ex) this.vx *= -1
        if (this.y - this.radius < 0 || this.y + this.radius > 400) this.vy *= -1
        this.vy *= 0.95
        this.vx *= 0.95
    }
}

class Hole {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 18
        this.color = 'black'
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}