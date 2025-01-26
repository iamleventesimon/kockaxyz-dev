'use client';

import React from 'react';
import DataProtection from '../../components/DataProtection';

function Adatvedelem() {

  return (
    <>
      <div className="mb-5" data-testid="felhasznalasi-feltetelek">
        <h1 data-testid="felhasznalasi-feltetelek">Adatvédelmi szabályzat</h1>
        <DataProtection/>
      </div>
    </>
  );
}

export default Adatvedelem
