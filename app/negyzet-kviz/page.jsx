"use client";

import React from "react";

import SquareQuiz from "../../components/SquareQuiz";

function Negyzetkviz() {
  return (
    <>
      <div className="mb-5" data-testid="negyzetkviz">
        <h1 data-testid="negyzetkviz-title" style={{ textAlign: "center" }}>
          Négyzet kvíz
        </h1>

        <SquareQuiz />
      </div>
    </>
  );
}

export default Negyzetkviz;
