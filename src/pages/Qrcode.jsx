import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import userData from '../states/atom/userData';
import X from '../assets/icon/btn_X.svg';

function Qrcode({ userId = 'user' }) {
  const navigate = useNavigate();
  const userDataList = useRecoilValue(userData);
  const shopName = userDataList.card.name;

  return (
    <StQRPageWrapper>
      <Styled.QrcodePage>
        <StQRWrapper>
          <QRCodeSVG
            value={'http://localhost:3000/' + userId}
            size={293}
            bgColor={'#ffffff'}
            fgColor={'#000000'}
            level={'L'}
            includeMargin={false}
            imageSettings={{
              src: 'https://static.zpao.com/favicon.png',
              x: undefined,
              y: undefined,
              height: 24,
              width: 24,
              excavate: true,
            }}
            className="qrcode"
          />
        </StQRWrapper>
        <h1>{shopName}</h1>

        <p>QR 코드로 가게를 홍보해보세요!</p>

        <Styled.BacktoPage onClick={() => navigate(-1)}>
          <img src={X} alt="X" />
        </Styled.BacktoPage>
      </Styled.QrcodePage>
    </StQRPageWrapper>
  );
}

export default Qrcode;

const StQRPageWrapper = styled.section`
  background: url('image/backgroundImg.png');
  background-size: 375px;
  margin-top: -5px;
  height: 100vh;
`;

const Styled = {
  QrcodePage: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16rem;

    width: 375px;
    height: 811px;
    margin-top: 0;

    & > h1 {
      font-family: '210 Sogeumjaengi';
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 40px;

      text-align: center;
      margin-top: -60px;
    }
    & > p {
      font-family: 'Pretendard';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      margin-top: 39px;
    }
  `,
  BacktoPage: styled.button`
    cursor: pointer;

    margin-top: 83px;
  `,
};

const StQRWrapper = styled.section`
  width: 293px;
  height: 293px;
  background: #ffffff;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  border: 1px solid transparent;
  padding: 33px 53px 0;

  & > .qrcode {
    width: 186px;
    height: 186px;
  }
`;
