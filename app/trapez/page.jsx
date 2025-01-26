'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Trapez from '../../components/Trapez';

function Paralelogramma() {


  return (
    <>
      <div className="mb-5" data-testid="trapez">
        <h1 data-testid="trapez-title">Trapéz</h1>
        <Trapez/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Paralelogramma, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
