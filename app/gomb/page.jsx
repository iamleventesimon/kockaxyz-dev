'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Sphere from '../../components/Sphere';

function Gomb() {


  return (
    <>
      <div className="mb-5" data-testid="gomb">
        <h1 data-testid="gomb-title">Gömb</h1>
        <Sphere/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Gomb, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
