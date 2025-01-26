import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  var boxSz = 120;

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);
  }

  p5.draw = () => {
    p5.background(255);
    // p5.rotateY(p5.frameCount * 0.01);

    p5.stroke(0,0,0);
    //front
    p5.line(-boxSz, -boxSz*0.6, boxSz, boxSz*1.7, -boxSz*0.6, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz*1.7, boxSz, boxSz);
    
    p5.line(-boxSz, -boxSz*0.6, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz*1.7, -boxSz*0.6, boxSz, boxSz*1.7, boxSz, boxSz);


    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz, -boxSz*0.6, boxSz, boxSz*1.7, boxSz, boxSz);


  }
}
const Rectangle = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        A téglalap egy olyan paralelogramma, amelynek minden szöge egyenlő.
        Tulajdonságai alapján: átlói felezik egymást és egyenlő hosszúak, minden szöge derékszög.
        Továbbá, középpontosan szimmetrikus alakzat úgy, hogy szimmetria középpontja az átlók metszéspontja.
        A téglalap tengelyesen szimmetrikus alakzat is. 
        Két szimmetria tengelye van: az oldalfelező merőlegesei, ezeknek az egyeneseknek a téglalapba eső szakaszát pedig középvonalnak nevezzük.        
      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
          A téglalap oldalait <strong>a</strong> és <strong>b</strong>, átlóit az <strong>e</strong> és <strong>f</strong> jelölik.
          A téglalap területe a két oldal hosszának a szorzata, azaz:
      </p>
        <center><Latex>$T =ab$.</Latex></center>
        <br/>
        <p className="text-justify">
          A téglalap kerülete a két oldal összegének a kétszerese. Képlettel ez a következőképpen néz ki.
        </p>

        <center><Latex>$K = 2(a+b)$.</Latex></center>


    </div>
  )
};

export default Rectangle;
