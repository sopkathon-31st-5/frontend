import { atom } from 'recoil';
const userData = atom({
  key: 'userdata',
  default: {
    userName: {
      name: '',
    },
    card: {
      id: 1,
      name: '',
      telNumber: '',
      introduce: '',
      isDeliver: false,
      imageURL: null,
      type: null,
      address: '',
    },
    weekday: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },
  },
});

export default userData;
