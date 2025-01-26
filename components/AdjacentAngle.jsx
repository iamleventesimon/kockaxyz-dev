import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('C', 700, 250);
    _text.text('O', 130, 430);
    _text.text('A', 90, 250);
    _text.text('B', 420, 250);
    _text.text('D', 700, 450);


    _text.textSize(184);

    _text.text('.', 50, 282);

    _text.text('.', 650, 282);
    _text.text('.', 490, 255);
    _text.text('.', 100, 482);
    _text.text('.', 650, 482);


    _text.stroke(1);
    _text.line(100, 470, 650, 275);
    _text.line(100, 470, 650, 475);
    _text.line(100, 470, 50, 282);
    _text.line(100, 470, 499, 242);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}


const AdjacentAngle = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
      Ha ugyanabba a síkba tartozó két szögnek egy közös szára és ezzel közös a csúcsuk is van, miközben szögtartományaik metszete üres halmaz, akkor csatlakozó szögeknek nevezzük őket. A két csatlakozó szöget szomszédos szögpárnak is nevezzük.

      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      
      <p className="text-justify">
        
        Például, az <Latex>$AOB \angle$</Latex> és a <Latex>$BOC \angle$</Latex> szögpárnak vagy a <Latex>$BOC \angle$</Latex> és <Latex>$COD \angle$</Latex> szögpár szomszédos szögek. Ugyanakkor, az <Latex>$AOB \angle$</Latex> és <Latex>$COD \angle$</Latex>  szögpár nem szomszédosak.
        
    </p>


      

    </div>
  )
};

export default AdjacentAngle;
