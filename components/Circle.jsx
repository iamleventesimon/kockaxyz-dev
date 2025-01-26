import React from "react";
import 'katex/dist/katex.min.css';
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import Latex from "react-latex-next";

function sketch(p5) {
  

  p5.setup = () => {

    p5.createCanvas(550, 400, p5.WEBGL);
  }

  p5.draw = () => {
    p5.background(255);

    // noStroke();
    p5.noFill();
    p5.stroke(0);

  
    p5.stroke(0,0,0);
  
    p5.circle(0, 0, 300);
    p5.stroke(255,0,0);

    p5.line(0,0,150,0)
    p5.line(0,150,-150,0)
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
    // _text.line(100, 470, 650, 275);
    // _text.line(100, 470, 650, 475);
    // _text.line(100, 470, 50, 282);
    _text.circle(250, 250, 440);
    _text.text('.', 470, 250);
    _text.text('.', 230, 482);
    _text.text('.', 30, 282);
    _text.text('.', 240, 250);

    _text.textSize(48);

    _text.text('O', 210, 220);
    _text.text('A', 70, 250);
    _text.text('B', 420, 220);
    _text.text('C', 210, 450);

    _text.line( 250, 240, 40, 272);
    _text.line( 250, 240, 480, 240);




    
  }

  p5.draw = () => {
    
    p5.background(255);
    p5.noStroke();
    p5.texture(_text);
    p5.plane(200, 200);


  }
}

  
const Circle = () => { 
  
  return (
    <div>
      
      <div>
        <p className="text-justify">
        A kör azon pontok halmaza a síkon, amelyek az adott ponttól az adott távolságra vannak.
        ekképpen a kör középpontja és a kör sugara határozzák meg azt.
        A középpontot <strong>O</strong>-val vagy <strong>K</strong>-val jelöljük, a sugarat pedig <strong>r</strong>-rel.
        A  <strong>C(0,r)</strong> kör sugarának kétszeres a kör átmérője, melyet <strong>d</strong>-vel jelöljük.
        A körlemez azon pontok halmaza, amelyek a kör középpontjától sugárnyi vagy attól kisebb távolságra vannak.
        </p>
      </div>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />


      </center>    
      <p className="text-justify">
        A kör húrja a körvonal bármely két pontját összekötő szakasz. A leghosszabb húr az átmérő.

        A húr a körvonalat két részre bontja. Ezeknek a neve a körív. A körlemezt is két részre bontje egy húr, ezek a körszelet névre hallgatnak.

      </p>   

      <center>

        <NextReactP5Wrapper sketch={sketch2} />
      </center>
      <p className="text-justify">
        A kör középpontjából kiinduló két sugár a körlemezt két részre bontja. A keletkező részek neve a körcikk.
        Ha a sugarak <strong>A</strong> és <strong>B</strong> pontokban metszik a kört, akkor a kisebb körcikket <Latex>{'$\\overset{⌒}{AB}$'}</Latex> -vel jelöljük. Legyen a <strong>C</strong> pont szintén a körön értelmezve. Ekképpen a körcikket az  <Latex>{'$\\overset{⌒}{ACB}$'}</Latex> jelöléssel pontosíthajuk, ahol a <strong>C</strong> pont beiktatásával jelezzük, amennyibencaa nagyonn körcikre hivatkozunk. Azokat a szögeket amelyeknek csúcsa a kör középpontjában van, szárai a kör sugaraira illeszkednek középponti szögeknek nevezzük. A középponti szöghöz tartozó két sugár a köríven kijelöl egy körívet, a körlemezen pedig egy körcikket. Mi több értelmezés szerint a  <Latex>{'$\\overset{⌒}{AB}$'}</Latex> körcikk mértéke megyegyezik az  <Latex>$AOB \angle$</Latex> mértékével. Végül, de nem utolsó sorban, ha egy pont távolsága a kör középpontjától kisebb mint a kör sugara, akkor a pontot a kör belső pontjának nevezzük. Hasonlóan, ha egy pont távolsága a kör középpontjától nagyobb mint a kör sugara, akkor a pontot a kör külső pontjának nevezzük. Végül, ha egy pont távolsága a kör középpontjától egyenlő a kör sugarával, akkor a pontot a kör pontjának nevezzük
      </p>   

    </div>
  )
};

export default Circle;
