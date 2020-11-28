import Particle from './Particle'

function getRandomHslColor() {
  return `hsl(${Math.random() * 360}, 50%, 50%)`
}

interface ParticleMachineProps {
  ctx: CanvasRenderingContext2D
  autoOn?: boolean
  MAX_PARTICLES?: number
  MIN_PARTICLES?: number
  POWER?: number
  RADIUS?: number
  backgroundColor?: string
}

interface StartLocation {
  x: number
  y: number
}

export default class ParticleMachine {
  private _PARTICLES: Particle[]
  private _ANIMATION_ON: boolean
  ctx: CanvasRenderingContext2D
  private _CANVAS_WIDTH: number
  private _CANVAS_HEIGT: number
  MAX_PARTICLES: number
  MIN_PARTICLES: number
  POWER: number
  RADIUS: number
  backgroundColor: string
  private _frameId: number | undefined
  constructor({
    ctx,
    MAX_PARTICLES = 400,
    MIN_PARTICLES = 100,
    POWER = 5,
    RADIUS = 3,
    autoOn = true,
    backgroundColor = 'rgba(0,0,0,0.05)',
  }: ParticleMachineProps) {
    this._PARTICLES = []
    this.ctx = ctx
    this._CANVAS_WIDTH = ctx.canvas.width
    this._CANVAS_HEIGT = ctx.canvas.height
    this.POWER = POWER
    this.RADIUS = RADIUS
    this._ANIMATION_ON = autoOn
    this.backgroundColor = backgroundColor
    this.MAX_PARTICLES = MAX_PARTICLES
    this.MIN_PARTICLES = MIN_PARTICLES
    if (this.MAX_PARTICLES <= this.MIN_PARTICLES) {
      this.MIN_PARTICLES = Math.round(this.MAX_PARTICLES / 2)
    }
  }

  get PARTICLES() {
    const Copy = this._PARTICLES.map(p => new Particle({ ...p }))
    return Copy
  }

  public stopAnimate() {
    this._ANIMATION_ON = false
  }

  public animate(location?: StartLocation) {
    this._ANIMATION_ON = true
    const ctx = this.ctx
    if (typeof this._frameId !== 'undefined') {
      cancelAnimationFrame(this._frameId)
    }
    let id = this._frameId
    if (location) {
      //   this._PARTICLES = [] as Particle[]
      this._createParticles(location)
      //   this.stopAnimate()

      //   this.animate()
      //   return
    }
    const loop = () => {
      if (typeof id !== 'undefined') {
        cancelAnimationFrame(id)
      }
      if (!this._ANIMATION_ON) {
        return
      }
      this._frameId = requestAnimationFrame(loop)
      id = this._frameId
      ctx.fillStyle = this.backgroundColor //'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
      for (let [index, particle] of this._PARTICLES.entries()) {
        if (particle.alpha <= 0) {
          this._PARTICLES.splice(index, 1)
        }
        particle.update()
      }
      this._autoGenerate()
    }
    loop()
  }

  private _autoGenerate() {
    if (this._PARTICLES.length < this.MIN_PARTICLES) {
      this._createParticles()
    }
  }

  private _getVelocity(i: number) {
    const angleIncrement = (Math.PI * 2) / this.MAX_PARTICLES
    return {
      x: Math.cos(angleIncrement * i) * Math.random() * this.POWER,
      y: Math.sin(angleIncrement * i) * Math.random() * this.POWER,
    }
  }

  private _createParticles(location?: { x: number; y: number }) {
    const MAX_PARTICLES = this.MAX_PARTICLES
    let x = (this._CANVAS_WIDTH / 2) * Math.random()
    let y = (this._CANVAS_HEIGT / 2) * Math.random()
    if (location) {
      x = location.x
      y = location.y
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
      this._PARTICLES.push(
        new Particle({
          color: getRandomHslColor(),
          ctx: this.ctx,
          radius: this.RADIUS,
          velocity: this._getVelocity(i),
          x,
          y,
        })
      )
    }
  }
}
