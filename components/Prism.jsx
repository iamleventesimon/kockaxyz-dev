import React from "react";
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
    p5.createCanvas(550, 600, p5.WEBGL);
    p5.background(0);

    for (var i = 0; i < numSpheres; i++) {
      // x[i] = random(-boxSz, boxSz);
      // y[i] = random(-boxSz, boxSz);
      // z[i] = random(-boxSz, boxSz);
    }
    // println(x);
    // println(y);
    // println(z);
  }

  p5.draw = () => {
    p5.background(255);
    //translate(0,0,-100);
    p5.rotateY(p5.frameCount * 0.01);

    p5.stroke(0,0,0);
    //front
    // p5.line(-boxSz, -boxSz, boxSz, boxSz, -boxSz, boxSz);
    // p5.line(-boxSz, boxSz, boxSz, boxSz, boxSz, boxSz);
    
    // p5.line(-boxSz, -boxSz, boxSz, -boxSz, boxSz, boxSz);
    // p5.line(boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

    //back
    p5.line(-boxSz, -boxSz*1.7, -boxSz, boxSz, -boxSz*1.7, -boxSz);
    p5.line(-boxSz, boxSz, -boxSz, boxSz, boxSz, -boxSz);
    p5.line(-boxSz, -boxSz*1.7, -boxSz, -boxSz, boxSz, -boxSz);
    p5.line(boxSz, -boxSz*1.7, -boxSz, boxSz, boxSz, -boxSz);

    p5.line(-boxSz, -boxSz*1.7, boxSz, -boxSz, -boxSz*1.7, -boxSz);
    p5.line(-boxSz, boxSz, -boxSz, -boxSz, boxSz, boxSz);
    p5.line(-0.4*boxSz, boxSz, 0.8*boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz, boxSz, -boxSz, -0.4*boxSz, boxSz, 0.8*boxSz);
    p5.line( -0.4*boxSz, -boxSz*1.7, 0.8*boxSz, -boxSz, -boxSz*1.7, boxSz);
    p5.line(boxSz, -boxSz*1.7, -boxSz, -0.4*boxSz, -boxSz*1.7, 0.8*boxSz);
    p5.line(-boxSz, boxSz, boxSz, -boxSz, -boxSz*1.7, boxSz);
    p5.line( -0.4*boxSz, -boxSz*1.7, 0.8*boxSz, -0.4*boxSz, boxSz, 0.8*boxSz);


    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz, boxSz, -boxSz, boxSz, -boxSz*1.7, -boxSz);
    p5.stroke(0,255,0);
    
    p5.line(-boxSz, -boxSz*1.7, -boxSz, -0.4*boxSz, boxSz, 0.8*boxSz);

    for (var i = 0; i < numSpheres; i++) {
      p5.push();
      p5.translate(x[i], y[i], z[i]);
      p5.sphere(boxSz / 50, 8);
      p5.pop();
    }

  }
}
const Prism = () => { 
  const { user } = useUser();
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A hasáb vagy prizma olyan poliéder, amelynek két párhuzamos lapja egymással egybevágó sokszög, a többi lapja pedig paralelogramma. Úgy is felfogható, hogy a hasáb az alapsokszög párhuzamos eltolása során keletkezik, ha az eltolást egy olyan egyenes mentén végezzük, amely nem a sokszög síkjában fekszik. Ha a párhuzamos eltolás az alapsokszög síkjára merőleges egyenes mentén történik, akkor a hasáb egyenes hasáb lesz, más esetben pedig ferde hasáb. 
        
        </p>
        
        <br/>
        <p className="content">
        A hasáb magasságát  <strong>h</strong>-val, az alaplap területét  <strong>A</strong>-val jelölve a térfogat az alábbi szorzatt szerint számítható ki: 
        </p>
        <center><Latex>$V = hA$.</Latex></center>
        <p>            
          Sajátos esetek szerint a paralelepipedon olyan hasáb, amelynek az alapja is paralelogramma, a téglatest olyan egyenes hasáb, amelynek az alapja téglalap, a kocka pedig olyan egyenes hasáb, amelynek az alapja négyzet, és a magassága egyenlő az alapnégyzet oldalával.

          <br/>
          <br/>
          Továbbá, a prizma olyan egyenes hasáb, amelynek alapja háromszög.

        </p>
      </div>
      <br/>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

       <p className="text-justify"> 
        Egy hasab egy lap síkjában áthaladó átlóját lapátlónak, az alap egyik átlóját alapátlónak, az oldallap egy átlóját oldalátlónak nevezzük, melyek egyikét pirossal emeltünk ki. Végül, de nem utolsó sorban testátlóknak nevezzük az egyik laphoz sem tartozó térben áthaladó átlókat, amelyek egyikét zölddel emeltünk ki.
      </p>   

    </div>
  )
};

export default Prism;
