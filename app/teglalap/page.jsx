'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Rectangle from '../../components/Rectangle';

function Teglalap() {


  return (
    <>
      <div className="mb-5" data-testid="teglalap">
        <h1 data-testid="teglalap-title">Téglalap</h1>
        <Rectangle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Teglalap, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
