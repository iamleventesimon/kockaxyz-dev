"use client";

import React from "react";

import SphereQuiz from "../../components/SphereQuiz";

function Gombkviz() {
  return (
    <>
      <div className="mb-5" data-testid="gombkviz">
        <h1
          class="gombike"
          data-testid="gombkviz-title"
          style={{ textAlign: "center" }}
        >
          Gömb kvíz
        </h1>

        <SphereQuiz />
      </div>
    </>
  );
}

export default Gombkviz;
