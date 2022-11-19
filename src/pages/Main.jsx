import React from 'react';
import styled from 'styled-components';
import GetTest from '../components/Example/GetTest';

function Main() {
  return (
    <StMain>
      <GetTest />
    </StMain>
  );
}

export default Main;

const StMain = styled.main`
  /* background: black; */
`;
