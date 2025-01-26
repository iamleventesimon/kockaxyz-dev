'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Segment from '../../components/Segment';

function Szakasz() {

  return (
    <>
      <div className="mb-5" data-testid="szakasz">
        <h1 data-testid="szakasz-title">Szakasz</h1>
        <Segment/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Szakasz, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
