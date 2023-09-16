import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Effect } from "../lib/canvasEffect";

const StyledCanvasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  margin: 0 auto;
  text-align: center;
`;

const StyledCanvasTitle = styled.canvas`
  z-index: 0;
`;

const StyledButton = styled.button`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`

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
  const gaps = {
    '8bit': 5,
    '16bit': 3
  }
  const [gap, setGap] = useState(gaps['8bit']);

  useEffect(() => {
    setTimeout(() => {
      initializeCanvas()
      animate()
    }, 300)

    return () => { 
      canvasEffect?.dismiss
      canvasEffect = null;
    }
  
  }, [canvas, gap]);

  const initializeCanvas = (): void => {
    console.log('initializeCanvas');
    setCanvas(refCanvas.current);
    console.log('- canvas', canvas);
    // canvas = refCanvas.current;
    if (!canvas) return
    ctx = canvas.getContext("2d");
    console.log('- context', ctx);
    if (!ctx) return

    backImage = refImage.current;
    console.log('- backImage', backImage);
    if (!backImage) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
    canvasEffect = new Effect(canvasX, canvasY, canvas.width, canvas.height, backImage, gap);

    console.log('- canvasEffect', canvasEffect);
    if (!canvasEffect) return;
    canvasEffect.init(ctx);
    //console.log(canvasEffect);
  }

  const animate = () => {
    if (!canvas || !ctx || !canvasEffect) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasEffect.draw(ctx as CanvasRenderingContext2D);
    canvasEffect.update();
    requestAnimationFrame(animate);
  }

  const warp = () => {
    console.log('warp...', canvasEffect);
    if (!canvasEffect) return;
    canvasEffect.warp();
  }

  return (
    <StyledCanvasContainer>
      <div className="ctrl-panel">
        <StyledButton className={`btn ${gap === gaps['8bit'] ? 'selected' : ''}`} onClick={() => setGap(gaps['8bit'])}>8-bit</StyledButton>
        <StyledButton className={`btn ${gap === gaps['16bit'] ? 'selected' : ''}`} onClick={() => setGap(gaps['16bit'])}>16-bit</StyledButton>
      </div>
      <div className="logo-section">
        <img id="logo" src="home_lite.jpg" alt="Portrait" style={{display: 'none'}} ref={refImage} />
        <StyledCanvasTitle ref={refCanvas} width="400" height="500" />
      </div>
    </StyledCanvasContainer>
  );
}
