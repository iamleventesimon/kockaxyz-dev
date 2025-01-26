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
  var t = 0.0;

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);
  }

  p5.draw = () => {
    p5.background(255);

    p5.stroke(0,0,0);
    //front
    p5.line(0, boxSz - 1.73205080757*boxSz, -boxSz, boxSz);
    p5.line(0, boxSz - 1.73205080757*boxSz, boxSz, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz);
    

  }
}
const EquilateralTriangle = () => { 
  
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A szabályos háromszög egy olyan speciális háromszög, amelynek minden oldala egyenlő. Emiatt egyébként minden szöge is egyenlő nagyságú, 60°-os. A szabályos háromszögben egybeesik a magasságpont, a súlypont, a körül írt és a beírt kör középpontja.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        Jelölje a szabályos háromszög oldalának hosszát <strong>a</strong>, kerülete ekkor <Latex>{'$K =3a $'}.</Latex>,  területe pedig
      </p>   
      <center>
        <Latex>{'$T= \\frac{ a^2\\sqrt{3} }{4}$'}.</Latex> 
      </center>
      <br/>          
      <p className="text-justify">

      </p>   
      



    </div>
  )
};

export default EquilateralTriangle;
