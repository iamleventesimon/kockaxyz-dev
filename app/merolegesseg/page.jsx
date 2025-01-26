'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Perpendicular from '../../components/Perpendicular';

function Merolegesseg() {

  return (
    <>
      <div className="mb-5" data-testid="szog">
        <h1 data-testid="merolegesseg-title">Merőlegesség</h1>
        <Perpendicular/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Merolegesseg, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
