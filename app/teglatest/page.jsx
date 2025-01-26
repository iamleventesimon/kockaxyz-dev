'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import RectangularCuboid from '../../components/RectangularCuboid';

function Teglatest() {


  return (
    <>
      <div className="mb-5" data-testid="teglatest">
        <h1 data-testid="teglatest-title">Téglatest</h1>
        <RectangularCuboid/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Teglatest, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
