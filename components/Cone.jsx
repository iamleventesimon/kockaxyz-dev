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
    
    p5.rotateX(p5.PI);
    p5.cone(100, 250);
    
  }
}
const Cone = () => { 
  const { user } = useUser();
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
          A matematikában a kúp gúlaszerű térbeli test: alapja egy tetszőleges síkidom, palástját a csúcsot az alap határpontjaival összekötő egyenes szakaszok, az alkotók uniója alkotja. Megkülönböztethetünk egyenes és ferde kúpokat aszerint, hogy a csúcs merőleges vetülete az alapra egybeesik-e az alap középpontjával, ha utóbbi értelmezett. 
        </p>
        
        <br/>
        <p className="content">
        Jelölje <strong>b</strong>b a kúp alapjának a területét, s legyen <strong>h</strong> a magassága. Ekkor a térfogat az alábbiak szerint számítható:


        </p>
        <center><Latex>$V = \frac{1}{3}bh$.</Latex></center>
        <p>
        Speciálisan, ha a kúp kör alapú, akkor  <strong>r</strong>-rel jelölve a kör sugarát, akkor a térfogat számítása
        </p>
        <center><Latex>$V = \frac{1}{3}\pi r^2 h$.</Latex></center>
        <p>            
        <br/>
        szerint írható fel. Végül, ha az alap elliptikus, akkor pedig az ellipszis sugarait felhasználva kapjuk
        </p>
        <center><Latex>$V = \frac{1}{3}\pi r_1 r_2 h$.</Latex></center>
        <p>            
        <br/>
        képletet.
        </p>


      </div>
      <br/>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    

      <p className="text-justify">
      A kúp felszíne az alap és a palást területének összege. Az egyenes, köralapú kúp esetében erre adható egy egyszerű képlet, mely szerint


      </p>  

      <center><Latex>$A = \pi r^{3} + \pi ra$,</Latex></center>
    

      <p className="text-justify">
      ahol <strong>a</strong> a kúp egy alkotójának hossza és


      </p>  


      
      <center><Latex>{'$a = \\sqrt{r^2 + h^2}$'}</Latex> </center>


      <p className="text-justify">
        Ugyanakkor, a kúpot az alapjával párhuzamos síkkal elmetszve csonkakúpot kapunk.


      </p>  
    
    </div>
  )
};

export default Cone;
