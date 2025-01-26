import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    
    p5.createCanvas(800, 400, p5.WEBGL);

    _text = p5.createGraphics(800, 600);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('B', 470, 220);
    _text.text('A', 640, 440);
    _text.text('C', 40, 440);
    _text.text('O', 280, 440);

    _text.textSize(184);

    _text.text('.', 100, 490);
    _text.text('.', 300, 490);

    _text.text('.', 550, 222);
    _text.text('.', 650, 490);


    _text.stroke(3);

    _text.line(100, 482, 650, 482);
    _text.line(301, 482, 550, 222);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}


function sketch2(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 400, p5.WEBGL);

    _text = p5.createGraphics(800, 600);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('B', 470, 220);
    _text.text('A', 640, 440);
    _text.text('O', 40, 440);
    _text.text('C', 40, 50);

    _text.textSize(184);

    _text.text('.', 100, 490);

    _text.text('.', 550, 222);
    _text.text('.', 100, 42);
    _text.text('.', 650, 490);


    _text.stroke(3);

    _text.line(100, 482, 650, 482);
    _text.line(101, 482, 101, 25);
    _text.line(101, 482, 550, 222);


    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}




const SpareAngle = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
          Ha két szög összege 180°, akkor azokat kiegészítő szögeknek mondjuk. A pótszögek esetén összegük 90°.



      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      
      <p className="text-justify">
        
        Ekképpen az  <Latex>$m(AOB \angle)$</Latex> és a <Latex>$m(BOC \angle)$</Latex> szögek kiegészítő szögek ha <Latex>$m(AOB \angle) + m(BOC \angle)=180°$</Latex>.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

    
      <p className="text-justify">
        
        Hasonlóan, az  <Latex>$m(AOB \angle)$</Latex> és a <Latex>$m(BOC \angle)$</Latex> szögek pótszögek ha <Latex>$m(AOB \angle) + m(BOC \angle)=90°$</Latex>.
      </p>


    </div>
  )
};

export default SpareAngle;
