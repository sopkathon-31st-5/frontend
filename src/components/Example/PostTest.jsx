import React, { Suspense, useEffect } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import CommonError from '../common/CommonError';
import { ClipLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { postSignUp } from '../../core/api';

function PostTest() {
  return (
    <ErrorBoundary
      renderFallback={({ error, reset }) => <CommonError error={error} reset={reset} />}
    >
      <Suspense fallback={<ClipLoader size={50} color={'black'} />}>
        <Resolved />
      </Suspense>
    </ErrorBoundary>
  );
}

const Resolved = () => {
  // const { data } = useQuery('shop', () => postSignUp(), {
  //   suspense: true,
  // });
  // useEffect(() => {
  //   console.log('data', data);
  // }, []);
};

export default PostTest;
