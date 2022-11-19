import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Banner from '../components/common/Banner';
import StepRenderer from '../components/businessCard/StepRenderer';
import { useRecoilValue } from 'recoil';
import userData from '../states/atom/userData';

function BusinessCard() {
  // type step= 'SHOP_CATEGORY' | 'SHOP_DETAIL' | 'SHOP_ENVIRONMENT' | 'SHOP_IMAGE'
  const [step, setStep] = useState('SHOP_CATEGORY');
  const userDataList = useRecoilValue(userData);
  useEffect(() => {
    console.log('userDataList', userDataList);
  }, [userDataList]);
  return (
    <div>
      <Header step={step} isPreviousbutton={true} setStep={setStep} />
      <Banner step={step} />
      <StepRenderer step={step} setStep={setStep} />
    </div>
  );
}

export default BusinessCard;
