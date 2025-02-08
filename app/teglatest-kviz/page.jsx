"use client";

import React from "react";

import RectangularCuboidQuiz from "../../components/RectangularCuboidQuiz";

function Teglatestkviz() {
  return (
    <>
      <div className="mb-5" data-testid="teglatestkviz">
        <h1 data-testid="teglatestkviz-title" style={{ textAlign: "center" }}>
          Téglatest kvíz
        </h1>

        <RectangularCuboidQuiz />
      </div>
    </>
  );
}

export default Teglatestkviz;
