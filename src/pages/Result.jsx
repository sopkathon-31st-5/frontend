import styled from 'styled-components';
import Card from '../components/Card';
import { useRecoilValue } from 'recoil';
import userData from '../states/atom/userData';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import picImg from '../assets/image/pic.png';

function Result() {
  const navigate = useNavigate();
  const userDataList = useRecoilValue(userData);
  const userId = userDataList.card.id;
  console.log(userId);

  const handleLink = () => {
    copyLinkRef.current.focus();
    copyLinkRef.current.select();

    navigator.clipboard.writeText('http://localhost:3000/usercard/18').then(() => {
      alert('링크를 복사했습니다.');
    });
  };

  const handleQR = () => {
    navigate('/QRview');
  };

  const copyLinkRef = useRef();
  return (
    <>
      <StImgWrapper>
        <input
          type="text"
          ref={copyLinkRef}
          value={'http://43.201.139.211:3000/card/' + userId}
          hidden
        />
        <Card userDataList={userDataList} className="picImg" />
        <img src={picImg} alt="#" className="picImg" />
      </StImgWrapper>

      <StButtonWrapper>
        <Button type="button" onClick={handleLink} className="button">
          링크 복사하기
        </Button>
        <Button type="button" onClick={handleQR} className="button">
          QR코드 생성하기
        </Button>
      </StButtonWrapper>
    </>
  );
}

export default Result;

const StImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > img.picImg {
    width: 299px;
    margin-left: 35px;
  }
`;

const StButtonWrapper = styled.footer`
  width: 370px;
  position: fixed;
  z-index: 3;
  margin: -120px 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 375px;
  height: 208px;
  padding-top: 16;
  background-color: white;

  & > button.button {
    margin: 16px 7px 0 8px;
  }
`;
