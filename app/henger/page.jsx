'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Cylinder from '../../components/Cylinder';

function Henger() {


  return (
    <>
      <div className="mb-5" data-testid="henger">
        <h1 data-testid="henger-title">Henger</h1>
        <Cylinder/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Henger, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
