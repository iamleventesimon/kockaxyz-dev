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
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 700, 250);
    _text.text('O', 50, 450);
    _text.text('B', 700, 450);



    _text.textSize(184);

    _text.text('.', 650, 282);
    _text.text('.', 100, 482);
    _text.text('.', 650, 482);


    _text.stroke(1);
    _text.line(100, 470, 650, 275);
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
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 50, 250);
    _text.text('B', 700, 250);
    _text.text('O', 300, 250);
    _text.text('O', 50, 450);
    _text.text('B', 700, 450);
    _text.text('A', 400, 450);


    _text.textSize(184);

    _text.text('.', 100, 282);
    _text.text('.', 325, 282);
    _text.text('.', 650, 282);
    _text.text('.', 100, 482);
    _text.text('.', 425, 482);
    _text.text('.', 650, 482);


    _text.stroke(1);
    _text.line(100, 270, 650, 275);
    _text.line(100, 470, 650, 475);


    
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

    _text.text('A', 700, 250);
    _text.text('O', 50, 450);
    _text.text('M', 410, 320);
    _text.text('N', 410, 450);
    _text.text('P', 530, 420);
    _text.text('B', 700, 450);



    _text.textSize(184);

    _text.text('.', 650, 282);
    _text.text('.', 100, 482);
    _text.text('.', 650, 482);

    _text.text('.', 450, 482);
    _text.text('.', 520, 452);
    _text.text('.', 220, 252);
    _text.text('.', 450, 352);


    _text.stroke(1);
    _text.line(100, 470, 650, 275);
    _text.line(100, 470, 650, 475);

    
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
    p5.createCanvas(800, 400, p5.WEBGL);

    _text = p5.createGraphics(800, 600);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('α', 470, 140);
    _text.text('β', 170, 340);
    _text.text('γ', 290, 550);

    _text.textSize(184);

    _text.text('.', 100, 242);
    _text.text('.', 650, 390);
    _text.text('.', 100, 390);

    _text.text('.', 650, 22);
    _text.text('.', 100, 169);
    _text.text('.', 650, 169);

    _text.text('.', 100, 469);
    _text.text('.', 200, 592);
    _text.text('.', 650, 592);

    _text.stroke(3);

    _text.line(101, 162, 650, 15);
    _text.line(101, 160, 650, 160);
    _text.line(100, 382, 650, 382);
    _text.line(101, 382, 101, 240);

    _text.line(200, 584, 650, 584);
    _text.line(200, 584, 100, 464);

    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}



const Angle = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
          A sík egy pontjából kiinduló két zárt félegyenes a síkot két tartományra osztja: az egyik tartomány és a két félegyenes szöget alkot.


      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    

      
      <p className="text-justify">
        
        Jelöljük az <strong>O</strong> ponttal a két zárt félegyenes közös pontját, ugyanakkor értelmezzük az <strong>A</strong> és  <strong>B</strong> pontokat a két félegyenesen.
        Ekképpen az 
      </p>
      <center><Latex>$AOB \angle, BOA \angle, AÔB, BÔA, Ô$</Latex></center>
      <br/>

      <p className="text-justify">
        jelölések egyikével értelmezzük a szöget, ahol a betűhármasok esetén mindig középre kerül az <strong>O</strong>.
        Ha <strong>[OA</strong> és <strong>[OB</strong> félegyenesek ellentétesek, akkor a szöget egyenesszögnek nevezzük. 
        Ha <strong>[OA</strong> és <strong>[OB</strong> megyeznek akkor az <strong>Ô</strong> nullszög.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

      <p className="text-justify">

        Ha egy <strong>M</strong> vagy <strong>N</strong> pont a szög  valamenely szárára esik belsejébe esik, akkor azt mondjuk, hogy eleme a szögnek. Továbbá, ha a <strong>P</strong> a szög két szára közé esik, akkor belső pontnak nevezzük. Ugyanakkor, a szög szárain kívül eső <strong>Q</strong> pontot külső pontnak nevezzük.

      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch3} />
      </center> 


      <p className="text-justify">

        A szögeket többféle mértékegységben fejezik ki attól függően, hogy milyen értéket választottunk a k együtthatónak: A fok, amelyet egy felső helyzetű körrel jelölnek (°), a teljes kör 1/360-ad része, tehát a teljes kör mértéke 360°.
        Ekképpen az egyenesszög mértéke mindenkor 180°, míg a nullszög mértéke 0°. Végül, de nem utolsó sorban, A fok 1/60-ad része az ívperc, melynek jelölése:  ′ . Az ívperc 1/60-ad része az ívmásodperc, melynek jelölése:  ″
      </p>

      <p className="text-justify">

        A szögek felosztása szerint megkülönböztetünk null-, hegyes-, derék-, tompa- illetve teljes szögeket.
        <ul>

          <li> Nullszög: mértéke 0°.</li>
          <li>Hegyesszög: mértéke 0°-nál nagyobb, de 90°-nál kisebb szög.</li>
          <li>Derékszög: negyedkörívhez tartozó szög, mértéke 90°.</li>
          <li>Tompaszög: mértéke 90°-nál nagyobb, de 180°-nál kisebb szög.</li>
          <li>Egyenesszög: félkörívhez tartozó szög, szárai egyenest alkotnak. Az egyenesszög két derékszög összege, azaz mértéke 180°.</li>

        </ul>
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch4} />
      </center> 


      <p className="text-justify">

        Továbbá, a szögek jelölésére a görög ábébé kisbetűit is használjuk, mint például a fenti ábra esetében a hegyesszög esetén az <strong>α</strong>-t, a derékszögnél a <strong>β</strong>-t és <strong>γ</strong>-t a tompaszögnél.
        Végül, de nem utolsó sorban, egy az <Latex>$AOB \angle$</Latex>  szög mérttékét <Latex>$m(AOB \angle)$</Latex>-vel jelöljük.
      </p>

      

    </div>
  )
};

export default Angle;
