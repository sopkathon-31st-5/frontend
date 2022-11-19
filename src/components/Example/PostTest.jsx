import React, { Suspense, useEffect, useRef } from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import CommonError from '../common/CommonError';
import { ClipLoader } from 'react-spinners';
import { useMutation } from '@tanstack/react-query';
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
  const emailRef = useRef();
  const passwordRef = useRef();

  const { mutate } = useMutation(postSignUp(emailRef.current?.value, passwordRef.current?.value));

  const handleClick = () => {
    mutate();
  };

  return (
    <>
      <input placeholder="이메일" ref={emailRef} />
      <input placeholder="비번" ref={passwordRef} />
      <button onClick={handleClick}>회원가입</button>
    </>
  );
};

export default PostTest;
