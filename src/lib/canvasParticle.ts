interface MouseAttributes {
  x: number;
  y: number;
  radius: number;
}

interface IParticle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  ctx: CanvasRenderingContext2D;
  mouse: MouseAttributes;
  draw(): void;
  update(): void;
}

class Particle implements IParticle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  ctx: CanvasRenderingContext2D;
  mouse: MouseAttributes;
  rgb: string;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D, mouse: MouseAttributes, rgb: string) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
    this.ctx = ctx;
    this.mouse = mouse;
    this.rgb = rgb;
  }

  draw() {
    this.ctx.fillStyle = this.rgb;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  update() {
    let dx = this.mouse.x - this.x;
    let dy = this.mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = this.mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < this.mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

export { Particle, type IParticle, type MouseAttributes };
