import React from 'react';
import styled from 'styled-components';
import GetTest from '../components/Example/GetTest';
import PostTest from '../components/Example/PostTest';

function Main() {
  return (
    <StMain>
      <GetTest />
      <PostTest />
    </StMain>
  );
}

export default Main;

const StMain = styled.main`
  /* background: black; */
`;
