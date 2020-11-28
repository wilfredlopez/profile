interface VelosityInterface {
  x: number
  y: number
}
export interface ParticlePros {
  x: number
  y: number
  radius: number
  color: string
  velocity: VelosityInterface
  ctx: CanvasRenderingContext2D
}

const GRAVITY = 0.005
const FRICTION = 0.99

const MAX_VELOCITY = 5

export default class Particle implements ParticlePros {
  x: number
  y: number
  radius: number
  color: string
  ctx: CanvasRenderingContext2D
  velocity: VelosityInterface
  alpha: number
  constructor({ color, radius, velocity, x, y, ctx }: ParticlePros) {
    this.color = color
    this.radius = radius
    this.velocity = velocity
    this.x = x
    this.y = y
    this.ctx = ctx
    this.alpha = 1
  }

  draw() {
    if (this.alpha <= 0) {
      return
    }
    const c = this.ctx
    c.save()
    c.globalAlpha = this.alpha
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
    c.restore()
  }
  update() {
    this.draw()
    this.velocity.y += GRAVITY
    this.velocity.y *= FRICTION
    this.velocity.x *= FRICTION
    this.x += this.velocity.x
    this.y += this.velocity.y
    this.alpha -= 0.005
    if (this.velocity.x > MAX_VELOCITY) {
      this.velocity.x = GRAVITY
    }
    if (this.velocity.y > MAX_VELOCITY) {
      this.velocity.y = FRICTION
    }
  }
}
