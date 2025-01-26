import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import Link from "next/link";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 150, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    _text.text('d', 50, 250);

    _text.text('M', 350, 250);
    _text.text('N', 550, 250);
    _text.text('P', 650, 370);


    _text.textSize(120);
    _text.text('.', 350, 275);
    _text.text('.', 550, 275);
    _text.text('.', 690, 350);


    _text.stroke(1);
    _text.line(0, 270, 800, 270);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}


function sketch2(p5) {
  
  var boxSz = 120;
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 150, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();
    _text.text('d', 50, 250);

    _text.text('M', 350, 250);
    _text.text('N', 550, 250);
    _text.text('P', 650, 250);


    _text.textSize(120);
    _text.text('.', 350, 275);
    _text.text('.', 550, 275);
    _text.text('.', 690, 275);


    _text.stroke(1);
    _text.line(0, 270, 800, 270);

    
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
    p5.createCanvas(800, 150, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('M', 300, 250);
    _text.text('N', 500, 250);
    _text.text('P', 650, 350);

    _text.textSize(120);
    _text.text('.', 350, 275);
    _text.text('.', 550, 275);
    _text.text('.', 690, 355);

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
    _text.textSize(48);
    _text.fill(0);
    _text.noStroke();
    _text.text('α', 130, 350);


    _text.textSize(120);
    _text.text('.', 390, 230);


    _text.stroke(1);


    _text.line(70, 370, 110, 110);
    _text.line(110, 110, 780, 110);

    _text.line(70, 370, 740, 370);

    _text.line(780, 110, 740, 370);


    _text.textSize(48);
    _text.text('d', 200, 50);
    _text.text('O', 350, 210);
    _text.text('a', 550, 200);
    _text.text('b', 550, 260);
    _text.text('c', 370, 340);
    _text.stroke(255, 0, 0);
    
    _text.strokeWeight(3);
    _text.line(120, 75, 740, 55);
    _text.line(100, 295, 720, 265);
    _text.line(100, 235, 720, 205);
    _text.line(320, 362, 420, 155);
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
    p5.createCanvas(800, 150, p5.WEBGL);

    
    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(48);
    _text.fill(0);
    _text.noStroke();
    _text.text('a  b',350, 190);


    _text.textSize(120);

    _text.stroke(3);

    _text.stroke(0, 0, 0);
    _text.line(120,270, 740, 150);

    _text.textSize(48);
    _text.text('d', 200, 50);
    _text.stroke(255, 0, 0);
    
    _text.strokeWeight(3);
    _text.line(120,275, 740, 155);
  }



  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }

  
}
const Line = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        Az egyenes a pont és a sík mellett a geometria egyik alapfogalma. Mindkét irányban végtelen, végtelenül keskeny vonal. Két pont közötti legrövidebb út szakasz.

      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
        
        Rajzban általában az angol ábécé kisbetűivel vagy az egyenes két pontjának kombinációjával nevezzük el. Amennyiben az <strong>M</strong> pont a 
        <strong>d</strong> egyenesen van, akkor az alábbi jelölést használjuk
      </p>
      <center><Latex>$M \in d$.</Latex></center>
      <br/>
      <p className="text-justify">
        A <strong>P</strong> pontot nem tartalmazza a <strong>d</strong> egyenes, melyet így
      </p>

      <center><Latex>$P \not \in d$.</Latex></center>

      <p className="text-justify">
        jelöléssel értelmezünk. Az <strong>M</strong>, <strong>N</strong> és <strong>P</strong> pontok kollineáris, amennyiben ugyanarra a <strong>d</strong> egyenesre illeszkednek.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    


      <p className="text-justify">
        Ha az <strong>M</strong>, <strong>N</strong> és <strong>P</strong> pontok nem illeszkednek egy egyenesre, akkor nem kollineárisak.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch3} />
      </center>   

      <p className="text-justify">
        Két egyenest koplanárisnak nevezünk, ha létezik egy olyan <Link href="/sik">sík</Link>, amelyben mindkettő benne van. Ellenkező
        esetben nem koplanárisak.
        Legyenek <strong>a</strong>, <strong>b</strong>,  és <strong>c</strong> egyenesek koplanáriasak. 
        Továbbá legyen <strong>d</strong> egyenes nem koplanáris az <strong>a</strong>, <strong>b</strong>,  és <strong>c</strong> egyenesekkel.

      </p> 


      <center>
       <NextReactP5Wrapper sketch={sketch4} />
      </center>    


      <p className="text-justify">

        Ha <strong>a</strong> és <strong>b</strong> párhuzamosak, akkor az
      </p>
      <center><Latex>$a \| b$</Latex> vagy <Latex>$a \cap b = \emptyset$</Latex></center>

      <p className="text-justify">
        jelöléseket használjuk. Ha a két egyenes metszi egymást, akkor 

      </p>
      <center><Latex>$a 	\nparallel c$</Latex> vagy <Latex>$a \cap b = \lbrace O \rbrace$</Latex></center>


      <p className="text-justify">
        jelöléseket használhatjuk, ahol  <strong>O</strong> a metszéspont. 

      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch5} />
      </center>    


      <p className="text-justify">

        Végül, de nem utolsó sorban, ha az <strong>a</strong> és <strong>b</strong> egyenesek egybeesnek, akkor az 

      </p>

      <center><Latex>$a = b$</Latex></center>


      <p className="text-justify">
        jelölést használjuk.
      </p>


    </div>
  )
};

export default Line;
