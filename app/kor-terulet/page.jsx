'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import CircleArea from '../../components/CircleArea';

function KorTerulet() {


  return (
    <>
      <div className="mb-5" data-testid="gomb">
        <h1 data-testid="gomb-title">Kör</h1>
        <CircleArea/>
      </div>
    </>
  );
}

export default withPageAuthRequired(KorTerulet, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
