import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  var boxSz = 120;

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);
  }

  p5.draw = () => {
    p5.background(255);
    p5.rotateY(p5.frameCount * 0.01);

    p5.stroke(0,0,0);
    //front
    p5.line(-boxSz, -boxSz*0.6, boxSz, boxSz*1.7, -boxSz*0.6, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz*1.7, boxSz, boxSz);
    
    p5.line(-boxSz, -boxSz*0.6, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz*1.7, -boxSz*0.6, boxSz, boxSz*1.7, boxSz, boxSz);

    //back
    p5.line(-boxSz, -boxSz*0.6, -boxSz, boxSz*1.7, -boxSz*0.6, -boxSz);
    p5.line(-boxSz, boxSz, -boxSz, boxSz*1.7, boxSz, -boxSz);
    p5.line(-boxSz, -boxSz*0.6, -boxSz, -boxSz, boxSz, -boxSz);
    p5.line(boxSz*1.7, -boxSz*0.6, -boxSz, boxSz*1.7, boxSz, -boxSz);

    //left top
    p5.line(-boxSz, -boxSz*0.6, boxSz, -boxSz, -boxSz*0.6, -boxSz);
    //left bottom
    p5.line(-boxSz, boxSz, -boxSz, -boxSz, boxSz, boxSz);
    //right top
    p5.line(boxSz*1.7, -boxSz*0.6, boxSz, boxSz*1.7, -boxSz*0.6, -boxSz);
    // // right bottom
    p5.line(boxSz*1.7, boxSz, -boxSz, boxSz*1.7, boxSz, boxSz);



    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz, boxSz, -boxSz, boxSz*1.7, -boxSz*0.6, -boxSz);
    p5.stroke(0,255,0);
    p5.line(boxSz*1.7, boxSz, boxSz, -boxSz, -boxSz*0.6, -boxSz);


  }
}
const RectangularCuboid = () => { 
  const { user } = useUser();
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
          A téglatest egy olyan egyenes hasáb, amelynek alaplapja téglalap.
          Értelmezéséből következő tulajdonságai szerint: hat téglalap határolja, a szemközti téglalapok egybevágóak és párhuzamosak, a téglatest különböző hosszúságú oldalai páronként merőlegesek egymásra, az élszögei és a lapszögei is egyaránt derékszögek.
        </p>
        
        <br/>
        <p className="text-justify">
          A téglatest térfogata a különböző <strong>a</strong>, <strong>b</strong> és <strong>c</strong> hosszúságú oldalai hosszának a szorzata.
        </p>
        <center><Latex>$V = abc$.</Latex></center>
        <br/>
        <p className="text-justify">
          A téglatest egymással szemközti oldalai egybevágóak, így a felszín összesen 6 darab, három különböző területű téglalap területének összege.
        </p>
        <center><Latex>$A =2(ab+bc+ca)$.</Latex></center>
        <br/>
        <p className="text-justify">
          A lapátlók az adott lapot alkotó téglalap átlói, így a téglatestnek 3 különböző hosszúságú lapátlója van.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    

      <p className="text-justify">
        Zölddel megrajzolt <strong>e</strong> testátlója a 3 különböző hosszúságú él négyzetösszegéből vont négyzetgyök.
      </p>  
      <center>
        <Latex>{"$e = \\sqrt{a^2+b^2+c^2}$"}</Latex>
      </center>
      <br/>
      <p className="text-justify">
        A testátlónak az alaplappal bezárt szöge:
      </p>  
      <center>
        <Latex>{"$\\sin \\alpha = \\frac{c}{e}$"}</Latex>
      </center>
      <br/>

      <p className="text-justify">
        A testátlónak a csatlakozó éllel bezárt hajlásszöge:
      </p>  
      <center>
        <Latex>{"$\\cos \\alpha = \\frac{c}{e}$"}</Latex>
      </center>
      <br/>
      <p className="text-justify">
        Továbbá, azt a téglatestet, amelynek alapja négyzet, négyzetes oszlopnak nevezzük és azt a téglatestet, amelynek minden éle egyenlő hosszúságú, kockának nevezzük.
      </p>  


    </div>
  )
};

export default RectangularCuboid;
