import React from 'react';
import styled from 'styled-components';

function Button({ children, disabled = false, ...props }) {
  return (
    <StButton disabled={disabled} {...props}>
      {children}
    </StButton>
  );
}

export default Button;
const StButton = styled.button`
  width: 34.3rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.6rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  text-align: center;

  color: ${({ disabled }) => (disabled ? '#707070' : '#FFFFFF')};
  background: ${({ disabled }) => (disabled ? '#EAEAEA' : '#338BFF')};
  ${({ disabled }) => !disabled && 'cursor: pointer'};
`;
