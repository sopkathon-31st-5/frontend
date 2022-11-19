import React, { useState } from 'react';
import Banner from '../components/common/Banner';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/make_business_card');
  };
  return (
    <StMain>
      <Header step="LOGIN" />
      <Banner step="LOGIN" />
      <Button onClick={handleClick}>명함 만들러 가기</Button>
    </StMain>
  );
}

export default Login;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
