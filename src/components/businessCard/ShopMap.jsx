import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import camera from '../../assets/icon/ic_camera.svg';
import { uploadImage } from '../../utils/uploadimage';
import Button from '../common/Button';
import { postProfilData } from '../../core/api';
import { useRecoilState } from 'recoil';
import userData from '../../states/atom/userData';
function ShopMap() {
  const navigate = useNavigate();
  const { photo } = useRef(null);
  const [loading, setloading] = useState(false);
  const [photourl, setphotourl] = useState('');
  const [inputData, setInputData] = useRecoilState(userData);
  const photoChange = async e => {
    const files = e?.target?.files && e.target.files[0];
    setloading(true);
    const url = await uploadImage(files);

    const reader = new FileReader();
    setphotourl(url);
    reader.readAsDataURL(files);
    return new Promise(resolve => {
      reader.onload = () => {
        // setphotourl(reader.result);

        resolve();

        setloading(false);
      };
    });
  };

  const handleClick = async () => {
    navigate('/result');
    const result = await postProfilData(
      inputData.card.name,
      inputData.card.telNumber,
      inputData.card.introduce,
      inputData.card.isDeliver,
      inputData.card.imageURL,
      inputData.card.address,
      [
        inputData.weekday.sun,
        inputData.weekday.mon,
        inputData.weekday.tue,
        inputData.weekday.wed,
        inputData.weekday.thu,
        inputData.weekday.fri,
        inputData.weekday.sat,
      ],
    );
    console.log('result', result);
  };

  return (
    <Styled.ShopMap>
      {loading ? <Styled.Loading>이미지 로딩중입니다..</Styled.Loading> : null}
      <Styled.PhotoBox>
        <Styled.PhotoImg src={camera} />
        <Styled.PhotoInput onChange={e => photoChange(e)} ref={photo} />
      </Styled.PhotoBox>
      <Styled.ShopText>
        가게 사진과 영상등으로 <br />
        가게를 소개해주세요!
      </Styled.ShopText>
      <Button className="button" onClick={handleClick}>
        완료하기
      </Button>
    </Styled.ShopMap>
  );
}

const Styled = {
  Loading: styled.section`
    width: 37.5rem;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    position: absolute;
    bottom: 0.1rem;
    display: flex;
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    z-index: 8;
  `,
  ShopMap: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7.1rem;
    & .button {
      margin-top: 100px;
    }
  `,
  ShopInfo: styled.div``,
  PhotoInput: styled.input.attrs({ type: 'file' })`
    width: 7rem;
    height: 7rem;
    opacity: 0;
    cursor: pointer;
  `,
  ShopText: styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: center;
    margin-top: 2.9rem;
  `,
  PhotoBox: styled.div`
    width: 7rem;
    height: 7rem;
    background-color: #338bff;
    position: relative;
  `,
  PhotoImg: styled.img`
    position: absolute;
    margin-left: 2.6rem;
    margin-top: 2rem;
    /* top: 1.9rem; */
    /* left: 2.6rem; */
  `,
};

export default ShopMap;
