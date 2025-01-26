'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import AdjacentAngle from '../../components/AdjacentAngle';

function Potszogek() {


  return (
    <>
      <div className="mb-5" data-testid="szog">
        <h1 data-testid="szomszedos-szogek-title">Szomszédos szögek</h1>
        <AdjacentAngle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Potszogek, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
