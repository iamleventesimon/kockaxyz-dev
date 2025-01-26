import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);

  }

  p5.draw = () => {
    p5.background(255);

    p5.rotateY(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);

    // Enable orbiting with the mouse.
    p5.orbitControl();

    // Draw the cylinder.
    // Set its radius to 30 and height to 50.
    p5.cylinder(70, 250);

  }
}
const Cylinder = () => { 
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A henger vagy idegen szóval cilinder térbeli test: alapját egy görbe, a vezérgörbe adja. Többnyire olyan hengerről van szó, aminek alapját ellipszis, speciális esetben kör alkotja.
        </p>
        
        <br/>
        <p className="content">
        Amennyiben a fenti előállításban szereplő vezérgörbe kör, akkor azt a henger alap illetve fedőlapjának nevezzük. A párhuzamosoknak a két kör síkja közé eső szakaszait alkotónak nevezzük. A henger magassága <strong>m</strong>, az alapkörének a sugara pedig <strong>r</strong>. Az egyenes körhenger térfogata:


        </p>
        <center><Latex>$V = r^{2} \pi m$.</Latex></center>
        <p>            
          <br/>

          Ha megvizsgáljuk a képletet ez pontosan az alapkör területánek és a magasságnak a szorzata.

        </p>
      </div>
      <br/>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    

      <p className="text-justify">
      A henger felszíne az alap és fedőkört alkotó körből és a henger palástjából áll. A henger palástja kiterítve egy olyan téglalapot ad amelynek egyik oldalal a henger magassága, másik oldala pedig az alapkört adó kör kerülete. Így a henger felszíne:

      </p>  

      <center><Latex>$A = 2r^{2}\pi + 2 r \pi m$.</Latex></center>


      <p className="text-justify">
      Az egyenes körhenger tengelymetszete egy olyan téglalap, amelynek egyik oldala a henger magassága, másik oldala pedig az alapkör átmérője.


      </p>  
      

    </div>
  )
};

export default Cylinder;
