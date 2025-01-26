'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import AngleBisector from '../../components/AngleBisector';

function Szogfelezo() {


  return (
    <>
      <div className="mb-5" data-testid="szogfelezo">
        <h1 data-testid="szogfelezo-title">Szögfelező</h1>
        <AngleBisector/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Szogfelezo, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
