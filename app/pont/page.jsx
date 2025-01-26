'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Point from '../../components/Point';

function Pont() {


  return (
    <>
      <div className="mb-5" data-testid="pont">
        <h1 data-testid="pont-title">Pont</h1>
        <Point/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Pont, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
