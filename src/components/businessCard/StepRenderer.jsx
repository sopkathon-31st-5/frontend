import React from 'react';
import Category from '../Form/Category';

function StepRenderer({ step, setStep }) {
  switch (step) {
    case 'SHOP_CATEGORY':
      return <Category setStep={setStep} />;
    default:
      return <Category setStep={setStep} />;
  }
}

export default StepRenderer;
