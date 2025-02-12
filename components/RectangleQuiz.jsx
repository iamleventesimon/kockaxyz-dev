import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const RectangleQuiz = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState([]);
  const [answer4, setAnswer4] = useState([]);
  const [errors, setErrors] = useState({
    error1: "",
    error2: "",
    error3: "",
    error4: "",
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

  const handleCheckboxChange2 = (event) => {
    const value = event.target.value;
    setAnswer4((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Check answers and generate error messages
    const newErrors = {
      error1:
        answer1 === "30"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 30.",
      error2:
        answer2.trim() === "32"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 32.",
      error3:
        answer3.length === 2 && answer3.includes("2") && answer3.includes("3")
          ? "Helyes válasz, gratulálunk!"
          : answer3.length === 0
            ? "Kérlek válaszd ki a helyes válaszokat!"
            : "Hibás válasz! Próbáld újra.",
    };

    setErrors(newErrors);
  };

  return (
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
        <center>
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
                20 cm<sup>2</sup>
              </span>
            </label>
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
                25 cm<sup>2</sup>
              </span>
            </label>
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
                30 cm<sup>2</sup>
              </span>
            </label>
          </div>

          {submitted && errors.error1 && (
            <p
              style={{
                color: errors.error1.includes("Helyes") ? "green" : "red",
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
              2. Ha egy téglalap oldalhosszai 5 cm illetve 6 cm akkor kerülete
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
            <Latex>
              {" "}
              A téglalap területe az oldalak négyzetének összegével egyenlő: $A
              \neq a^2 + b^2$
            </Latex>
          </label>
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer3.includes("2")}
              onChange={handleCheckboxChange1}
            />
            <Latex>
              A téglalap területe az oldalak szorzatával egyenlő: $A = a \cdot b
              $
            </Latex>
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer3.includes("3")}
              onChange={handleCheckboxChange1}
            />

            <Latex>A téglalap átlója adott: $d^2 = a^2 + b^2 $</Latex>
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
          {submitted && errors.error4 && (
            <p
              style={{
                color: errors.error4.includes("Helyes") ? "green" : "red",
              }}
            >
              {errors.error4}
            </p>
          )}
        </center>
        <center>
          <button type="submit" className="nav-link call-to-action-button ">
            Ellenőrizd az összes választ
          </button>
        </center>
      </form>
    </div>
  );
};

export default RectangleQuiz;
