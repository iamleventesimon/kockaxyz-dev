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

    _text.text('A', 50, 250);
    _text.text('A\'', 650, 250);
    _text.text('B', 350, 250);

    _text.textSize(120);
    _text.text('.', 100, 277);
    _text.text('.', 375, 277);
    _text.text('.', 650, 277);


    _text.stroke(1);
    _text.line(100, 270, 650, 270);

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
    p5.createCanvas(800, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('d', 325, 250);
    _text.text('A', 50, 410);
    _text.text("A'", 700, 410);



    _text.textSize(184);

    _text.text('.', 100, 442);
    _text.text('.', 650, 442);


    _text.stroke(1);
    _text.line(375, 111, 375, 482);
    _text.line(100, 432, 650, 432);

    
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

    _text.text('A', 100, 410);
    _text.text('B', 35, 210);    
    _text.text("B'", 600, 210);

    _text.text('d', 210, 322);
    _text.text("d'", 640, 362);
    _text.text('a', 330, 192);
    _text.text("A'", 500, 410);



    _text.textSize(184);

    _text.text('.', 200, 442);
    _text.text('.', 120, 242);
    _text.text('.', 255+375, 242);
    _text.text('.', 550, 442);


    _text.stroke(1);
    _text.line(250, 542, 85, 142);
    _text.line(375, 111, 375, 482);

    _text.line(275+375, 182, 510, 520);

    
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

    _text.text('A', 325, 290);
    _text.text("d", 700, 410);
    _text.text("d'", 700, 110);



    _text.textSize(184);



    _text.text('.', 375, 280);


    _text.stroke(1);
    _text.line(100, 120, 650, 120);
    _text.line(100, 420, 650, 420);
    _text.line(375, 120, 375, 420);


    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}






const SymmetryLine = () => { 
  
  return (
    <div>
      <p className="text-justify">
        Az elemi geometriában egy pont vagy egy egyenes szimmetriáját egy másik ponthoz vagy egyeneshez viszonyítva értelmezhetjük.


      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
        

      <p className="text-justify">
        Az <strong>A</strong> pont <strong>B</strong> pontra szerkesztett szimmetrikus ontja azon <strong>A'</strong> pont, melyre fennáll, hogy a  <strong>B</strong> pont az  <strong>[AA']</strong> szakasz felezőpontja.
        Ugyanakkor az <strong>A</strong> pont <strong>d</strong> egyenesre szerkesztett szimmetrikus ontja azon <strong>A'</strong> pont, melyre fennáll, hogy a <strong>d</strong> egyenes az  <strong>[AA']</strong> szakasz felezőmerőlegese.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    


      <p className="text-justify">
        
        
        A <strong>d</strong> egyenes <strong>a</strong> egyenesre szerkesztett szimmetrikus egyenese azon <strong>d'</strong> egyenes, melyre fennáll, hogy a bármely pontjának <strong>a</strong> egyenesre szerkesztett szimmetrikusa az <strong>d'</strong> egyenesen található.
      </p>

      <center>
       <NextReactP5Wrapper sketch={sketch3} />
      </center>    


      <p className="text-justify">
        Ekképpen az <Latex>$A,B \in d$</Latex> pontok <strong>a</strong> egyenesre szerkesztett <Latex>$A',B'$</Latex> szimmetrikus pontjai egyértelműen meghatározzák a <strong>d'</strong> egyenest, azaz <Latex>$A',B' \in d'$</Latex> .
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch4} />
      </center>    




      <p className="text-justify">
        
        
        Végül, a <strong>d</strong> egyenes <strong>A</strong> pontra szerkesztett szimmetrikus egyenese azon <strong>d'</strong> egyenes, melyre fennáll, hogy az <strong>A</strong> pont mindkét egyenestől ugyanakkora távolságra található.</p>


    </div>
  )
};

export default SymmetryLine;
