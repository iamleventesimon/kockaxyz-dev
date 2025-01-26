'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Cube from '../../components/Cube';

function Kocka() {


  return (
    <>
      <div className="mb-5" data-testid="kocka">
        <h1 data-testid="kocka-title">Kocka</h1>
        <Cube/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Kocka, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
