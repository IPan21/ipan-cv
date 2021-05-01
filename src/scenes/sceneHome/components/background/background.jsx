import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Container } from './components/container';
import { FUCHSIA, CYAN, GREY } from '../../../../common/colorsPalette';

export const Background = () => {
  const sketch = (p) => {
    let windowWidth;
    let windowHeight;

    p.setup = () => {
	    windowWidth = p.windowWidth;
	    windowHeight = p.windowHeight;
      p.createCanvas(windowWidth, windowHeight).position(0, 0);
	    p.background(GREY);
	    p.noStroke();
    }

    p.windowResized = () => {
      windowWidth = p.windowWidth;
      windowHeight = p.windowHeight;
      p.resizeCanvas(windowWidth, windowHeight);
      p.noStroke();
    }

    p.draw = () => {
      p.background(GREY);
      const gridSize = 30;
      for (let i=0; i < windowWidth; i+= gridSize) {
        for (let j = 0; j < windowHeight; j += gridSize) {
          const minDotSize = 2; 
          let dotX = i + minDotSize/2; 
          let dotY = j + minDotSize/2;
          const distFromMouse = p.dist(p.mouseX, p.mouseY, dotX, dotY);
          const dotSize = minDotSize + (minDotSize / ( 1 + (distFromMouse / gridSize )));
          const distForScaledDots = gridSize * 2;
            if ( distFromMouse < distForScaledDots ) {
              dotX = dotX - dotSize;
              p.fill(p.mouseIsPressed ? FUCHSIA : CYAN);
              p.quad(dotX, dotY, dotX + dotSize, dotY - dotSize, dotX + dotSize*2, dotY, dotX + dotSize, dotY + dotSize);
            } else {
              dotX = dotX - minDotSize;
              p.fill(FUCHSIA);
              p.quad(dotX, dotY, dotX + minDotSize, dotY - minDotSize, dotX + minDotSize*2, dotY, dotX + minDotSize, dotY + minDotSize);
            }
        }
      }
    }
  }
    return <Container><P5Wrapper sketch={sketch}/></Container>
}