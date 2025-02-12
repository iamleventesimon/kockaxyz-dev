import React, { useState } from "react";
import "../globals.css";

const SphereQuiz = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleRadioChange = (event) => {
    setAnswer1(event.target.value);
    if (submitted) {
      setError1("");
    }
  };

  const handleInputChange = (event) => {
    setAnswer2(event.target.value);
    if (submitted) {
      setError2("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    // Check the first answer (radio question)
    if (answer1 === "") {
      setError1("Kérlek válaszolj a kérdésre!");
    } else {
      setError1(
        answer1 === "36π"
          ? "Helyes válasz, gratulálunk!"
          : "Hibás válasz! A helyes válasz: 36πcm3."
      );
    }

    // Check the second answer (input question)
    if (answer2.trim() === "") {
      setError2("Kérlek válaszolj a kérdésre!");
    } else {
      setError2(
        answer2.trim() === "64"
          ? "Helyes válasz, gratulálunk!"
          : "Hibás válasz! A helyes válasz: 64."
      );
    }
  };

  return (
    <div>
      <br />
      <center>
        <form onSubmit={handleSubmit}>
          {/* First Question */}
          <div className="kerdes">
            <p
              className="elso"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "-114px",
              }}
            >
              <strong>
                1. Hogyha egy gömb sugara 3 cm, akkor mennyi a térfogata?
              </strong>
            </p>
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", gap: "100px" }}>
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
              </div>

              {submitted && error1 && (
                <p style={{ color: answer1 === "36π" ? "green" : "red" }}>
                  {error1}
                </p>
              )}
            </div>
          </div>
          {/* Second Question */}
          <div
            className="kerdes"
            style={{ padding: "15px", marginTop: "30px" }}
          >
            <p>
              <strong>
                2. Ha egy gömb sugara 4 cm, akkor hány πcm <sup>2</sup> a gömb
                felszínének területe?
              </strong>
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <br />
              <input
                type="text"
                value={answer2}
                onChange={handleInputChange}
                placeholder="Írd be a választ"
                style={{
                  padding: "5px",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              />
              {submitted && error2 && (
                <p
                  style={{
                    color: answer2.trim() === "64" ? "green" : "red",
                  }}
                >
                  {error2}
                </p>
              )}
            </div>
          </div>
          <br />
          {/* Submit Button */}
          <center>
            <button type="submit" className="nav-link call-to-action-button">
              Ellenőrizd az összes választ
            </button>
          </center>
        </form>
      </center>
    </div>
  );
};

export default SphereQuiz;
