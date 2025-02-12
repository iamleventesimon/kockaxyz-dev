import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const SquareQuiz = () => {
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
        answer1 === "16"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 16.",
      error2:
        answer2.trim() === "48"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 48.",
      error3:
        answer3.length === 3 &&
        answer3.includes("1") &&
        answer3.includes("2") &&
        answer3.includes("3")
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
              1. Ha egy négyzet oldalhossza 6 cm, akkor területe hány cm
              <sup>2</sup> ?
            </strong>
          </p>
        </div>
        <center>
          <center>
            <div className="answer-options">
              <label>
                <input
                  type="radio"
                  name="answer1"
                  value="16"
                  checked={answer1 === "16"}
                  onChange={handleRadioChange}
                  className="radio-input"
                />
                <span className="answer-text">
                  16 cm<sup>2</sup>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="answer1"
                  value="64"
                  checked={answer1 === "64"}
                  onChange={handleRadioChange}
                  className="radio-input"
                />
                <span className="answer-text">
                  64 cm<sup>2</sup>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="answer1"
                  value="128"
                  checked={answer1 === "128"}
                  onChange={handleRadioChange}
                  className="radio-input"
                />
                <span className="answer-text">
                  128 cm<sup>2</sup>
                </span>
              </label>
            </div>
          </center>
        </center>
        <center>
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
              2. Ha egy négyzet oldalhossza 12cm, akkor kerülete hány cm?
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
        <center>
          {/* Question 3 */}
          <div className="question">
            <p>
              <strong>
                <Latex>
                  3. Jelölje a négyzet oldalát $a$ átlóját pedig $d$
                </Latex>
                . A négyzet területe:
              </strong>
            </p>
            <label>
              <input
                type="checkbox"
                value="1"
                checked={answer3.includes("1")}
                onChange={handleCheckboxChange1}
              />
              A négyzet területe az oldala négyzetével egyenlő:
              <Latex>$T = a^{2}$</Latex>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="2"
                checked={answer3.includes("2")}
                onChange={handleCheckboxChange1}
              />
              Ha a négyzet átlója adott: <Latex>{"$T = \\frac{d^2}{2}$"}</Latex>
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                value="3"
                checked={answer3.includes("3")}
                onChange={handleCheckboxChange1}
              />
              Ugyanakkor, ha pedig a kerület adott:{" "}
              <Latex>{"$T = \\frac{K^2}{16}$"}</Latex>
            </label>
          </div>
        </center>
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
        {/* Question 4 */}

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

export default SquareQuiz;
