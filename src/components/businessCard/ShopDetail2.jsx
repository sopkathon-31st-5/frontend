import styled from 'styled-components';
// import checked_icon from './assets/icon/ic_inputChecked.svg';
function ShopDeatial2() {
  return (
    <Styled.ShopDetail2>
      <Styled.InfoText>가게의 상세정보를 알려주세요 (1/2)</Styled.InfoText>
      <Styled.InputList>
        <Styled.DetailInput placeholder="사장님 성함"></Styled.DetailInput>
        <Styled.DetailInput placeholder="가게 이름"></Styled.DetailInput>
        <Styled.DetailInput placeholder="전화번호 (-없이 입력)"></Styled.DetailInput>
        <Styled.DetailInput placeholder="한줄 소개 (20자 이내)"></Styled.DetailInput>
      </Styled.InputList>
    </Styled.ShopDetail2>
  );
}

const Styled = {
  ShopDetail2: styled.section``,
  InfoText: styled.div``,
  InputList: styled.div``,
  DetailInput: styled.input.attrs({ type: 'text' })``,
  Ischecked: styled.img``,
};
export default ShopDeatial2;
