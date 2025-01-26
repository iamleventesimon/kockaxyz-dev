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
    p5.line(-boxSz, -boxSz, boxSz, boxSz, -boxSz, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz, boxSz, boxSz);
    
    p5.line(-boxSz, -boxSz, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

    for (var i = 0; i < numSpheres; i++) {
      p5.push();
      p5.translate(x[i], y[i], z[i]);
      p5.sphere(boxSz / 50, 8);
      p5.pop();
    }

  }
}
const Square = () => { 
  const { user } = useUser();
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A négyzet egy olyan négyszög, aminek minden oldala és szöge egyenlő.
        Tulajdonságok alapján szemközti oldalai párhuzamosak illetve átlói felezik egymást, egyenlő hosszúak, merőlegesek egymásra és felezik a szögeket.
        Minden szöge derékszög. A négyzet középpontosan szimmetrikus alakzat. Szimmetria középpontja az átlók metszéspontja.
        A négyzet tengelyesen szimmetrikus alakzat. Négy szimmetria tengelye van: az oldalfelező merőlegesei illetve az átlói.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        Jelölje a négyzet oldalát <strong>a</strong>, átlóját pedig <strong>d</strong>. A négyzet területe az oldala a négyzetével egyenlő, azaz:
      </p>   
      <center><Latex>$T = a^{2}$.</Latex></center>
      <br/>          
      <p className="text-justify">
        Előfordulhat azonban, hogy nem az oldal hossza adott, hanem vagy az átló vagy a kerület. Ha a négyzet átlója adott:

      </p>   
      <center>

        <Latex>{'$T = \\frac{d^2}{2}$'}</Latex> 
      </center>

      <br/>          
            
      <p className="text-justify">
        Ugyanakkor, ha pedig a kerület adott:
      </p>   
      <center>
        <Latex>{'$T = \\frac{K^2}{16}$'}</Latex> 
          
      </center>
        
      <p className="text-justify">
        A négyzet kerülete az oldal négyszerese:

      </p>   
      <center>

        <Latex>{'$K = 4a$'}</Latex> 
      </center>
      <br/>          
      
      <p className="text-justify">
        A területhez hasonlóan itt előfordulhat, hogy a négyzet átlója vagy a kerület adott. Így a kiszámítási módok:

      </p>   
      <center>

        <Latex>{'$K = 2d\\sqrt{2} = 4\\sqrt{T}$'}</Latex> 
      </center>
      



    </div>
  )
};

export default Square;
