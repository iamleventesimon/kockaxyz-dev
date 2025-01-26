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

    _text.text('A', 220, 210);
    _text.text('M', 700, 250);
    _text.text('O', 50, 450);
    _text.text('B', 700, 450);

    _text.textSize(184);

    _text.text('.', 650, 282);
    _text.text('.', 100, 482);
    _text.text('.', 280, 235);
    _text.text('.', 650, 482);


    _text.stroke(1);
    _text.line(100, 470, 280, 225);
    _text.line(100, 470, 650, 275);
    _text.line(100, 470, 650, 475);
    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);

  }
}


const AngleBisector = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        A szögfelező a szöget két egyenlő szögre osztja. A szögfelező minden pontja azonos távolságra van a szög száraitól és átmegy a szög csúcsán.
      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      <p className="text-justify">
        Az <Latex>[OM</Latex> szögfelező esetén az <Latex>$AOM \angle$</Latex> és  <Latex>$BOM \angle$</Latex> szögek mértékei egyenlőek, azaz

      </p>

      <center><Latex>$m(AOM \angle) = m(BOM \angle) $.</Latex></center>

      <br/>
      <p className="text-justify">
        Egy szög szögfelezőjét meg lehet szerkeszteni körzővel és vonalzóval a következő módon: olyan kört rajzolunk, melynek középpontja a szög csúcsa. A körvonal a szög mindkét szárát elmetszi. Rajzoljunk két azonos sugarú kört, melyeknek a középpontja a két metszéspont. A két kör két metszéspontja meghatározza a szöget felező egyenest.

      </p>

    </div>
  )
};

export default AngleBisector;
