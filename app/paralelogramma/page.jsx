'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Parallelogram from '../../components/Parallelogram';

function Paralelogramma() {


  return (
    <>
      <div className="mb-5" data-testid="paralelogramma">
        <h1 data-testid="paralelogramma-title">Paralelogramma</h1>
        <Parallelogram/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Paralelogramma, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
