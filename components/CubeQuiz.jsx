import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const CubeQuiz = () => {
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
  };

  const handleInputChange = (event) => {
    setAnswer2(event.target.value);
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
        answer1 === "64"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 64.",
      error2:
        answer2.trim() === "96"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 96.",
      error3:
        answer3.length === 2 && answer3.includes("1") && answer3.includes("3")
          ? "Helyes válasz, gratulálunk!"
          : answer3.length === 0
            ? "Kérlek válasszd ki a helyes válaszokat!"
            : "Hibás válasz! Próbáld újra.",
      error4:
        answer4.length === 1 && answer4.includes("2")
          ? "Helyes válasz, gratulálunk!"
          : answer4.length === 0
            ? "Kérlek válasszd ki a helyes válaszokat!"
            : "Hibás válasz! Próbáld újra.",
    };

    setErrors(newErrors);
  };

  return (
    <div className="quiz-container">
      <br />
      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="question">
          <strong>
            1. Ha egy kocka oldalhossza négy centiméter, akkor mekkora a
            térfogata?
          </strong>
        </div>

        <div className="answer-options">
          <center>
            <br />
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
                64 cm<sup>3</sup>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="answer1"
                value="32"
                checked={answer1 === "32"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                32 cm<sup>3</sup>
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
              <span className="answer-textkocka">
                128cm<sup>3</sup>
              </span>
            </label>
          </center>
          <br />
        </div>
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

        <div className="question">
          <p>
            <strong>
              2. Ha egy kocka oldalhossza négy centiméter, akkor hány cm² a
              felszínének területe?
            </strong>
          </p>
        </div>
        <center>
          <input
            type="text"
            value={answer2}
            onChange={handleInputChange}
            className="input-fieldkocka"
            placeholder="Írd be a választ"
            style={{
              padding: "5px",
              fontSize: "16px",
              textAlign: "center",
            }}
          />
          <br />
          <br />
        </center>
        <div>
          <center>
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
        </div>

        <div className="question">
          <p>
            <strong>
              3. Válaszd ki a helyes választ vagy válaszokat: a téglatest
              térfogata az alábbiak szerint kapható meg:
            </strong>
          </p>

          <label>
            <input
              type="checkbox"
              value="1"
              checked={answer3.includes("1")}
              onChange={handleCheckboxChange1}
            />
            A kocka térfogata az oldalak szorzataként kapható meg
            <Latex> ( $V = a^{3}$</Latex>)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer3.includes("2")}
              onChange={handleCheckboxChange1}
            />
            A kocka térfogata az oldalhossz és a testátló szorzataként kapható
            meg (<Latex>$V = a \cdot d$</Latex>)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer3.includes("3")}
              onChange={handleCheckboxChange1}
            />
            <Latex>
              Ha ismerjük a testátló hosszát, akkor a $D = a \sqrt{3}$ képlet
              szerint kaphatjuk meg, ahol $D$ a testátló hossza.
            </Latex>
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

        <div className="question">
          <p>
            <strong>
              4. Válaszd ki a helyes választ vagy válaszokat: a téglatest
              térfogata az alábbiak szerint kapható meg:
            </strong>
          </p>

          <label>
            <input
              type="checkbox"
              value="1"
              checked={answer4.includes("1")}
              onChange={handleCheckboxChange2}
            />
            A kocka térfogata az oldalak szorzataként kapható meg (
            <Latex>$V = a^{3}$</Latex>)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer4.includes("2")}
              onChange={handleCheckboxChange2}
            />
            A kocka térfogata a lapátló négyzetének háromszorosa (
            <Latex>$V = 3d^{2}$</Latex>)
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer4.includes("3")}
              onChange={handleCheckboxChange2}
            />
            A kocka térfogata a testátló négyzetének háromszorosa (
            <Latex>$V = 3D^{2}$</Latex>)
          </label>
        </div>
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
          <button type="submit" className="nav-link call-to-action-button">
            Ellenőrizd az összes választ
          </button>
        </center>
      </form>
    </div>
  );
};

export default CubeQuiz;
