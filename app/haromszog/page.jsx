'use client';

import React, { useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Triangle from '../../components/Triangle';

function Haromszog() {

  return (
    <>
      <div className="mb-5" data-testid="szabalyos-haromszog">
        <h1 data-testid="szabalyos-haromszog-title">Háromszög</h1>
        <Triangle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Haromszog, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
