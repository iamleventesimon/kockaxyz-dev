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

    _text.text('B', 490, 220);
    _text.text('A', 640, 420);
    _text.text('C', 40, 420);
    _text.text('O', 390, 420);
    _text.text('D', 320, 580);

    _text.textSize(184);

    _text.text('.', 100, 450);
    _text.text('.', 440, 450);

    _text.text('.', 550, 222);
    _text.text('.', 365, 600);
    _text.text('.', 650, 450);


    _text.stroke(3);

    _text.line(100, 442, 650, 442);
    _text.line(301, 710, 550, 222);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}





const ApexAngle = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        A csúcsszögek olyan fordított állású szögpárok, amelyek szárai páronként egy egyenesen vannak.



      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      
      <p className="text-justify">
        
        Ekképpen az  <Latex>$m(AOB \angle)$</Latex> és a <Latex>$m(COD \angle)$</Latex> szögek csúcsszögek esetén <Latex>$m(AOB \angle) = m(BOC \angle)$</Latex>. Mi több, az 
        <Latex>$m(AOB \angle)$</Latex>, <Latex>$m(BOC \angle)$</Latex>, <Latex>$m(COD \angle)$</Latex> és a <Latex>$m(DOA \angle)$</Latex> egy pont körüli szögek, ekképpen mértékeik összege 360°.
      </p>


    </div>
  )
};

export default ApexAngle;
