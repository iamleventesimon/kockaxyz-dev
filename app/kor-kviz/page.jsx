"use client";

import React from "react";

import CircleQuiz from "../../components/CircleQuiz";

function Korkviz() {
  return (
    <>
      <div className="mb-5" data-testid="korkviz">
        <h1 data-testid="korkviz-title" style={{ textAlign: "center" }}>
          Kör kvíz
        </h1>

        <CircleQuiz />
      </div>
    </>
  );
}

export default Korkviz;
