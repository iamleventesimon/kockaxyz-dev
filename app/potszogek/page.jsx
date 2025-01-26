'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import SpareAngle from '../../components/SpareAngle';

function Potszogek() {


  return (
    <>
      <div className="mb-5" data-testid="szog">
        <h1 data-testid="potszogek-title">Kiegészítő szögek és pótszögek</h1>
        <SpareAngle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(Potszogek, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
