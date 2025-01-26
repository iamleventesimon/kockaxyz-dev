import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  var boxSz = 180;

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);

  }

  p5.draw = () => {
    p5.background(255)
    // Rotate the canvas
    p5.rotateX(p5.HALF_PI - 0.2);
    p5.rotateZ(p5.frameCount*0.01);
    
    // Coordinates for verteces of the pyramid
    p5.line(0,0,0,boxSz,0,0);
    p5.line(boxSz,0,0,boxSz,boxSz,0);
    p5.line(boxSz,boxSz,0,0,boxSz,0);
    p5.line(0,boxSz,0,0,0,0);
    p5.line(0,0,0,boxSz/2,boxSz/2,boxSz);
    p5.line(boxSz,0,0,boxSz/2,boxSz/2,boxSz);
    p5.line(boxSz,boxSz,0,boxSz/2,boxSz/2,boxSz);
    p5.line(0,boxSz,0,boxSz/2,boxSz/2,boxSz);
      
  }
}
const Pyramid = () => { 
  const { user } = useUser();
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A gúla vagy piramis olyan geometriai test, amelynek alaplapja n oldalú sokszög, palástja pedig olyan háromszögekből áll, amelyeknek egy közös, nem az alaplap síkjába eső csúcsuk van, és az ezzel a csúccsal szemben levő oldalaik egyben az alapsokszög oldalai.        
        </p>
        
        <br/>
        <p className="content">
        A gúla lapjainak és csúcsainak száma egyaránt <strong>n+1</strong>, ahol <strong>n</strong>, az alap oldalainak száma. Éleinek száma <strong>2n</strong>. A gúla térfogata a <strong>T_a</strong> alapterülete és a <strong>h</strong> magasság függvényében

        </p>
        <center><Latex>$V = \frac{1}{3}T_ah$.</Latex></center>
        <p>
        
        A gúla felszíne az 
        </p>
        <center>
        <Latex>$A=T_a+T_p$</Latex> 
          
        </center><br/>

        <p>összeg, ahol <Latex>$T_a$</Latex> a gúla alaplapjának területe, <Latex>$T_p$</Latex> pedig a gúla palástjának területe. Ugyanakkor, a palást területét az őt alkotó háromszögek területeinek összegeként kaphatjuk meg.
        </p>
      </div>
      <br/>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    

      
      
      
      <p>
        A szabályos gúla olyan egyenes gúla, aminek az alapja szabályos sokszög. A szabályos tetraéderek és a jól ismert négyzet alapú piramisforma is szabályos gúla. Az <strong>F</strong>-fel jelölt felszíne az


      </p>
      <center>

        <Latex>{'$F = A +  \\frac{kh}{2}$'}</Latex> 
      </center>

      
      <p>
        <br/>
        szerint számolható ki, ahol <strong>A</strong> az alap területe, <strong>k</strong> az alap kerülete és <strong>h</strong> a palást hossza, vagyis a melynek értéke az alkotó háromszög magassága, azaz a gúla oldalmagassága.

      </p>
      




    </div>
  )
};

export default Pyramid;
