


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
    _text.circle(160, 250, 150);
    _text.text('.', 230, 260);
    _text.text('.', 160, 260);

    _text.textSize(48);

    _text.text('r', 185, 290);
    _text.text('O', 140, 220);
    _text.textSize(32);
    _text.text('1', 200, 302);
    _text.text('1', 165, 230);

    _text.line( 160, 250, 230, 250);


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(360, 250, 210);
    _text.text('.', 260, 260);
    _text.text('.', 360, 260);

    _text.textSize(48);

    _text.text('r', 325, 290);
    _text.text('O', 340, 220);
    _text.textSize(32);
    _text.text('2', 340, 302);
    _text.text('2', 365, 230);

    _text.line( 260, 250, 360, 250);

    
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
    _text.circle(160, 250, 150);
    _text.text('.', 160, 260);

    _text.textSize(48);

    _text.text('r', 185, 290);
    _text.text('O', 140, 220);
    _text.textSize(32);
    _text.text('1', 200, 302);
    _text.text('1', 165, 230);

    _text.line( 160, 250, 230, 250);


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(360, 250, 250);
    _text.text('.', 360, 260);
    _text.text('.', 235, 260);

    _text.textSize(48);

    _text.text('r', 325, 290);
    _text.text('O', 340, 220);
    _text.textSize(32);
    _text.text('2', 340, 302);
    _text.text('2', 365, 230);

    _text.line( 260, 250, 360, 250);

    
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


    _text.textSize(48);

    _text.text('r', 325, 290);
    _text.text('O', 340, 220);
    _text.textSize(32);
    _text.text('2', 340, 302);
    _text.text('2', 365, 230);


    _text.textSize(48);

    _text.text('r', 185, 290);
    _text.text('O', 140, 220);
    _text.textSize(32);
    _text.text('1', 200, 302);
    _text.text('1', 165, 230);



    _text.textSize(184);

    _text.stroke(1);

    _text.text('.', 160, 260);
    _text.text('.', 360, 260);
    _text.text('.', 235, 260);

    _text.noFill();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(160, 250, 250);
    _text.text('.', 160, 260);

    _text.textSize(48);

    _text.text('r', 185, 290);
    _text.text('O', 140, 220);
    _text.textSize(32);
    _text.text('1', 200, 302);
    _text.text('1', 165, 230);

    _text.line( 160, 250, 370, 250);
    _text.circle(360, 250, 250);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

function sketch4(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(48);

    _text.text('r', 395, 290);
    _text.text('O', 340, 220);
    _text.textSize(32);
    _text.text('2', 410, 302);
    _text.text('2', 365, 230);


    _text.textSize(48);

    _text.text('r', 295, 290);
    _text.text('O', 220, 220);
    _text.textSize(32);
    _text.text('1', 310, 302);
    _text.text('1', 245, 230);



    _text.textSize(184);

    _text.stroke(1);

    _text.text('.', 250, 260);
    _text.text('.', 370, 260);
    _text.text('.', 475, 260);

    _text.noFill();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(250, 250, 450);
    _text.circle(360, 250, 225);


    _text.textSize(48);


    _text.line( 250, 250, 470, 250);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

function sketch5(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(48);

    _text.text('r', 325, 290);
    _text.text('O', 340, 220);
    _text.textSize(32);
    _text.text('2', 340, 302);
    _text.text('2', 365, 230);


    _text.textSize(48);

    _text.text('r', 265, 290);
    _text.text('O', 240, 220);
    _text.textSize(32);
    _text.text('1', 280, 302);
    _text.text('1', 270, 230);



    _text.textSize(184);

    _text.stroke(1);

    _text.text('.', 360, 260);
    _text.text('.', 235, 260);

    _text.noFill();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(235, 260, 450);

    _text.textSize(48);


    _text.line( 235, 250, 460, 250);
    _text.circle(360, 250, 150);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}
function sketch6(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(500, 500, p5.WEBGL);

    _text = p5.createGraphics(500, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.noStroke();


    _text.textSize(48);



    _text.textSize(48);

    _text.text('r', 265, 290);
    _text.text('O', 240, 220);
    _text.text('r', 390, 220);
    _text.textSize(32);
    _text.text('2', 405, 230);
    _text.text('1', 280, 300);



    _text.textSize(184);

    _text.stroke(1);

    _text.text('.', 235, 260);

    _text.noFill();


    _text.textSize(184);

    _text.stroke(1);
    _text.circle(235, 250, 450);

    _text.textSize(48);


    _text.line( 235, 250, 460, 250);
    _text.circle(235, 250, 270);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

const CircleCircle = () => { 
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        Két különböző kör metszete lehet üres halmaz, egy pont illetve két pont, azaz értelmezhetünk külső, érintő illetve metsző köröket.
          


          
        </p>
      </div>
      
      <center>
        <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        A <Latex>C_1(O_1,r_1)</Latex> és <Latex>C_2(O_2,r_2)</Latex> köröket elkerülőnek nevezzük ha a két kör metszete üres és a kér kör középpontjának távolsága nagyobb a két sugár összegénél, azaz


      </p>   
      <center>
      <Latex>{'$d(O_1,O_2) > r_1+r_2$'}.</Latex> 
      </center>

      <p className="text-justify">
        Ekképpen


      </p>   
      <center>
      <Latex>$C_1(O_1,r_1) \cap C_2(O_2,r_2) = \emptyset$.</Latex> 
      </center>

      <br/>        

      <p className="text-justify">
        Továbbá a kör középontjának és <strong>d</strong> egyenesnek a nagyobb mint a sugár, azaz <Latex>{'$d(O_1,O_1) > r_1 + r_2$'}</Latex>. 
        
      </p>
      <center>
        <NextReactP5Wrapper sketch={sketch2} />


      </center>    

      <p className="text-justify">
        
        Továbbá, a  <Latex>C_1(O_1,r_1)</Latex> és <Latex>C_2(O_2,r_2)</Latex> körök metszőek, ha egy pontban metszik egymást. Így 
        
      </p>   
      <center>
        
      <Latex>$C_1(O_1,r_1) \cap C_2(O_2,r_2) = \lbrace M \rbrace$,</Latex> 
      </center>
      <br/>        
      <p className="text-justify">
        ahol az <strong>M</strong> pontot az egyenes és a kör metszéspontjábnak nevezzük. Jelen esetben a két középpont megegyzik a sugárral, így <Latex>{'$d(O_1,O_2) = r_1+r_2$'}</Latex>.  Ugyanakkor a <Latex>C_1(O_1,r_1)</Latex> és <Latex>C_2(O_2,r_2)</Latex> metszőek, ha a körök két pontban metszik.

      </p>   

      <center>
        <NextReactP5Wrapper sketch={sketch3} />
      </center>

      <p className="text-justify">
        Az két kör középontjának távolsága ebben az esetben kisebb mint a sugarak összege és nagyobb mint a sugarak különbsége, azaz <Latex>{'r_1 - r_2 < $d(O_1,O_2) < r_1+r_2$'}</Latex>, ahol  <Latex>{'$r_1 \\ge r_2$'}</Latex>. Belső körök esetén három alesetet különböztetünk meg.
        Ha a <Latex>{'$d(O_1,O_2) = r_1-r_2, r_1 > r_2$'}</Latex>, akkor a körök belső metszőek.
      </p>         


      <center>
        <NextReactP5Wrapper sketch={sketch4} />
      </center>

      <p className="text-justify">
        Továbbá, ha <Latex>{'$d(O_1,O_2) < r_1-r_2, r_1 > r_2$'}</Latex>, akkor a <Latex>{'$C_2(O_2,r_2)$'}</Latex> kör a <Latex>{'$C_1(O_1,r_1)$'}</Latex> kör belső köre.
      </p>         



      <center>
        <NextReactP5Wrapper sketch={sketch5} />
      </center>


      <p className="text-justify">
        Végül, de nem utolsó sorban, ha a két kör középpontjai egybesnek az <Latex>{'$O$'}</Latex> pontban, akkor  a <Latex>{'$C_1(O,r_1)$'}</Latex> és <Latex>{'$C_2(O,r_2)$'}</Latex> körök koncentrikusak. Ha  <Latex>{'r_1 < r_2$'}</Latex>, akkor értelmezés szerint a  <Latex>{'$C_1(O,r_1)$'}</Latex> kör belső kör.
      </p>         


      <center>
        <NextReactP5Wrapper sketch={sketch6} />
      </center>

      <p className="text-justify">
        Összegzésként: megkülönböztetünk külső, metsző illetbe belső köröket, utóbbiakat pedig további tulajdonságaik szerint csoportosíthatjuk.
      </p>   



    </div>
  )
};

export default CircleCircle;
