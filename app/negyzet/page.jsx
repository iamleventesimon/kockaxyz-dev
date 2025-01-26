'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Square from '../../components/Square';

function Negyzet() {


  return (
    <>
      <div className="mb-5" data-testid="negyzet">
        <h1 data-testid="negyzet-title">Négyzet</h1>
        <Square/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Negyzet, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
