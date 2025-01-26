import React from "react";
import 'katex/dist/katex.min.css';
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

    _text.text('d', 325, 250);
    _text.text('A', 50, 410);
    _text.text('M', 325, 410);
    _text.text('B', 700, 410);



    _text.textSize(184);

    _text.text('.', 100, 442);
    _text.text('.', 375, 442);
    _text.text('.', 650, 442);


    _text.stroke(1);
    _text.line(375, 111, 375, 482);
    _text.line(100, 432, 650, 432);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}



const Perpendicular = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        
      Az elemi geometriában az két elemet merőlegesnek nevezünk, ha derékszöget, vagyis 90°-ot zárnak be egymással.

          
      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      

      <p className="text-justify">

        Egy <strong>[AB]</strong>  szakasz szakaszfelező merőlegese egy adott síkban egy olyan <strong>d</strong>  egyenes, amelynek minden pontja az a szakasz <strong>A</strong>  és <strong>B</strong>  végpontjaitól egyenlő távolságra van. A <strong>d</strong> egyenes merőleges a szakaszra és áthalad annak <strong>M</strong>-jelölt felezőpontján. Ekképpen <strong>AM = BM</strong>.
      </p>

      

    </div>
  )
};

export default Perpendicular;
