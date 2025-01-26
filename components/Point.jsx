import React from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { NextReactP5Wrapper } from "@p5-wrapper/next";

function sketch(p5) {
  
  p5.setup = () => {
    p5.createCanvas(550, 200, p5.WEBGL);
    p5.background(0);
  }

  p5.draw = () => {
    p5.background(255);

    // noStroke();
    p5.noFill();
    p5.stroke(0);

  
    p5.stroke(0,0,0);
  
    p5.circle(0, 0, 2);
    
  }
}
const Point = () => { 
  
  return (
    <div>
      
      <p className="text-justify">
      A pont a geometria egyik alapfogalm: lényegében egy helyet jelöl, amelynek kiterjedése nincs , és mérete is minden irányban nulla. 
      
       
      </p>
      
      <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>    
      
      <p className="text-justify">
      
        Rajzban általában kis folttal vagy két rövid, egymást metsző vonallal jelöljük és az angol ábécé nagybetűivel nevezzük el.
      </p>


    </div>
  )
};

export default Point;
