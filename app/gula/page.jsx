'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Pyramid from '../../components/Pyramid';

function Gula() {


  return (
    <>
      <div className="mb-5" data-testid="gula">
        <h1 data-testid="gula-title">Gúla</h1>
        <Pyramid/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Gula, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
