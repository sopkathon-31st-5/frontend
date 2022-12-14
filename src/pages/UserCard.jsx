import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import resultImg from '../assets/image/Group 33950.png';
function UserCard({ userid = 18 }) {
  const userId = useParams();
  const [cardData, setcardData] = useState();

  const days = [
    { id: 'mon', text: '월' },
    { id: 'tue', text: '화' },
    { id: 'wed', text: '수' },
    { id: 'thu', text: '목' },
    { id: 'fri', text: '금' },
    { id: 'sat', text: '토' },
    { id: 'sun', text: '일' },
  ];

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
  const getData = async () => {
    const data = await axios.get('http://43.201.139.211:3000' + '/card/' + userid);
    setcardData(data.data.data);
  };
  useEffect(() => {
    getData();
  });

  if (!cardData) {
    return <div>로딩중</div>;
  }
  return (
    <>
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
            <h1>{cardData.userName.name}</h1>
            <h1>{cardData.card.telNumber}</h1>
          </div>

          <h1>{cardData.card.address}</h1>
          <div className="trueDays">
            {days.map(day => cardData.weekday[day.id] && <h1>{day.text}</h1>)}
          </div>
          <h1 className="introduce">{cardData.card.introduce}</h1>
        </StCard>
      </StCardWrapper>
      <Stimgcard src="https://user-images.githubusercontent.com/81923229/202875761-9f56cf7d-6a7e-4359-bc04-22392a585c67.png"></Stimgcard>
    </>
  );
}

export default UserCard;

const Stimgcard = styled.img`
  width: 29.9rem;
  height: 22.4rem;
  border-radius: 16px;
  margin-left: 3.8rem;
`;
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
