"use client";

import React from "react";

import RectangleQuiz from "../../components/RectangleQuiz";

function Teglalapkviz() {
  return (
    <>
      <div className="mb-5" data-testid="teglalapkviz">
        <h1 data-testid="teglalap-title" style={{ textAlign: "center" }}>
          Téglalap kvíz
        </h1>

        <RectangleQuiz />
      </div>
    </>
  );
}

export default Teglalapkviz;
