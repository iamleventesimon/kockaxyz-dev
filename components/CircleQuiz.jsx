import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const CircleQuiz = () => {
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
        answer1 === "25"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 25.",
      error2:
        answer2.trim() === "20"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 20cmπ.",
      error3:
        answer3.length === 2 && answer3.includes("1") && answer3.includes("3")
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
              1. Ha egy kör sugara 5 cm, akkor területe hány cm<sup>2</sup>?
            </strong>
          </p>
        </div>
        <center>
          <div className="answer-options">
            <label>
              <input
                type="radio"
                name="answer1"
                value="5"
                checked={answer1 === "5"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">5π</span>
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
              <span className="answer-text">25π</span>
            </label>
            <label>
              <input
                type="radio"
                name="answer1"
                value="125"
                checked={answer1 === "125"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">125π</span>
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
              2. Ha egy átlója sugara 10cm, akkor mennyi kerülete?
            </strong>
          </p>
        </div>
        <center>
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
        </center>
        {/* Question 3 */}

        <div className="question">
          <p>
            <strong>3. A kör kerülete</strong>
          </p>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              value="1"
              checked={answer3.includes("1")}
              onChange={handleCheckboxChange1}
            />
            A sugár kétszeresének és a π-nek a szorzata.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer3.includes("2")}
              onChange={handleCheckboxChange1}
            />
            Az átló kétszeresének és a π-nek a szorzata
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer3.includes("3")}
              onChange={handleCheckboxChange1}
            />
            Az átló a π-nek a szorzata.
          </label>
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

export default CircleQuiz;
