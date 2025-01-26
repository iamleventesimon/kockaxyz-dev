'use client';

import React from 'react';
import AboutUs from '../../components/AboutUs';

function Impresszum() {

  return (
    <>
      <div className="mb-5" data-testid="impresszum">
        <h1 data-testid="impresszum-title">Impresszum</h1>
        <AboutUs/>
      </div>
    </>
  );
}

export default Impresszum
