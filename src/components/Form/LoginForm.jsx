import React from 'react';
import styled from 'styled-components';
import checked_icon from '../../assets/icon/ic_inputChecked.svg';
import unchecked_icon from '../../assets/icon/ic_inputUnchecked.svg';

function LoginForm({ user, phoneNumber, setPhoneNumber, setUser }) {
  const handleUserChange = e => {
    setUser(e.target.value);
  };

  const handlePhoneNumChange = e => {
    setPhoneNumber(e.target.value);
  };

  return (
    <StForm>
      <StInputList>
        <StInputDiv>
          <StInputText>성함</StInputText>
          <StInput onChange={handleUserChange} placeholder="사장님 성함" value={user} />
          <StIschecked src={user.length > 0 ? checked_icon : unchecked_icon} />
        </StInputDiv>
        <StInputDiv>
          <StInputText>전화번호</StInputText>
          <StInput
            onChange={handlePhoneNumChange}
            placeholder="전화번호 (-없이 입력)"
            value={phoneNumber}
          />
          <StIschecked
            src={
              phoneNumber.length > 0 && !isNaN(Number(phoneNumber)) ? checked_icon : unchecked_icon
            }
          />
        </StInputDiv>
      </StInputList>
    </StForm>
  );
}

export default LoginForm;

const StForm = styled.div``;

const StInputList = styled.div`
  padding: 0 1.6rem 0 1.6rem;
  margin-top: 2rem;
`;
const StInputDiv = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  margin-bottom: 1.2rem;
  text-align: right;
  position: relative;
`;
const StInputText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.9rem;
  padding-right: 1.6rem;

  width: 8rem;
`;
const StInput = styled.input`
  height: 5rem;
  background: #eaeaea;
  border-radius: 5px;
  border: none;
  width: 26rem;
  outline: none;
  padding-left: 1.4rem;
  &:focus {
    border: none;
  }
`;

const StIschecked = styled.img`
  position: absolute;
  bottom: 3.6rem;
  right: 1.4rem;
  top: 14px;
`;
