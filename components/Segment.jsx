import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  var boxSz = 120;
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
    _text.text('A', 50, 450);
    _text.text('B', 700, 450);


    _text.textSize(48);
    _text.text('[', 100, 283);
    _text.text(']', 650, 283);
    _text.text('(', 100, 483);
    _text.text(')', 650, 483);


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
    _text.text('A', 50, 450);
    _text.text('B', 700, 450);


    _text.textSize(48);
    _text.text('[', 100, 283);
    _text.text(')', 650, 283);
    _text.text('(', 100, 483);
    _text.text(']', 650, 483);


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

    _text.text('A', 50, 250);
    _text.text('B', 700, 250);
    _text.text('C', 50, 450);
    _text.text('D', 700, 450);


    _text.textSize(48);
    _text.text('[', 100, 283);
    _text.text(']', 650, 283);
    _text.text('[', 100, 483);
    _text.text(']', 650, 483);


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


function sketch4(p5) {
  
  let _text;

  p5.setup = () => {
    
    p5.createCanvas(400, 350, p5.WEBGL);

    _text = p5.createGraphics(800, 500);
    _text.textAlign(p5.CENTER);
    _text.textSize(64);
    _text.fill(0);
    _text.noStroke();

    _text.text('A', 50, 250);
    _text.text('B', 700, 250);
    _text.text('M', 300, 250);

    _text.textSize(128);
    _text.text('.', 100, 281);
    _text.text('.', 650, 281);
    _text.text('.', 375, 281);

    _text.stroke(1);
    _text.line(100, 270, 650, 275);
    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);
  }
}


const Segment = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
        Egy szakasz egy egyenesen levő két különböző pont közötti rész, ami az egyenes minden pontját tartalmazza a két végpont között.


      </p>
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
        
        Rögzített szakasz végpontjait pontok jelölik, így általában az angol ábécé nagybetűivel nevezzük el ezeket. Az <strong>[AB]</strong> szakasz
        zárt, amennyiben tartalmazza az <strong>A</strong> és  <strong>B</strong> pontokat, ekképpen
      </p>
      <center><Latex>$A,B \in [AB]$.</Latex></center>
      <br/>
      <p className="text-justify">
        Az <strong>(AB)</strong> szakasz
        nyílt, amennyiben sem az <strong>A</strong>, sem a  <strong>B</strong> pontot nem tartalmazza, azaz
      </p>
      <center><Latex>$A,B \not \in (AB)$.</Latex></center>
      <br/>



      <center>
       <NextReactP5Wrapper sketch={sketch2} />
      </center>    

      <p className="text-justify">
        Az <strong>[AB)</strong> szakasz félig zárt, félig
        nyílt, amennyiben az <strong>A</strong> pontot tartalmazza, a  <strong>B</strong> pontot pedig nem tartalmazza a szakasz, azaz
      </p>
      <center><Latex>$A \in [AB)$</Latex> illetve <Latex>$B \not \in [AB)$</Latex> </center>
      <p className="text-justify">
        Ugyankkor, az <strong>(AB]</strong> szakasz félig nyílt, félig
          zárt, amennyiben sem az <strong>A</strong> pontot nem, a  <strong>B</strong> pontot pedig tartalmazza a szakasz, azaz
      </p>
      <center><Latex>$A \not \in (AB]$</Latex> illetve <Latex>$B \in (AB]$</Latex> </center>
      <br/>

      <p className="text-justify">
      A szakaszok hosszát méréssel határozhatjuk meg. A mérést végezhetjük vonalzóval, úgy, hogy a vonalzó beosztásán lévő 0 pontot a szakasz egyik végpontjához illesztjük, 
      a másik végpont helyét pedig leolvassuk a vonalzóról. A szakasz hosszúságát jelölhetjük a két végpontjának betűjelével, vagy a szakasz jelével. Például <strong>AB = 20 cm</strong> vagy  <strong>d = 20 cm</strong>.
      </p>

      <p className="text-justify">
      A szakaszok hosszát méréssel határozhatjuk meg. A mérést végezhetjük vonalzóval, úgy, hogy a vonalzó beosztásán lévő 0 pontot a szakasz egyik végpontjához illesztjük, 
      a másik végpont helyét pedig leolvassuk a vonalzóról. A szakasz hosszúságát jelölhetjük a két végpontjának betűjelével, vagy a szakasz jelével. Például <strong>AB = 20 cm</strong> vagy  <strong>d = 20 cm</strong>.
      </p>


      <center>
       <NextReactP5Wrapper sketch={sketch3} />
      </center> 

      <p className="text-justify">
        Az <strong>[AB]</strong> és a <strong>[CD]</strong> zárt szakaszokat kongruensnek nevezzük, ha hosszúságuk megegyezik és minkét szakasz mindkét végpontja eleme a szakaszoknak. Hasonlóan nyílt szakaszok esetén,
        az <strong>(AB)</strong> és a <strong>(CD)</strong> nyílt szakaszokat kongruensnek nevezzük, ha hosszúságuk megegyezik és minkét szakasz mindkét végpontjai nem eleme a szakaszoknak.
        Végül, de nem utolsó sorban az <strong>(AB]</strong> és a <strong>(CD]</strong> félig nyílt és félig zárt szakaszokat kongruensnek nevezzük, ha hosszúságuk megegyezik és minkét szakasz egyik végpontja eleme a másik pedig nem eleme a szakaszoknak.
      </p>

      <center>
       <NextReactP5Wrapper sketch={sketch4} />
      </center> 


      <p className="text-justify">
        Az <strong>M</strong> az <strong>[AB]</strong> szakasz felezőpontja, ha ugyanakkor távolságra található a szakasz mindkét végpontjától, azaz  <strong>AM = BM</strong>.
      </p>


    </div>
  )
};

export default Segment;
