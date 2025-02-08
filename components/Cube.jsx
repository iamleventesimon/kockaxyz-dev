import React from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import { useUser } from "@auth0/nextjs-auth0/client";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

/*function sketch(p5) {
  
  var boxSz = 120;
  var numSpheres = 10;
  var x = [];
  var y = [];
  var z = [];
  var t = 0.0;

  p5.setup = () => {
    p5.createCanvas(550, 400, p5.WEBGL);
    p5.background(0);

    for (var i = 0; i < numSpheres; i++) {
      // x[i] = random(-boxSz, boxSz);
      // y[i] = random(-boxSz, boxSz);
      // z[i] = random(-boxSz, boxSz);
    }
    // println(x);
    // println(y);
    // println(z);
  }

  p5.draw = () => {
    p5.background(255);
    //translate(0,0,-100);
    p5.rotateY(p5.frameCount * 0.01);

    p5.stroke(0,0,0);
    //front
    p5.line(-boxSz, -boxSz, boxSz, boxSz, -boxSz, boxSz);
    p5.line(-boxSz, boxSz, boxSz, boxSz, boxSz, boxSz);
    
    p5.line(-boxSz, -boxSz, boxSz, -boxSz, boxSz, boxSz);
    p5.line(boxSz, -boxSz, boxSz, boxSz, boxSz, boxSz);

    //back
    p5.line(-boxSz, -boxSz, -boxSz, boxSz, -boxSz, -boxSz);
    p5.line(-boxSz, boxSz, -boxSz, boxSz, boxSz, -boxSz);
    p5.line(-boxSz, -boxSz, -boxSz, -boxSz, boxSz, -boxSz);
    p5.line(boxSz, -boxSz, -boxSz, boxSz, boxSz, -boxSz);

    //left top
    p5.line(-boxSz, -boxSz, boxSz, -boxSz, -boxSz, -boxSz);
    //left bottom
    p5.line(-boxSz, boxSz, -boxSz, -boxSz, boxSz, boxSz);
    //right top
    p5.line(boxSz, -boxSz, boxSz, boxSz, -boxSz, -boxSz);
    // // right bottom
    p5.line(boxSz, boxSz, -boxSz, boxSz, boxSz, boxSz);



    p5.stroke(255,0,0);
    //diagonals
    p5.line(-boxSz, boxSz, -boxSz, boxSz, -boxSz, -boxSz);
    p5.stroke(0,255,0);
    p5.line(boxSz, boxSz, boxSz, -boxSz, -boxSz, -boxSz);

    for (var i = 0; i < numSpheres; i++) {
      p5.push();
      p5.translate(x[i], y[i], z[i]);
      p5.sphere(boxSz / 50, 8);
      p5.pop();
    }

  }
} */
const Cube = () => {
  const { user } = useUser();

  return (
    <div>
      <div>
        <p className="text-justify">
          A kocka egy olyan téglatest, amelynek minden éle egyenlő. A kocka az
          öt szabályos test egyike, így minden éle, élszöge és lapszöge egyenlő.
          Élszögei és lapszögei egyaránt 90 fokosak. A kockának 8 csúcsa, 12
          azonos hosszúságú éle és 6 egybevágó lapja van. Oldalai az{" "}
          <strong>a</strong> oldalhosszúságú négyzetek.
        </p>
        {/* <center>
          {user && (
          <audio controls>
            <source
              src={"https://kocka.xyz/sound/kockaIn.mp3"}
            />
            Your browser does not support the audio element.
          </audio>
          )}

          {!user && (
          <audio controls>
            <source
              src={"https://kocka.xyz/sound/kockaOut.mp3"}
            />
            Your browser does not support the audio element.
          </audio>
          )}
        </center> */}

        <br />
        <p className="content">
          Jelöljük a kocka oldalainak átlóját <strong>d</strong>-vel, melyet
          pirossal emeltünk ki. A testátlóját pedig <strong>D</strong>-vel,
          amelyet zölddel.
        </p>
        <center>
          <Latex>$d = a \sqrt{2}$.</Latex>
        </center>
        <p>illetve</p>
        <center>
          <Latex>$D = a \sqrt{3}$.</Latex>
        </center>
        <p>
          <br />
          Ezeket a fentiek szerint kaphatjuk meg, ha ismerjük az kocka
          oldalhosszát.
        </p>
      </div>
      <br />

      <center>{/*<NextReactP5Wrapper sketch={sketch} />*/}</center>

      <p className="text-justify">
        A kocka térfogata legegyszerűbben az oldalak szorzataként kapható meg.
      </p>

      <center>
        <Latex>$V = a^{3}$.</Latex>
      </center>
      <br />
      {!user && (
        <p className="text-justify">
          Csatlakozz az <strong>e-mail</strong> címeddel és tudj meg többet a
          kocka térfogatáról, felületéről illetve a belé írható gömbről.
        </p>
      )}
      {user && (
        <div>
          <p className="text-justify">
            Ha nem ismerjük az oldalak hosszát, akkor ezekben az esetekben két
            lehetőségünk van: kiszámíthatjuk az oldal hosszát és onnan
            alkalmazzuk a fentebbi képletet, vagy pedig használhatjuk az alábbi
            képleteket.
          </p>
          <center>
            <Latex>{"$V = \\frac{d^3}{\\sqrt{8}}$"}</Latex>
          </center>
          <p>
            <br />
            illetve
          </p>
          <center>
            <Latex>{"$V = \\frac{D^3}{\\sqrt{27}}$"}</Latex>
          </center>
          <p>
            <br />A kocka felszíne a hat határoló négyzet területének
            összegeként számítható ki.
          </p>
          <center>
            <Latex>{"$A = 6a^{2}$"}</Latex>
          </center>

          <p className="text-justify">
            <br />A térfogathoz hasonlóan itt is előfordulhat, hogy a lapátló
            vagy a testátló adott. Itt a felhasználható képletek a következők:
          </p>
          <center>
            <Latex>{"$A = 3d^{2}$"}</Latex>
          </center>

          <p>
            <br />
            illetve
          </p>
          <center>
            <Latex>{"$A = 3D^{2}$"}</Latex>
          </center>

          <p>
            <br />
            Minden kocka köré írható egy gömb. A gömb <strong>R</strong>-rel
            jelölt sugara a testátló felével egyezik meg:
          </p>

          <center>
            <Latex>{"$R = \\frac{\\sqrt{3}a}{2}$"}</Latex>
          </center>

          <p>
            <br />A kockába is írtható egy gömb, ennek pedig az oldalhosszúság
            felével egyezik meg a sugara.
          </p>
          <center>
            <Latex>{"$r = \\frac{a}{2}$"}</Latex>
          </center>
        </div>
      )}
    </div>
  );
};

export default Cube;
