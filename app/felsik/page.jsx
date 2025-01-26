'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Halfplane from '../../components/Halfplane';

function Felsik() {


  return (
    <>
      <div className="mb-5" data-testid="sik">
        <h1 data-testid="felsik-title">Félsík</h1>
        <Halfplane/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Felsik, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
