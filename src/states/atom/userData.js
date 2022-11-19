import { atom } from 'recoil';
const userData = atom({
  key: 'userdata',
  default: {
    id: ``,
    userName: ``,
    phoneNum1: ``,
    category: ``,
    marketName: ``,
    phoneNum2: ``,
    comment: ``,
    address: ``,
    delivery: false,
    days: [],
    imgSrc: ``,
  },
});

export default userData;
