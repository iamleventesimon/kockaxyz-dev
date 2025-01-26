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
    _text.text('α', 130, 350);

    _text.text('N', 590, 175);

    _text.text('M', 150, 220);

    _text.text('P', 650, 270);


    _text.textSize(120);
    _text.text('.', 650, 175);
    _text.text('.', 210, 210);
    _text.text('.', 690, 250);


    _text.stroke(1);


    _text.line(70, 370, 110, 110);

    _text.line(70, 370, 800, 370);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

const Plane = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        Az egyenes a pont és a sík mellett a geometria egyik alapfogalma. Leírása (és nem definíciója) szerint mindkét irányban végtelen, végtelenül keskeny vonal. Két pont közötti legrövidebb út szakasz.

      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      <p className="text-justify">
        
        Rajzban általában az görög ábécé kisbetűit vagy három nem kollineáris pont felsorolását használjuk az elnevezésekhez. 
        
        
      </p>

    </div>
  )
};

export default Plane;
