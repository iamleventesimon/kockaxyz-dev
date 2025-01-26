import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 150, p5.WEBGL);

    
    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    _text.text('α', 130, 350);


    _text.text('A', 150, 220);

    _text.text('B', 610, 330);


    _text.textSize(120);
    _text.text('.', 210, 210);
    _text.text('.', 690, 310);


    _text.stroke(1);


    _text.line(70, 370, 110, 110);
    _text.line(110, 110, 780, 110);

    _text.line(70, 370, 740, 370);

    _text.line(780, 110, 740, 370);

    _text.stroke(255, 0, 0);

    _text.textSize(64);
    _text.text('d', 550, 220);
    
    _text.strokeWeight(3);
    _text.line(100, 255, 720, 225);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}
function sketch2(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 150, p5.WEBGL);

    
    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    _text.text('α', 130, 350);


    _text.text('A', 150, 220);

    _text.text('B', 610, 330);

    _text.text('C', 310, 199);


    _text.textSize(120);
    _text.text('.', 210, 210);

    _text.text('.', 360, 190);
    _text.text('.', 690, 310);


    _text.stroke(1);


    _text.line(70, 370, 110, 110);
    _text.line(110, 110, 780, 110);

    _text.line(70, 370, 740, 370);

    _text.line(780, 110, 740, 370);

    _text.stroke(255, 0, 0);

    _text.textSize(64);
    _text.text('d', 550, 220);
    
    _text.strokeWeight(3);
    _text.line(100, 255, 720, 225);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

const Halfplane = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        
        A síkot egy rajta fekvő egyenes két félsíkra oszt. Nyílt a félsík, ha nem számítjuk hozzá az egyenes pontjait, különben zárt.
      </p>
      
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
          
        Az <strong>α</strong> síkon értelmezett <strong>[dA</strong> zárt félsík a <strong>d</strong>  határegyenes és az <strong>A</strong> pont
        által meghatározott félsík. Hasonlóan, a határegyenes és a <strong>A</strong> pont határozza meg a <strong>[dB</strong> zárt félsíkon.
        Ekképpen a félsíkokat
        
      </p>
      <center><Latex>$d \subset [dA$</Latex> illetve <Latex>$d \subset [dB$</Latex></center>
      <br/>
      <p className="text-justify">
      jelölésésekkel értelmezzük. Nyílt félegyenes <strong>(dA</strong> vagy  <strong>(dB</strong> jelölése esetén, a <strong>d</strong> határegyenes nem része a félsíknak,
        melyet így
      </p>

      <center><Latex>$d \not \subset (dA$</Latex> illetve <Latex>$d \not \subset (dB$</Latex></center>

      <p className="text-justify">
        jelölésésekkel értelmezünk. 
        Ha egy síkot egy határegyenes két részre osztja, akkor a félsíkokat ellentéteseknek nevezzük. Például, <strong>[dA</strong> és  
        <strong>[dB</strong> ellentétes zárt, míg <strong>(dA</strong> és <strong>(dB</strong> ellentétes nyílt félsíkok.
      </p>      

      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

      <p className="text-justify">

        Két félsík megegyezik osztja, ha a rögzített <strong>d</strong> határegyenes ugyanazon oldalára esik mindkét 
        félsík másik pontja. Ekképpen az <strong>(dA</strong> és az <strong>(dC</strong> nyílt illetve 
        az <strong>[dA</strong> és az <strong>[dC</strong> zárt félsíkok megegyeznek.
      </p>   




    </div>
  )
};

export default Halfplane;
