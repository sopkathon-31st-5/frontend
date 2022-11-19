import styled from 'styled-components';

function ShopMap() {
  <Styled.ShopMap>
    <Styled.ShopInfo>어떤 가게인가요?(선택)</Styled.ShopInfo>
    <Styled.PhotoInput />
    <Styled.ShopText>
      가게 사진과 영상등으로 <br />
      가게를 소개해주세요!
    </Styled.ShopText>
  </Styled.ShopMap>;
}

const Styled = {
  ShopMap: styled.section``,
  ShopInfo: styled.div``,
  PhotoInput: styled.input.attrs({ type: 'file' })``,
  ShopText: styled.div``,
};
export default ShopMap;
