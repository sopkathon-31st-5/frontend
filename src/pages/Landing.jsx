import React from 'react';
import styled from 'styled-components';
import MainLogo from '../assets/image/main_ui.svg';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/login');
  };
  return (
    <StMain>
      <StMainImg src={MainLogo} alt="메인 로고" />
      <Button onClick={handleClick}>명함 만들러 가기</Button>
    </StMain>
  );
}

export default Landing;

const StMain = styled.main`
  background: url('background.png');
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & button {
    margin-top: 211px;
  }
`;

const StMainImg = styled.img``;
