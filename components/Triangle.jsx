import React, { useRef, useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  var boxSz = 120;
  var numSpheres = 10;
  var x = [];
  var y = [];
  var z = [];

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);
  }

  p5.draw = () => {
    p5.background(255);

    p5.stroke(0,0,0);
    //front
    p5.line(-boxSz, boxSz, boxSz, boxSz, boxSz, boxSz);
    
    p5.line(-boxSz*0.8, -boxSz, boxSz, -boxSz, boxSz, boxSz);

    p5.line(-boxSz*0.8, -boxSz, boxSz, boxSz, boxSz, boxSz);

    for (var i = 0; i < numSpheres; i++) {
      p5.push();
      p5.translate(x[i], y[i], z[i]);
      p5.sphere(boxSz / 50, 8);
      p5.pop();
    }

  }
}
const Triangle = () => { 
  
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A geometriában a háromszög olyan sokszög, amelynek három oldala, másként fogalmazva három csúcsa van. Egy A, B és C csúcsokkal rendelkező háromszög írásban így is jelölhető: ABC△.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        {/* Jelölje a négyzet oldalát <strong>a</strong>, átlóját pedig <strong>d</strong>. A négyzet területe az oldala a négyzetével egyenlő, azaz: */}
      </p>   
      <br/>          
      <p className="text-justify">
        Van két különleges, a geometriában gyakran előforduló derékszögű háromszög. A „45-45-90 háromszögnek” az említett nagyságú szögei vannak, oldalainak aránya: 
        <Latex>$ 1:1:\sqrt{2}$</Latex>. A „30-60-90 háromszög” oldalainak aránya <Latex>$1:\sqrt {3}:2$</Latex> 
      </p>   
      


    </div>
  )
};

export default Triangle;
