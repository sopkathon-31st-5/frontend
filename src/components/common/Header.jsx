import React from 'react';
import { HeaderText } from '../../constants';
import styled from 'styled-components';
import { getPreviousStep } from '../../utils';
import PreviousButton from '../../assets/icon/btn_back.svg';

// interface
function Header({ type, isPreviousbutton = false, setStep = () => {} }) {
  const handleClick = () => {
    setStep(getPreviousStep(type));
  };
  return (
    <StHeader>
      <StTitleBox>
        {isPreviousbutton ? (
          <StPreviousButton
            onClick={handleClick}
            src={PreviousButton}
            role="button"
            tabIndex={0}
          ></StPreviousButton>
        ) : (
          <div />
        )}
        <StTitle>{HeaderText[type].title}</StTitle>
        <div />
      </StTitleBox>
      <StDescription>{HeaderText[type].description}</StDescription>
    </StHeader>
  );
}

export default Header;

const StHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StPreviousButton = styled.img`
  width: 12px;
  height: 24px;
  cursor: pointer;
`;

const StTitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 29px;
  justify-content: space-around;
`;

const StTitle = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #000000;
`;

const StDescription = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 1.6rem;
`;
