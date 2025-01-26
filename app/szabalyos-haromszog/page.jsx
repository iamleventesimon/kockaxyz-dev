'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import EquilateralTriangle from '../../components/EquilateralTriangle';

function Haromszog() {

  return (
    <>
      <div className="mb-5" data-testid="haromszog">
        <h1 data-testid="haromszog-title">Szabályos háromszög</h1>
        <EquilateralTriangle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Haromszog, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
