'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Prism from '../../components/Prism';

function Hasab() {


  return (
    <>
      <div className="mb-5" data-testid="hasab">
        <h1 data-testid="hasab-title">Hasáb</h1>
        <Prism/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Hasab, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
