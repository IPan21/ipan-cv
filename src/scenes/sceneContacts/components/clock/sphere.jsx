import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import backImg from '../../../../assets/earthmap-cyan.jpg';

export class Sphere extends Component {
  constructor() {
    super();
    this.sketch = this.sketch.bind(this);
  }

  sketch(p) {
    let img;
    let theta = 0;

    p.preload = () => {
        img = p.loadImage(backImg);
    }
    
    p.setup = () => {
        p.createCanvas(350, 350, p.WEBGL);
    }

    p.draw = () => {
        p.directionalLight(250, 250, 250, 0, 0, -1);
        p.rotateZ(theta * p.mouseX * 0.001);
        p.rotateX(theta * p.mouseY * 0.001);
        p.rotateY(theta * p.mouseX * 0.001);
        p.texture(img);
        p.sphere(110);
        p.noStroke();
        theta += 0.01;
    }
  }

  render() {
    return <div><P5Wrapper sketch={this.sketch.bind(this)} /></div> 
  }
}

