import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
// import { MouseAttributes } from "../lib/canvasImageParticle";
import { Effect } from "../lib/canvasEffect";

const StyledCanvasContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCanvasTitle = styled.canvas`
  z-index: 0;
`;

// interface Props {
//   src: string;
// }

export default function LogoCanvas() {
  const refImage = useRef<HTMLImageElement>(null);
  let backImage: HTMLImageElement|null;
  // const [backImage, setBackImage] = useState(refImage.current);
  const refCanvas = useRef<HTMLCanvasElement>(null);
  // let canvas: HTMLCanvasElement | null = null;
  const [canvas, setCanvas] = useState(refCanvas.current);
  
  let canvasEffect: Effect | null;
  // const [canvasEffect, setCanvasEffect] = useState<Effect>();
  let ctx: CanvasRenderingContext2D|null;

  useEffect(() => {
    setTimeout(() => {
      initializeCanvas()
      animate()
      return () => {
        setCanvas(null);
        if (canvasEffect) {
          window.removeEventListener("mousemove", canvasEffect.dismiss);
          canvasEffect = null;
        }
      }
    }, 100)

    // return () => window.removeEventListener("mousemove", handleMouseMove);
  
  }, [canvas]);

  const initializeCanvas = (): void => {
    console.log('initializeCanvas');
    setCanvas(refCanvas.current);
    console.log('- canvas', canvas);
    // canvas = refCanvas.current;
    if (!canvas) return
    ctx = canvas.getContext("2d");
    console.log('- context', ctx);
    if (!ctx) return


    // let particleArray: IParticle[] = [];

    // const backImage = new Image();
    // const backImage = document.getElementById('logo') as HTMLImageElement;
    backImage = refImage.current;
    // setBackImage(refImage.current);
    console.log('- backImage', backImage);
    if (!backImage) return;

    // ctx.fillStyle = "white";
    // ctx.font = "9px Verdana";
    // ctx.drawImage(backImage, 0, 0, canvas.width/5, canvas.height/5);

    //ctx.strokeStyle = "white";
    //ctx.strokeRect(0, 0, 200, 100);
    // const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, canvas.width, canvas.height);

    // const mouse: MouseAttributes = {
    //   x: 0,
    //   y: 0,
    //   radius: 3000
    // };

    // const handleMouseMove = (event: MouseEvent) => {
    //   const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
    //   mouse.x = event.x - canvasX;
    //   mouse.y = event.y - canvasY;
    //   console.log(`mouse:(${mouse.x}, ${mouse.y}`, canvasX, canvasY);
    // };

    // window.addEventListener("mousemove", handleMouseMove);

    // function initArrayOld() {
    //   if (!ctx) return
    //   particleArray = [];
    //   let adjustX = 1;
    //   let adjustY = 3;

    //   for (let y = 0, y2 = pixels.height; y < y2; y++) {
    //     for (let x = 0, x2 = pixels.width; x < x2; x++) {
    //       const rgb = pixels.data[y * 4 * pixels.width + x * 4 + 3];
    //       //if (x==0 && y==0) console.log('pixels', pixels.data)
    //       let positionX = x + adjustX;
    //       let positionY = y + adjustY;
    //       particleArray.push(
    //         new Particle(positionX * 5, positionY * 5, ctx, mouse, rgb)
    //       );
    //     }
    //   }
    // }

    // function calculateRelativeBrightness(red: number, green: number, blue: number) {
    //   return (
    //     Math.sqrt(
    //       red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
    //     ) / 100
    //   );
    // }

    // function initArrayImage() {
    //   if (!ctx) return
    //   particleArray = [];
    //   let adjustX = 0;
    //   let adjustY = 0;

    //   for (let y = 0, y2 = pixels.height; y < y2; y++) {
    //     for (let x = 0, x2 = pixels.width; x < x2; x++) {
    //       const red = 255 - pixels.data[y * 4 * pixels.width + x * 4];
    //       const green = 255 - pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
    //       const blue = 255 - pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
    //       // const brightness = calculateRelativeBrightness(red, green, blue);
    //       const rgb = "rgb(" + red + "," + green + "," + blue + ")";

    //       let positionX = x + adjustX;
    //       let positionY = y + adjustY;
    //       particleArray.push(
    //         new Particle(positionX * 5, positionY * 5, mouse, rgb)
    //       );
    //     }
    //   }
    // }

    // function initArray(canvas: HTMLCanvasElement) {
    //   if (!ctx) return;
    //   particleArray = [];
    //   let mappedImage = [];
    //   for (let y = 0; y < canvas.height; y++) {
    //     let row = [];
    //     for (let x = 0; x < canvas.width; x++) {
    //       const red = 255 - pixels.data[y * 4 * pixels.width + x * 4];
    //       const green = 255 - pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
    //       const blue = 255 - pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
    //       const brightness = calculateRelativeBrightness(red, green, blue);
    //       const cell = [brightness, "rgb(" + red + "," + green + "," + blue + ")"];
    //       row.push(cell);
    //     }
    //     mappedImage.push(row);
    //   }
    // }
    // initArrayImage();

    // const effect = new Effect(canvas.width, canvas.height, backImage);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
    canvasEffect = new Effect(canvasX, canvasY, canvas.width, canvas.height, backImage);
    // const localCanvasEffect = new Effect(canvas.width, canvas.height, backImage);
    // setCanvasEffect(new Effect(canvas.width, canvas.height, backImage));
    console.log('- canvasEffect', canvasEffect);
    if (!canvasEffect) return;
    canvasEffect.init(ctx);
    //console.log(canvasEffect);
  }

  const animate = () => {
    // if (!ctx || !canvas) return
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // for (let i = 0; i < particleArray.length; i++) {
    //   particleArray[i].draw(ctx);
    //   particleArray[i].update();
    // }
    if (!canvas || !ctx || !canvasEffect) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasEffect.draw(ctx as CanvasRenderingContext2D);
    canvasEffect.update();
    requestAnimationFrame(animate);
  }

  const warp = () => {
    console.log('warp...', canvasEffect);
    if (!canvasEffect) return;
    // const canvas = refCanvas.current;
    // if (!canvas) return
    // const backImage =refImage.current;
    // if (!backImage) return
    // const canvasEffect = new Effect(canvas.width, canvas.height, backImage);
    canvasEffect.warp();
  }

  return (
    <StyledCanvasContainer>
      <img id="logo" src="home_lite.jpg" alt="Portrait" style={{display: 'none'}} ref={refImage} />
      <StyledCanvasTitle ref={refCanvas} width="400" height="500" onClick={warp} />
    </StyledCanvasContainer>
  );
}
