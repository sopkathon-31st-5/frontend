import { atom } from 'recoil';
const userData = atom({
  key: 'userdata',
  default: {
    card: {
      id: 6,
      name: 'asdf',
      telNumber: 'asdf',
      introduce: 'asdf',
      isDeliver: true,
      imageURL: 'asdf',
      type: 1,
      address: 'asdf',
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
