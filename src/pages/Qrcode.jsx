import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
function Qrcode({ userId = 'user' }) {
  const navigate = useNavigate();
  return (
    <Styled.QrcodePage>
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
      />
      <Styled.BacktoPage onClick={() => navigate(-1)}>X</Styled.BacktoPage>
    </Styled.QrcodePage>
  );
}

const Styled = {
  QrcodePage: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16rem;
  `,
  BacktoPage: styled.button`
    width: 6.2rem;
    height: 6.2rem;
    border-radius: 100%;
    border: none;
    font-size: 1.8rem;
    margin-top: 12.2rem;
    cursor: pointer;
  `,
};
export default Qrcode;
