'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import Angle from '../../components/Angle';
import ErrorMessage from '../../components/ErrorMessage';

function Szog() {


  return (
    <>
      <div className="mb-5" data-testid="szog">
        <h1 data-testid="szog-title">Szög</h1>
        <Angle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Szog, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
