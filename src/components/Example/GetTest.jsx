import React, { Suspense, useEffect } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import CommonError from '../common/CommonError';
import { ClipLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import { getShopData } from '../../core/api';

function GetTest() {
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
  const { data } = useQuery(['shop'], () => getShopData(), {
    suspense: true,
  });

  useEffect(() => {
    console.log('data', data);
  }, []);

  return (
    <div>
      {data.data.map(item => (
        <div>{item.shopName}</div>
      ))}
    </div>
  );
};

export default GetTest;
