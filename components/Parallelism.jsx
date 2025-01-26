import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  let _text;

  p5.setup = () => {
    p5.createCanvas(800, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.fill(0);
    _text.noStroke();

    _text.textSize(64);

    _text.text('d', 480, 190);
    _text.text('d', 50, 50);
    _text.textSize(48);
    _text.text('1', 85, 60);
    _text.textSize(64);
    _text.text('d', 50, 250);
    _text.textSize(48);
    _text.text('2', 85, 260);
    _text.textSize(64);
    _text.text('d', 50, 430);
    _text.textSize(48);
    _text.text('3', 85, 440);
    _text.textSize(64);




    _text.stroke(1);
    _text.line(100, 75, 650, 75);
    _text.line(600, 5, 350, 595);
    _text.line(100, 275, 650, 275);
    _text.line(100, 470, 650, 475);

    
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
    _text.fill(0);
    _text.noStroke();

    _text.textSize(64);

    _text.text('A', 480, 50);

    _text.textSize(36);

    _text.text('1   4', 580, 65)
    _text.text('2   3', 560, 110)



    _text.textSize(64);

    _text.text('B', 350, 350);

    _text.textSize(36);

    _text.text('4   1', 450, 365)
    _text.text('3   2', 430, 410)

    _text.textSize(54);
    _text.text('a', 470, 230);
    _text.text('d', 50, 50);
    _text.textSize(48);
    _text.text('1', 85, 60);
    _text.textSize(64);
    _text.text('d', 50, 350);
    _text.textSize(48);
    _text.text('2', 85, 360);
    _text.textSize(64);




    _text.stroke(1);
    _text.line(100, 75, 650, 75);
    _text.line(600, 5, 350, 595);
    _text.line(100, 375, 650, 375);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}



const Parallelism = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
      Az euklideszi geometriában két egyenes párhuzamos, ha egysíkúak, és nem metszik egymást. 
      Ha a <Latex>$d_1$</Latex> és <Latex>$d_2$</Latex> egyenesek párhuzamosak, akkor a párhuzamossági reláció jelölése szerint <Latex>$d_1 \| d_2$</Latex> vagy <Latex>$d_1 \cap d_2 = \emptyset$</Latex>.
      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      <p className="text-justify">
        A párhuzamossági reláció tranzití, azaz ha <Latex>$d_1 \| d_2$</Latex> és <Latex>$d_1 \| d_3$</Latex>,akkor <Latex>$d_1 \| d_3$</Latex>. Hasonlóan, <Latex>$d \cap d_1 \neq \emptyset$</Latex> és <Latex>$d_1 \| d_2$</Latex>, akkor <Latex>$d \cap d_2 \neq \emptyset$</Latex>.

      </p>

      <p className="text-justify">
        A <Latex>$d_1$</Latex> és <Latex>$d_2$</Latex> és az őket metsző  <Latex>$a$</Latex> egyenes esetén , az alábbi szögpárokat értelmezzük:
        <ul>
        <li> <Latex>$A_3$</Latex> és  <Latex>$B_4$</Latex> illetve <Latex>$A_2$</Latex> és  <Latex>$B_1$</Latex> belső váltószögek,</li>
        <li> <Latex>$A_4$</Latex> és  <Latex>$B_3$</Latex> illetve <Latex>$A_1$</Latex> és  <Latex>$B_2$</Latex> külső váltószögek,</li>
        <li> <Latex>$A_2$</Latex> és  <Latex>$B_4$</Latex> illetve <Latex>$A_3$</Latex> és  <Latex>$B_1$</Latex> belső szögpár a metsző egyenesen ugyanazon oldalán,</li>
        <li> <Latex>$A_4$</Latex> és  <Latex>$B_2$</Latex> illetve <Latex>$A_1$</Latex> és  <Latex>$B_3$</Latex> külső szögpár a metsző egyenesen ugyanazon oldalán,</li>
        </ul>
      </p>

      ahol <Latex>$A_1$</Latex>,<Latex>$A_2$</Latex>,<Latex>$A_3$</Latex>,<Latex>$A_4$</Latex> illeve  <Latex>$B_1$</Latex> ,<Latex>$B_2$</Latex> ,<Latex>$B_3$</Latex> ,<Latex>$B_4$</Latex> 
      az <Latex>$A$</Latex> és <Latex>$B$</Latex> körül található szögek a lenti számozás szerint. 

      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

      <p className="text-justify">
        Végül, de nem utolsó sorban, ekképpen teljesül továbbá, hogy az <Latex>$(A_4,B_1),(A_3,B_2),(A_2,B_3)$</Latex> illetve az <Latex>$(A_1,B_4)$</Latex> szögpárok megyegyeznek.
      
      </p>

      

    </div>
  )
};

export default Parallelism;
