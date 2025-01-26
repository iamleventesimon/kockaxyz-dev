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

    _text.text('A', 20, 250);
    _text.text('B', 250, 220);


    _text.textSize(48);
    _text.text('[', 70, 279);


    _text.textSize(120);
    _text.text('.', 250, 257);


    _text.stroke(1);
    _text.line(70, 270, 800, 190);

    
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

    _text.text('A', 20, 250);
    _text.text('B', 250, 220);


    _text.textSize(48);
    _text.text('(', 70, 279);


    _text.textSize(120);
    _text.text('.', 250, 257);


    _text.stroke(1);
    _text.line(70, 270, 800, 190);

    
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
    p5.createCanvas(800, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 20, 250);
    _text.text('B', 250, 210);
    _text.text('C', 450, 200);


    _text.textSize(48);
    _text.text('(', 290, 255);
    _text.text(')', 280, 255);


    _text.textSize(120);
    _text.text('.', 110, 273);
    _text.text('.', 475, 232);


    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    
    _text.stroke(1);
    _text.line(70, 470, 800, 390);
    _text.text('M', 20, 450);
    _text.text('N', 250, 410);
    _text.text('P', 450, 400);


    _text.textSize(48);
    _text.text('[', 290, 455);
    _text.text(']', 280, 455);


    _text.textSize(120);
    _text.text('.', 110, 473);
    _text.text('.', 475, 432);

    _text.stroke(1);
    _text.line(70, 270, 800, 190);

    
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
    p5.createCanvas(800, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 50, 230);
    _text.text('B', 270, 220);
    _text.text('C', 450, 200);


    _text.textSize(48);
    _text.text('(', 70, 280);


    _text.textSize(120);
    _text.text('.', 250, 258);
    _text.text('.', 475, 232);


    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    
    _text.stroke(1);
    _text.line(70, 470, 800, 390);
    _text.text('M', 40, 420);
    _text.text('N', 250, 410);
    _text.text('P', 450, 400);


    _text.textSize(48);
    _text.text('[', 70, 480);


    _text.textSize(120);
    _text.text('.', 250, 455);
    _text.text('.', 475, 432);

    _text.stroke(1);
    _text.line(70, 270, 800, 190);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}



const Halfline = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        A geometriában a félegyenes az egyenes egyik oldalán véges, másik oldalán végtelenbe nyúló darabja. Egy egyenest egy pontja két félegyenesre osztja. 
        Ha a végpontot hozzászámítjuk, akkor a félegyenes zárt, különben nyílt.
      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
          
        Az <strong>[AB</strong> zárt félegyenes jelölés azt fejezi ki, hogy az <strong>AB</strong> egyenes egy darabjáról van szó, aminek 
        eleme az <strong>A</strong> határpontja, és a félegyenes a <strong>B</strong>  irányában a végtelenbe nyúlik. Ekképpen:
        
      </p>
      <center><Latex>$A \in [AB$.</Latex></center>
      <br/>
      <p className="text-justify">
        Nyílt félegyenes <strong>(AB</strong> jelölése esetén, az <strong>A</strong> határpontot nem tartalmazza fèlegyenes, melyet így
      </p>

      <center><Latex>$A \not \in (AB$.</Latex></center>

      <p className="text-justify">
        jelöléssel értelmezünk. 
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

      <p className="text-justify">

        Ha egy egyenest egy pontja két félegyenesre osztja, akkor a félegyeneseket ellentéteseknek nevezzük. Például, <strong>[BA</strong> és  
        <strong>[BC</strong> ellentétes zárt, míg <strong>(NM</strong> és <strong>(NP</strong> ellentétes nyílt félegyenesek.
      </p>

      <center>
       <NextReactP5Wrapper sketch={sketch3} />
      </center>    

      <p className="text-justify">

        Két félegyenes megegyezik, ha minkettő esetén a rögzített <strong>A</strong> határpont ugyanazon oldalára esik a két 
        félegyenes másik pontja. Ekképpen az <strong>(AB</strong> és az <strong>(AC</strong> nyílt illetve 
        az <strong>[MN</strong> és az <strong>[MP</strong> zárt félegyenesek megegyeznek.
      </p>




      <center>
       <NextReactP5Wrapper sketch={sketch4} />
      </center>    
      <p>
        Hasonló szerkesztési elv szerint nemcsak félegyeneseket, hanem félsíkokat is értelmezhetünk.
      </p>




    </div>
  )
};

export default Halfline;
