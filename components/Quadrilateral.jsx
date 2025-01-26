import React, { useRef, useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useUser } from '@auth0/nextjs-auth0/client';
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
    p5.line(-1.2*boxSz, -boxSz, boxSz, boxSz, -boxSz, boxSz);
    p5.line(-boxSz, 0.8*boxSz, boxSz, boxSz, boxSz, boxSz);
    
    p5.line(-1.2*boxSz, -boxSz, boxSz, -boxSz, 0.8*boxSz, boxSz);
    p5.line(boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

    p5.stroke(255,0,0);
    //diagonals
    p5.line(-1.2*boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);


  }
}
const Quadrilateral = () => { 
  
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
          A geometriában a négyszög olyan sokszög, amelynek négy oldala és négy csúcsa van. A belső szögeinek összege 360°.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    

      <p className="text-justify">
      A matematika a kategóriákat bezárólag értelmezi, ekképpen egy négyzetről például elmondhatjuk, hogy egyben paralelogramma, téglalap, és rombusz.
      </p>
    </div>
  )
};

export default Quadrilateral;
