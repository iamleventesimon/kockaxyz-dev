import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const SphereQuiz = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");

  const [errors, setErrors] = useState({
    error1: "",
    error2: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleRadioChange = (event) => {
    setAnswer1(event.target.value);
  };

  const handleInputChange = (event) => {
    setAnswer2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Check answers and generate error messages
    const newErrors = {
      error1:
        answer1 === "36π"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 36πcm3.",
      error2:
        answer2.trim() === "64"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 64.",
    };

    setErrors(newErrors);
  };

  return (
    <div className="quiz-container">
      <br />
      <form onSubmit={handleSubmit} className="quiz-form">
        <div className="question">
          <strong>
            1. Hogyha egy gömb sugara 3 cm, akkor mennyi a térfogata?
          </strong>
        </div>

        <div className="answer-options">
          <center>
            <br />
            <label>
              <input
                type="radio"
                name="answer1"
                value="36π"
                checked={answer1 === "36π"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span>
                36πcm<sup>3</sup>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="answer1"
                value="18π"
                checked={answer1 === "18π"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span>
                18πcm<sup>3</sup>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="answer1"
                value="36"
                checked={answer1 === "36"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span>
                36cm<sup>3</sup>
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
              2. Ha egy gömb sugara 4 cm, akkor hány πcm <sup>2</sup> a gömb
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

        <center>
          <button type="submit" className="nav-link call-to-action-button">
            Ellenőrizd az összes választ
          </button>
        </center>
      </form>
    </div>
  );
};

export default SphereQuiz;
