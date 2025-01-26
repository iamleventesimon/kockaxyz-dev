import React, { useRef, useEffect } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const sketch = (p5) => {
  
  

  p5.setup = () => {

    p5.createCanvas(550, 400, p5.WEBGL);
  }

  p5.draw = () => {
    p5.background(255);

    // noStroke();
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(0.5);

    p5.rotateY(p5.millis() / 2500);
    p5.sphere(150);
  
    p5.stroke(0,255,0);
    p5.strokeWeight(4);
  
    p5.circle(0, 0, 300);
    p5.stroke(255,0,0);

    p5.line(0,0,150,0)
  }
}


const Sphere = () => { 
  
  return (
    <div>
      

      <div>
        <p className="text-justify">
          A gömb azon pontok mértani helye a térben, melyek egy adott ponttól legfeljebb adott távolságra vannak. Az adott pontot a gömb középpontjának, az adott távolságot a gömb sugarának nevezzük. Jelölések:

        
        </p>
        
        <br/>
        <p className="text-justify">
          Jelöljük a gömb középpontját <strong>O</strong>-val, sugarát pedig <strong>R</strong>-rel. Azokat a köröket, amelyeknek a középpontja megegyezik a gömb középpontjával a gömb főköreinek nevezzük.
        </p>
        <p className="text-justify">
          A gömb térfogatát <strong>V</strong>-vel szoktuk jelölni, kiszámolni pedig a következőképpen kell:
        </p>
        <center>
          <Latex>{'$ V = \\frac{4R^{3}\\pi}{3}$'}</Latex> 
        </center>
        <br/>
        <p className="text-justify">
          A térfogat kiszámításának levezetése túlmutat a középiskolai anyagon, így ezt most mellőzzük.

        </p>

        <center>
          <NextReactP5Wrapper sketch={sketch} />

        </center>    
        <p className="text-justify">
          A gömb felszínét <strong>A</strong>-val szoktuk jelölni, kiszámolni pedig a következőképpen kell:

        </p>
        <center>
          <Latex>{'$ A = 4R^{2}\\pi $'}</Latex> 

        </center>

      


      </div>
      

    </div>
  )
};

export default Sphere;
