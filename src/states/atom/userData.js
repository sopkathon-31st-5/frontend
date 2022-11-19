import { atom } from 'recoil';
const userData = atom({
  key: 'userdata',
  default: {
    card: {
      id: 1,
      name: '',
      telNumber: '',
      introduce: '',
      isDeliver: false,
      imageURL: '',
      type: 1,
      address: '',
    },
    weekday: {
      sun: false,
      mon: true,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: true,
    },
  },
});

export default userData;
