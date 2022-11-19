import { useRef, useState } from 'react';
import styled from 'styled-components';
import camera from '../../assets/icon/ic_camera.svg';
import { uploadImage } from '../../utils/uploadimage';
function ShopMap() {
  const { photo } = useRef(null);
  const [loading, setloading] = useState(false);
  const [photourl, setphotourl] = useState('');
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
