import styled from 'styled-components';
import { QRCodeSVG } from 'qrcode.react';
function Qrcode({ userId = 'user' }) {
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
      <Styled.BacktoPage>X</Styled.BacktoPage>
    </Styled.QrcodePage>
  );
}

const Styled = {
  QrcodePage: styled.section``,
  BacktoPage: styled.button``,
};
export default Qrcode;
