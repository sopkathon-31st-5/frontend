export const getPreviousStep = currentStep => {
  switch (currentStep) {
    case 'SHOP_CATEGORY':
      return 'LOGIN';
    case 'SHOP_DETAIL':
      return 'SHOP_CATEGORY';
    case 'SHOP_ENVIRONMENT':
      return 'SHOP_DETAIL';
    case 'SHOP_IMAGE':
      return 'SHOP_ENVIRONMENT';
    default:
      return 'LOGIN';
  }
};
