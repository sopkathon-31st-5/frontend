import React from 'react';
import Card from '../components/Card';
import { useRecoilValue } from 'recoil';
import userData from '../states/atom/userData';

function Result() {
  const userDataList = useRecoilValue(userData);
  return <Card userDataList={userDataList} />;
}

export default Result;
