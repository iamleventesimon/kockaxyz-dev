import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";



function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(250, 250, 300);
    _text.text('.', 470, 250);
    _text.text('.', 100, 282);
    _text.text('.', 240, 250);

    _text.textSize(48);

    _text.text('O', 210, 220);
    _text.text('r', 70, 250);
    _text.text('d', 440, 150);

    _text.line( 470, 490, 470, 50);
    _text.line( 250, 240, 100, 272);
    _text.line( 250, 240, 480, 240);

    
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
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(250, 250, 440);
    _text.text('.', 470, 250);
    _text.text('.', 30, 282);
    _text.text('.', 240, 250);

    _text.textSize(48);

    _text.text('O', 210, 220);
    _text.text('r', 70, 250);
    _text.text('d', 440, 80);
    _text.text('M', 440, 290);

    _text.line( 470, 490, 470, 50);
    _text.line( 250, 240, 40, 272);
    _text.line( 150, 240, 480, 240);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

function sketch3(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(250, 250, 440);
    _text.text('.', 440, 372);
    _text.text('.', 380, 82);
    _text.text('.', 30, 282);
    _text.text('.', 240, 250);

    _text.textSize(48);

    _text.text('O', 210, 220);
    _text.text('r', 70, 250);
    _text.text('d', 370, 190);
    _text.text('A', 410, 48);
    _text.text('B', 430, 448);

    _text.line( 470, 490, 370, 20);
    _text.line( 250, 240, 40, 272);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

const CircleLine = () => { 
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
          Egy <strong>C(0,r)</strong> kör és egy egyenes metszete lehet üres halmaz, egy pont illetve két pont, azaz egy kör esetén megkülönböztetünk külső, érintő illetve metsző egyeneseket. 


          
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        A <strong>d</strong> egyenest elkerülőnek nevezzük ha az egyenes és a kör metszete üres, azaz


      </p>   
      <center>
      <Latex>$C(O,r) \cap d = \emptyset$.</Latex> 
      </center>

      <br/>        

      <p className="text-justify">
        Ekképpen a kör középontjának és <strong>d</strong> egyenesnek a nagyobb mint a sugár, azaz <Latex>{'$d(O,d) > r$'}</Latex>. 
        
      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch2} />


      </center>    

      <p className="text-justify">
        
        Továbbá, a <strong>d</strong> egyenes érintő nevezzük ha az egyenes és a kör egy pont üres, azaz

      </p>   
      <center>
        
      <Latex>$C(O,r) \cap d = \lbrace M \rbrace$,</Latex> 
      </center>
      <br/>        
      <p className="text-justify">
        ahol az <strong>M</strong> pontot az egyenes és a kör metszéspontjábnak nevezzük. Jelen esetben a középpont és az egyenes távolsága megegyzik a sugárral, így <Latex>{'$d(O,d) = r$'}</Latex>. Végül, de utolsó sorban a <strong>d</strong> egyenes metsző, ha a kört két pontban metszik.

      </p>   

      <center>
        <NextReactP5Wrapper sketch={sketch3} />
      </center>

      <p className="text-justify">
        Az egyenes a kör középontjának távolsága ebben az esetben kisebb mint a sugár, azaz <Latex>{'$d(O,d) < r$'}</Latex>. 
      </p>         

    </div>
  )
};

export default CircleLine;
