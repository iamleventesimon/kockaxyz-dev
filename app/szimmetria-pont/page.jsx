'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SymmetryPoint from '../../components/SymmetryPoint';

function SzimmetriaPont() {

  return (
    <>
      <div className="mb-5" data-testid="szimmetria-pont">
        <h1 data-testid="szimmetria-pont">Szimmetria</h1>
        <SymmetryPoint/>
      </div>
    </>
  );
}

export default withPageAuthRequired(SzimmetriaPont, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
