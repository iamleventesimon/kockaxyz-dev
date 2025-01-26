'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Plane from '../../components/Plane';

function Sik() {


  return (
    <>
      <div className="mb-5" data-testid="sik">
        <h1 data-testid="sik-title">Sík</h1>
        <Plane/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Sik, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
