'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Circle from '../../components/Circle';

function Kor() {


  return (
    <>
      <div className="mb-5" data-testid="gomb">
        <h1 data-testid="gomb-title">Kör</h1>
        <Circle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Kor, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
