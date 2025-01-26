'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Line from '../../components/Line';

function Egyenes() {


  return (
    <>
      <div className="mb-5" data-testid="egyenes">
        <h1 data-testid="egyenes-title">Egyenes</h1>
        <Line/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Egyenes, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
