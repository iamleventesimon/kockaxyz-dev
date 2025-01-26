'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SymmetryLine from '../../components/SymmetryLine';

function SzimmetriaEgyenes() {

  return (
    <>
      <div className="mb-5" data-testid="szimmetria-egyenes">
        <h1 data-testid="szimmetria-egyenes">Szimmetria</h1>
        <SymmetryLine/>
      </div>
    </>
  );
}

export default withPageAuthRequired(SzimmetriaEgyenes, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
