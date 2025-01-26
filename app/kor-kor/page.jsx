'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import CircleCircle from '../../components/CircleCircle';

function KorKor() {


  return (
    <>
      <div className="mb-5" data-testid="kor-kor">
        <h1 data-testid="kor-kor-title">Két különböző kör helyzete</h1>
        <CircleCircle/>
      </div>
    </>
  );
}

export default withPageAuthRequired(KorKor, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
