import React from 'react';
import Button from '../common/Button';
import Category from '../Form/Category';
import styled from 'styled-components';
import ShopDetail1 from './ShopDetail1';

function StepRenderer({ step, setStep }) {
  switch (step) {
    case 'SHOP_CATEGORY':
      return <Category setStep={setStep} />;
    case 'SHOP_DETAIL':
      return <ShopDetail1 setStep={setStep} />;
    default:
      return <Category setStep={setStep} />;
  }
}

export default StepRenderer;

const StMain = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  flex-wrap: wrap;
`;
