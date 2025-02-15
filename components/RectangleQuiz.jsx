import React, { useState } from "react";
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
// import { NextReactP5Wrapper } from "@p5-wrapper/next";

// function sketch(p5) {
  
//   var boxSz = 120;

//   p5.setup = () => {
//     p5.createCanvas(550, 400, p5.WEBGL);
//     p5.background(0);
//   }

//   p5.draw = () => {
//     p5.background(255);
//     // p5.rotateY(p5.frameCount * 0.01);

//     p5.stroke(0,0,0);
//     //front
//     p5.line(-boxSz, -boxSz*0.6, boxSz, boxSz*1.7, -boxSz*0.6, boxSz);
//     p5.line(-boxSz, boxSz, boxSz, boxSz*1.7, boxSz, boxSz);
    
//     p5.line(-boxSz, -boxSz*0.6, boxSz, -boxSz, boxSz, boxSz);
//     p5.line(boxSz*1.7, -boxSz*0.6, boxSz, boxSz*1.7, boxSz, boxSz);


//     p5.stroke(255,0,0);
//     //diagonals
//     p5.line(-boxSz, -boxSz*0.6, boxSz, boxSz*1.7, boxSz, boxSz);


//   }
// }
const RectangleQuiz = () => { 

  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState([]);
  const [errors, setErrors] = useState({
    error1: "",
    error2: "",
    error3: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleRadioChange = (event) => {
    setAnswer1(event.target.value);
    if (submitted) {
      setErrors({ ...errors, error1: "" });
    }
  };

  const handleInputChange = (event) => {
    setAnswer2(event.target.value);
    if (submitted) {
      setErrors({ ...errors, error2: "" });
    }
  };

  const handleCheckboxChange1 = (event) => {
    const value = event.target.value;
    setAnswer3((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

 

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    const newErrors = {
      error1:
        answer1 === "30"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Jelölj be egy választ!"
            : "Hibás! A helyes érték: 30",
      error2:
        answer2.trim() === "35"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes érték: 35.",
      error3:
        answer3.length === 1 && answer3.includes("2")
          ? "Helyes válasz, gratulálunk!"
          : answer3.length === 0
            ? "Jelöld meg ki a helyes válaszokat!"
            : "Hibás! Próbáld újra.",
    };

    setErrors(newErrors);
  };

  
  return (
    <div>
      
      <p className="text-justify">
        A téglalap egy olyan paralelogramma, amelynek minden szöge egyenlő.
        Tulajdonságai alapján: átlói felezik egymást és egyenlő hosszúak, minden szöge derékszög.
        Továbbá, középpontosan szimmetrikus alakzat úgy, hogy szimmetria középpontja az átlók metszéspontja.
        A téglalap tengelyesen szimmetrikus alakzat is. 
        Két szimmetria tengelye van: az oldalfelező merőlegesei, ezeknek az egyeneseknek a téglalapba eső szakaszát pedig középvonalnak nevezzük.        
      </p>
      
      {/* <center>
       <NextReactP5Wrapper sketch={sketch} />
      </center>     */}

      <div className="quiz-container">
      <form onSubmit={handleSubmit} className="quiz-form">
        {/* Question 1 */}

        <div className="question">
          <p>
            <strong>
              1. Ha egy téglalap oldalhosszai 5 cm illetve 6 cm, akkor területe
              hány cm<sup>2</sup>?
            </strong>
          </p>
        </div>
          <div className="answer-options">
            <label>
              <input
                type="radio"
                name="answer1"
                value="20"
                checked={answer1 === "20"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                {" "}20 cm<sup>2</sup>
              </span>
            </label>

            <br/>
            <label>
              <input
                type="radio"
                name="answer1"
                value="25"
                checked={answer1 === "25"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                {" "}25 cm<sup>2</sup>
              </span>
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="answer1"
                value="30"
                checked={answer1 === "30"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                {" "}30 cm<sup>2</sup>
              </span>
            </label>
          </div>
        <center>


          {submitted && errors.error1 &&  errors.error1.includes("Helyes") && (
            <p
              style={{
                color: "green",
              }}
            >
              {errors.error1}
              
            </p>
          )}
          {submitted && errors.error1 && !errors.error1.includes("Helyes") && answer1.length != 0 && (
            <p
              style={{
                color: "red",
              }}
            >
              {errors.error1}{" "}cm<sup>2</sup>.
            </p>
          )}
          {submitted && errors.error1 && !errors.error1.includes("Helyes") && answer1.length == 0 && (
            <p
              style={{
                color: "red",
              }}
            >
              {errors.error1}
            </p>
          )}
        </center>
        {/* Question 2 */}

        <div className="question">
          <p>
            <strong>
              2. Ha egy téglalap oldalhosszai 5 cm illetve 7 cm akkor kerülete
              hány cm?
            </strong>
          </p>
        </div>

        <center>
          <input
            type="text"
            value={answer2}
            onChange={handleInputChange}
            className="input-field"
            placeholder="Írd be a választ"
            style={{
              padding: "5px",
              fontSize: "16px",
              textAlign: "center",
            }}
          />
          <br />
          <br />

          {submitted && errors.error2 && (
            <p
              style={{
                color: errors.error2.includes("Helyes") ? "green" : "red",
              }}
            >
              {errors.error2}
            </p>
          )}
        </center>
        {/* Question 3 */}
        <div className="question">
          <p>
            <strong>
              <Latex>
                3. Jelölje $a$ és $b$ a téglalap oldalát, átlóját pedig $d$. A
                téglalap területe:{" "}
              </Latex>
            </strong>
          </p>
          <label>
            <input
              type="checkbox"
              value="1"
              checked={answer3.includes("1")}
              onChange={handleCheckboxChange1}
            />
            {" "}
            A téglalap területe az oldalak négyzetének összegével egyenlő, azaz
            {" "}
            <Latex>
              $T = a^2 + b^2$
            </Latex>.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer3.includes("2")}
              onChange={handleCheckboxChange1}
            />
            {" "}
            A téglalap területe az oldalak szorzatával egyenlő, azaz
            {" "}
            <Latex>
              $T = a \cdot b$
            </Latex>.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer3.includes("3")}
              onChange={handleCheckboxChange1}
            />

           {" "}Ha téglalap átlója adott, azaz  <Latex>$d^2 = a^2 + b^2 $</Latex> akkor {" "}
           <Latex>{'$T = d \\frac{a+b}{2}$'}</Latex> .
          </label>
          <br />
          <br />
        </div>
        <center>
          {submitted && errors.error3 && (
            <p
              style={{
                color: errors.error3.includes("Helyes") ? "green" : "red",
              }}
            >
              {errors.error3}
            </p>
          )}
        </center>

      
        <center>
          <button type="submit" className="nav-link call-to-action-button ">
            Mutasd az eredményt!
          </button>
        </center>
      </form>
    </div>

    </div>
  )
};

export default RectangleQuiz;
