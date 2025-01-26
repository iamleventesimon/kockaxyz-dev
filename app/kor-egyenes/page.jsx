'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import CircleLine from '../../components/CircleLine';

function KorEgyenes() {


  return (
    <>
      <div className="mb-5" data-testid="gomb">
        <h1 data-testid="gomb-title">Kör és egyenes helyzete</h1>
        <CircleLine/>
      </div>
    </>
  );
}

export default withPageAuthRequired(KorEgyenes, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
