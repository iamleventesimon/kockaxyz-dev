'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import ApexAngle from '../../components/ApexAngle';

function Csucsszogek() {

  return (
    <>
      <div className="mb-5" data-testid="szog">
        <h1 data-testid="csucsszogek-title">Csúcsszögek</h1>
        <ApexAngle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Csucsszogek, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
