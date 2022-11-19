import styled from 'styled-components';
import resultImg from '../assets/image/Group 33950.png';

import { useEffect } from 'react';
import axios from 'axios';

function Card(userDataList) {
  const cardData = userDataList.userDataList;
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const workDaysList = userDataList.userDataList.weekday;

  const userName = userDataList.userDataList.userName.name;

  const typeList = [
    { id: 1, text: '과일 가게' },
    { id: 2, text: '정육점' },
    { id: 3, text: '수산 시장' },
    { id: 4, text: '야채 가게' },
    { id: 5, text: '방앗간/양념' },
    { id: 6, text: '반찬가게' },
    { id: 7, text: '음료/식당' },
    { id: 8, text: '건어물/견과' },
    { id: 9, text: '건강식품' },
    { id: 10, text: '종합 시장' },
    { id: 11, text: '전통 다과' },
  ];

  return (
    <StCardWrapper>
      <StImg>
        <img src={resultImg} alt="#" />
      </StImg>
      <StCard>
        {typeList.map(type => type.id === cardData.card.type && <h1>{type.text}</h1>)}

        <div className="nameDeliver">
          <h1>{cardData.card.name}</h1>
          {cardData.card.isDeliver ? <h1>택배 가능합니다!</h1> : <h1>택배 불가능합니다!</h1>}
        </div>
        <div className="personalTel">
          <h1>{userName}</h1>
          <h1>{cardData.card.telNumber}</h1>
        </div>

        <h1>{cardData.card.address}</h1>
        <div className="trueDays">{days.map(day => workDaysList[day] && <h1>{day}</h1>)}</div>
        <h1 className="introduce">{cardData.card.introduce}</h1>
      </StCard>
    </StCardWrapper>
  );
}

export default Card;

const StCardWrapper = styled.section`
  width: 375px;
`;

const StImg = styled.div`
  display: flex;
  justify-content: center;
  & > img {
    width: 303px;
  }
`;

const StCard = styled.div`
  width: 300px;
  padding-left: 60px;
  position: absolute;
  margin-top: -435px;

  & > div {
    display: flex;
    align-items: center;
  }

  & > h1:nth-child(1) {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  & > div.nameDeliver > h1:nth-child(1) {
    margin-top: 232px;
    font-family: '210 Sogeumjaengi';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height */

    text-align: right;
  }
  & > div.nameDeliver > h1:nth-child(2) {
    margin-top: 232px;
    margin-left: 14px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  & > div.personalTel > h1:nth-child(1) {
    margin-top: 8px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  & > div.personalTel > h1:nth-child(2) {
    margin-top: 8px;
    margin-left: 14px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }
  & > h1:nth-child(4) {
    margin-top: 12px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
  }
  & > div.trueDays > h1 {
    margin-top: 12px;
    margin-right: 4px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
  }
  & > h1.introduce {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
  }
`;
