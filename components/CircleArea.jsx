import React, { useRef, useEffect, useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  

  p5.setup = () => {

    p5.createCanvas(550, 400, p5.WEBGL);
  }

  p5.draw = () => {
    p5.background(255);

    // noStroke();
    p5.noFill();
    p5.stroke(0);

  
    p5.stroke(0,0,0);
  
    p5.circle(0, 0, 300);
    p5.stroke(255,0,0);

    p5.line(0,0,150,0)
  }
}
const CircleArea = () => { 
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
          Egy kör és egy egyenes metszete lehet üres halmaz, egy pont illetve két pont, azaz egy kör esetén megkülönböztetünk külső, érintő illetve metsző egyeneseket.


          
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        A kör húrja a körvonal bármely két pontját összekötő szakasz. A leghosszabb húr az átmérő.

        A húr a körvonalat két részre bontja. Ezeknek a neve a körív. A körlemezt is két részre bontje egy húr, ezek a körszelet névre hallgatnak.

      </p>   
      <p className="text-justify">
        A kör középpontjából kiinduló két sugár a körlemezt két részre bontja. A keletkező részek neve a körcikk.

        Azokat a szögeket amelyeknek csúcsa a kör középpontjában van, szárai a kör sugaraira illeszkednek középponti szögeknek nevezzük. A középponti szöghöz tartozó két sugár a köríven kijelöl egy körívet, a körlemezen pedig egy körcikket.
      
        A kör területe az alábbiak szerint számolható ki:


      </p>   
      <center>

        <Latex>{'$T = {r^2}\\pi$'}</Latex>,
      </center>

      <br/>          
            
      <p className="text-justify">
        ahol, a <Latex>{'$\\pi$'}</Latex> egy irracionális, sőt transzcendens szám, tehát egy nem szakaszos, tizedes tört. Az értéke megközelítőleg 3,14.
        Előfordulhat, hogy a sugár nem ismert, csak a kör átmérője. Ekkor vagy kiszámoljuk az sugarat és utána a területet, vagy pedig a következő képletet használjuk.

      </p>   
      <center>
        <Latex>{'$T = \\frac{4^2\\pi}{4}$'}</Latex> 
          
      </center>
        
      <p className="text-justify">
        A kör kerülete a sugár kétszeresének és a π-nek a szorzata.


      </p>   
      <center>

        <Latex>{'$K = 2r\\pi$'}</Latex> 
      </center>
      <br/>          
      
      <p className="text-justify">
        Továbbá, ha a kör átmérője adott, akkor azt is felhasználhatjuk a kerület kiszámításához.


      </p>   
      <center>
        <Latex>{'$K = d\\pi$'}</Latex> 
      </center>
      <br/>          
      
      <p className="text-justify">
        Előfordulhat az is, hogy a kör területe ismert, de a sugara nem. Ez esetben a következő képletet kell alkalmaznunk.
      </p>   
      <center>
        <Latex>{'$K = 2\\sqrt{T}\\sqrt{\\pi}$'}</Latex> 
      </center>
      <br/>          
      
      <p className="text-justify">
        Ha pedig a fordított eset áll fenn, és a kerület az ismert, akkor a kör területe így számolható ki:
      </p>   
      <center>
        <Latex>{'$T = \\frac{K^2}{\\pi}$'}</Latex> 
      </center>

    </div>
  )
};

export default CircleArea;
