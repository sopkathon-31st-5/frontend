import React, { useState } from 'react';
import Header from '../components/common/Header';
import Banner from '../components/common/Banner';

function BusinessCard() {
  // type step= 'SHOP_CATEGORY' | 'SHOP_DETAIL' | 'SHOP_ENVIRONMENT' | 'SHOP_IMAGE'
  const [step, setStep] = useState('SHOP_CATEGORY');
  return (
    <div>
      <Header step={step} isPreviousbutton={true} setStep={setStep} />
      <Banner step={step} />
    </div>
  );
}

export default BusinessCard;
