'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Halfline from '../../components/Halfline';

function Felegyenes() {


  return (
    <>
      <div className="mb-5" data-testid="felegyenes">
        <h1 data-testid="felegyenes-title">Félegyenes</h1>
        <Halfline/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Felegyenes, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
