import { Particle, IParticle, MouseAttributes } from "../lib/canvasImageParticle";

class Effect {
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  x: number;
  y: number;
  particleArray: IParticle[];
  image: HTMLImageElement;
  gap: number;
  mouse: MouseAttributes;
  handleMouseMove: any;

  constructor(left: number, top: number, width: number, height: number, image: HTMLImageElement, gap: number = 4) {
    this.width = width;
    this.height = height;
    this.particleArray = [];
    this.image = image;
    this.centerX = this.width * 0.5;
    this.centerY = this.height * 0.5;
    this.x = this.centerX - this.image.width * 0.5;
    this.y = this.centerY - this.image.height * 0.5;
    this.gap = gap;
    this.mouse = {
      x: undefined,
      y: undefined,
      radius: 4000
    }
    this.handleMouseMove = (event: MouseEvent) => {
      this.mouse.x = event.x - left;
      this.mouse.y = event.y - top;
      //console.log(`mouse:(${this.mouse.x}, ${this.mouse.y})`);
    };
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  init(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x, this.y);
    const context2dSettings = { willReadFrequently: true } as ImageDataSettings
    const pixels = ctx.getImageData(0, 0, this.width, this.height, context2dSettings).data;
    for (let y = 0; y < this.height; y += this.gap) {
      for (let x = 0; x < this.width; x += this.gap) {
        const index = (y * this.width + x) * 4;
        const red = pixels[index];
        const green = pixels[index+1];
        const blue = pixels[index+2];
        const alpha = pixels[index+3];
        const color = `rgb(${red},${green},${blue})`;

        if (alpha > 0) { 
          // if the pixel is not fully transparent
          this.particleArray.push(new Particle(this, x, y, color));
        }
      }
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.particleArray.forEach(particle => particle.draw(ctx));
  }

  update() {
    this.particleArray.forEach(particle => particle.update());
  }

  warp() {
    this.particleArray.forEach(particle => particle.warp());
  }

  dismiss() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
}

export { Effect };