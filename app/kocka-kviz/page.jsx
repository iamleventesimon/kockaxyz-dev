"use client";

import React from "react";

import CubeQuiz from "../../components/CubeQuiz";

function Kviz() {
  return (
    <>
      <div className="mb-5" data-testid="kviz">
        <h1 data-testid="kviz-title" style={{ textAlign: "center" }}>
          Kocka kvíz
        </h1>

        <CubeQuiz />
      </div>
    </>
  );
}

export default Kviz;
