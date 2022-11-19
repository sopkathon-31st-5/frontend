import React from 'react';
import { BannerText } from '../../constants';
import styled from 'styled-components';

// type step= 'LOGIN' | 'SHOP_CATEGORY' | 'SHOP_DETAIL' | 'SHOP_ENVIRONMENT' | 'SHOP_IMAGE'
// SHOP_IMAGE 스텝에서만 isOption이 true여야 합니다.
function Banner({ step, isOption = false }) {
  return (
    <StBanner isOption={isOption}>
      <StTitle>{BannerText[step]}</StTitle>
    </StBanner>
  );
}

export default Banner;

const StBanner = styled.aside`
  width: 100%;
  height: 46px;
  background: ${({ isOption }) => (isOption ? '#F7F7F7' : '#338BFF')};
  display: flex;
  align-items: center;
  margin-top: 3.6rem;
`;
const StTitle = styled.h2`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
  margin-left: 37px;
`;
