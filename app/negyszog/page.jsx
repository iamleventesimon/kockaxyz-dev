'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Quadrilateral from '../../components/Quadrilateral';

function Negyzet() {


  return (
    <>
      <div className="mb-5" data-testid="negyszog">
        <h1 data-testid="negyszog-title">Négyszög</h1>
        <Quadrilateral/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Negyzet, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
