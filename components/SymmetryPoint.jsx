import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 150, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 50, 250);
    _text.text('A\'', 650, 250);
    _text.text('B', 350, 250);

    _text.textSize(120);
    _text.text('.', 100, 277);
    _text.text('.', 375, 277);
    _text.text('.', 650, 277);


    _text.stroke(1);
    _text.line(100, 270, 650, 270);

  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}





const SymmetryPoint = () => { 
  
  return (
    <div>
      <p className="text-justify">
        Az elemi geometriában egy pont vagy egy egyenes szimmetriáját egy másik ponthoz vagy egyeneshez viszonyítva értelmezhetjük.

      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
        

      <p className="text-justify">
        Az <strong>A</strong> pont <strong>B</strong> pontra szerkesztett pontja azon <strong>A'</strong> pont, melyre fennáll, hogy a  <strong>B</strong> pont az  <strong>[AA']</strong> szakasz felezőpontja.

      </p>

    </div>
  )
};

export default SymmetryPoint;
