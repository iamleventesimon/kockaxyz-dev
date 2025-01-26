'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import AngleBisector from '../../components/AngleBisector';
import Parallelism from '../../components/Parallelism';

function Szogfelezo() {


  return (
    <>
      <div className="mb-5" data-testid="parhuzaPárhuzamosságmossag">
        <h1 data-testid="parhuzamossag-title">Párhuzamosság</h1>
        <Parallelism/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Szogfelezo, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
