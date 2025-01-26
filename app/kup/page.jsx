'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Cone from '../../components/Cone';

function Kup() {


  return (
    <>
      <div className="mb-5" data-testid="kup">
        <h1 data-testid="kup-title">Kúp</h1>
        <Cone/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Kup, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
