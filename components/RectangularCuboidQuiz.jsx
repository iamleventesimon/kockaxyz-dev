import React, { useState } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import "../globals.css";

const RectangularCuboidQuiz = () => {
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
        answer1 === "24"
          ? "Helyes válasz, gratulálunk!"
          : answer1 === ""
            ? "Kérlek válassz egy választ!"
            : "Hibás válasz! A helyes válasz: 24.",
      error2:
        answer2.trim() === "52"
          ? "Helyes válasz, gratulálunk!"
          : answer2.trim() === ""
            ? "Kérlek írd be a választ!"
            : "Hibás válasz! A helyes válasz: 52.",
      error3:
        answer3.length === 2 && answer3.includes("1") && answer3.includes("2")
          ? "Helyes válasz, gratulálunk!"
          : answer3.length === 0
            ? "Kérlek válaszd ki a helyes válaszokat!"
            : "Hibás válasz! Próbáld újra.",
      error4:
        answer4.length === 1 && answer4.includes("2")
          ? "Helyes válasz, gratulálunk!"
          : answer4.length === 0
            ? "Kérlek válaszd ki a helyes válaszokat!"
            : "Hibás válasz! Próbáld újra.",
    };

    setErrors(newErrors);
  };

  return (
    <div className="quiz-container">
      <form onSubmit={handleSubmit} className="quiz-form">
        {/* Question 1 */}
        <center>
          <div className="question">
            <p>
              <strong>
                1. Hogyha egy téglatest egyik oldala 2 cm, a másik 3 cm, és a
                magassága 4 cm, akkor mennyi a térfogata?
              </strong>
            </p>
          </div>
          <div className="answer-options">
            <label>
              <input
                type="radio"
                name="answer1"
                value="24"
                checked={answer1 === "24"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                24 cm<sup>3</sup>
              </span>
            </label>
            <label>
              <input
                type="radio"
                name="answer1"
                value="12"
                checked={answer1 === "12"}
                onChange={handleRadioChange}
                className="radio-input"
              />
              <span className="answer-text">
                12 cm<sup>3</sup>
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
              <span className="answer-text">
                36 cm<sup>3</sup>
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
              2. Hogyha egy téglatest egyik oldala 2 cm, a másik 3 cm, és a
              magassága 4 cm, hány cm² a felszínének területe?
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
            A téglatest térfogata az oldalak szorzataként kapható meg (
            <Latex>$V = abc$</Latex>)
          </label>
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer3.includes("2")}
              onChange={handleCheckboxChange1}
            />
            A téglatest térfogata az alapterület és a magasság szorzataként
            kapható meg (<Latex>$V = Ah$</Latex>)
          </label>
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer3.includes("3")}
              onChange={handleCheckboxChange1}
            />
            A téglatest térfogata az alapterület és a testátló felének
            szorzataként kapható meg (<Latex>$V = A \cdot D / 2$</Latex>)
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
        {/* Question 4 */}
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
            A téglatest egymással szemközti oldalai egybevágóak, így a felszín
            az oldalak szorzatának kétszerese (
            <Latex>$A = 2 \cdot (a \cdot b)$</Latex>)
          </label>
          <label>
            <input
              type="checkbox"
              value="2"
              checked={answer4.includes("2")}
              onChange={handleCheckboxChange2}
            />
            A téglatest egymással szemközti oldalai egybevágóak, így a felszín
            összesen 6 darab, három különböző területű téglalap területének
            összege (
            <Latex>$A = 2 \cdot (a \cdot b + b \cdot c + c \cdot a)$</Latex>)
          </label>
          <label>
            <input
              type="checkbox"
              value="3"
              checked={answer4.includes("3")}
              onChange={handleCheckboxChange2}
            />
            A téglatest egymással szemközti oldalai egybevágóak, így a felszín
            az oldalak összegeinek négyszerese (
            <Latex>$A = 4 \cdot (a + b + c)$</Latex>)
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
          <button type="submit" className="nav-link call-to-action-button ">
            Ellenőrizd az összes választ
          </button>
        </center>
      </form>
    </div>
  );
};

export default RectangularCuboidQuiz;
