"use client";

import React from "react";

import Quiz from "../../components/Quiz";

function Kvizek() {
  return (
    <>
      <div className="mb-5" data-testid="kvizek">
        <h1
          class="tartalomjegyzek"
          data-testid="kvizek-title"
          style={{ textAlign: "center" }}
        >
          Kvízek
        </h1>

        <Quiz />
      </div>
    </>
  );
}

export default Kvizek;
