import { Effect } from "./canvasEffect";

interface MouseAttributes {
  x: number|undefined;
  y: number|undefined;
  radius: number;
}

interface IParticle {
  effect: Effect;
  draw(ctx: CanvasRenderingContext2D): void;
  update(): void;
  warp(): void;
}

class Particle implements IParticle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  effect: Effect;
  ease: number;
  friction: number;
  originX: number;
  originY: number;
  color: string;
  dx: number;
  dy: number;
  distance: number;
  force: number;
  angle: number;

  // constructor(x: number, y: number, mouse: MouseAttributes, rgb: string) {
  constructor(effect: Effect, x: number, y: number, color: string) {
    this.effect = effect;
    this.x = Math.random() * this.effect.width;
    this.y = Math.random() * this.effect.height;
    this.size = this.effect.gap; // -1 to get a grid effect
    this.vx = 0; //Math.random() * 2 - 1;
    this.vy = 0; //Math.random() * 2 - 1;
    this.ease = 0.2;
    this.friction = 0.95;
    this.originX = Math.floor(x);
    this.originY = Math.floor(y);
    this.color = color;
    this.dx = 0;
    this.dy = 0;
    this.distance = 0;
    this.force = 0;
    this.angle = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color ;
    ctx.fillRect(this.x, this.y, this.size, this.size)
  }

  update() {
    //console.log(`mouse:(${this.effect.mouse.x}, ${this.effect.mouse.y})`);
    if (this.effect.mouse.x && this.effect.mouse.y) {
      this.dx = this.effect.mouse.x - this.x;
      this.dy = this.effect.mouse.y - this.y;
      this.distance = this.dx * this.dx + this.dy * this.dy;
      this.force = -this.effect.mouse.radius / this.distance;

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx) // Returns a numeric value in radians between -Pi and +Pi, basically "theta" angle between a point (x,y) and the x axis
        this.vx = this.force * Math.cos(this.angle);
        this.vy = this.force * Math.sin(this.angle);
      }
    }
    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease; //this.vx;
    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease; //this.vy;
  }

  warp() {
    this.x += -Math.random() * this.effect.width; //this.vx;
    this.y += -Math.random() * this.effect.height; //this.vy;
  }
}

export { Particle, type IParticle, type MouseAttributes };
