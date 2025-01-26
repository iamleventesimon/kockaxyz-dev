'use client';

import React from 'react';
import TermsAndConditions from '../../components/TermsAndConditions';

function FelhasznalasiFeltetelek() {

  return (
    <>
      <div className="mb-5" data-testid="felhasznalasi-feltetelek">
        <h1 data-testid="felhasznalasi-feltetelek">Felhasználási feltételek</h1>
        <TermsAndConditions/>
      </div>
    </>
  );
}

export default FelhasznalasiFeltetelek