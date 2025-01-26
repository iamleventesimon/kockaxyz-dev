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
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, boxSz*1.7, -boxSz*0.6, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz*1.7 - 80, boxSz, boxSz);
    
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz*1.7, -boxSz*0.6, boxSz, boxSz*1.7 - 80, boxSz, boxSz);


    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, boxSz*1.7 - 80, boxSz, boxSz);


  }
}
const Parallelogram = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
      A paralelogramma olyan négyszög, amelynek két-két szemközti oldala párhuzamos. A középpontos szimmetria miatt két-két szemközti oldalának a hossza egyenlő, szemközti szögei váltószögek, egyenlők. Szomszédos szögei társszögek, tehát kiegészítő szögek. Átlói felezik egymást, metszéspontjuk a szimmetriaközéppont. Az átlók hosszának négyzetösszege megegyezik az oldalak hosszának négyzetösszegével.    
      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
        A paralelogramma kerülete a két oldal összegének a kétszerese. Képlettel ez a következőképpen néz ki
      </p>
      <center><Latex>$K = 2(a+b)$.</Latex></center>
      <br/>
      <p className="text-justify">
        Speciális esetben: az olyan paralelogrammát, amelynek minden oldala egyenlő, rombusznak nevezzük. Továbbá, ha egy paralelogramma szögei derékszögek, téglalapnak nevezzük. Végül, de nem utolsó sorban, ha a paralelogrammának a szögei és az oldalai is egyenlőek, akkor négyzet.
      </p>



    </div>
  )
};

export default Parallelogram;
