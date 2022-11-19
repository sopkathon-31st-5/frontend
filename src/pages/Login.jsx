import React, { useState } from 'react';
import Banner from '../components/common/Banner';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm';
import { useRecoilState } from 'recoil';
import userData from '../states/atom/userData';

const info = `명함 수정을 원하신다면,
처음 기입했던 성함과 전화번호를 입력해주세요.`;
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputData, setInputData] = useRecoilState(userData);
  const handleClick = () => {
    navigate('/make_business_card');
    setInputData({
      ...inputData,
      userName: {
        ...inputData.userName,
        name: user,
      },
      card: {
        ...inputData.card,
        telNumber: phoneNumber,
      },
    });
  };

  return (
    <StMain>
      <Header step="LOGIN" />
      <Banner step="LOGIN" />
      <LoginForm
        user={user}
        phoneNumber={phoneNumber}
        setUser={setUser}
        setPhoneNumber={setPhoneNumber}
      />
      <StInfo>{info}</StInfo>
      <Button onClick={handleClick} disabled={user.length === 0 || phoneNumber.length === 0}>
        다음으로
      </Button>
    </StMain>
  );
}

export default Login;

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StInfo = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;

  text-align: center;

  color: #707070;
  white-space: pre-line;
  margin-bottom: 32px;
  margin-top: 120%;
`;
