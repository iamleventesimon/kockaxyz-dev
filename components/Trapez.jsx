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
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, boxSz*1.7 - 100, -boxSz*0.6, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz*1.7 - 80, boxSz, boxSz);
    
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz*1.7 -100, -boxSz*0.6, boxSz, boxSz*1.7 - 80, boxSz, boxSz);


    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz + 80, -boxSz*0.6, boxSz, -boxSz + 80, boxSz, boxSz);


  }
}
const Trapez = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
      A geometriában trapéznak nevezik az olyan négyszöget, amelynek van két egymással párhuzamos oldala. Ha a másik két szemközti oldal szintén párhuzamos egymással, akkor a trapéz egyben paralelogramma is. Ha nem, akkor a másik két szemközti oldalt találkozásukig meghosszabbítva egy háromszöget kapunk, amely tartalmazza a trapézt.
      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">

        A trapéz területe a következőképpen számolható: vesszük két párhuzamos oldalának számtani közepét és megszorozzuk a magassággal.
        Tehát, ha <strong>a</strong> és <strong>c</strong> a két párhuzamos oldal, és <strong>m</strong> a köztük lévő távolság, a területképlet a következő:


      </p>
      
      <center>
        <Latex>{'$T = \\frac{a+c}{2}m$'}</Latex> 
      </center>

      <br/>
      <p className="text-justify">

        A geometrián kívül az akrobatikában formájáról trapéznak nevezik a két kötélen függő vízszintes rúdból álló lengő nyújtót illetve az anatómiában a trapézcsont a kéz egy csontja.
      </p>



    </div>
  )
};

export default Trapez;
