import { useState } from 'react';
import styled from 'styled-components';
import checked_icon from '../../assets/icon/ic_inputChecked.svg';
import unchecked_icon from '../../assets/icon/ic_inputUnchecked.svg';

function ShopDeatial1() {
  const [namecheck, setnamecheck] = useState(false);
  const [storecheck, setstorecheck] = useState(false);
  const [callnumcheck, setcallnumcheck] = useState(false);
  const [detailcheck, setdetailcheck] = useState(false);

  const nameChange = e => {
    if (e.target.value.length > 0) {
      setnamecheck(true);
    } else {
      setnamecheck(false);
    }
  };
  const storeChange = e => {
    if (e.target.value.length > 0) {
      setstorecheck(true);
    } else {
      setstorecheck(false);
    }
  };
  const callnumChange = e => {
    if (e.target.value.length > 0 && !isNaN(e.target.value)) {
      setcallnumcheck(true);
    } else {
      setcallnumcheck(false);
    }
  };
  const detailChange = e => {
    if (e.target.value.length > 0) {
      setdetailcheck(true);
    } else {
      setdetailcheck(false);
    }
  };

  return (
    <Styled.ShopDetail1>
      <Styled.InfoText>가게의 상세정보를 알려주세요 (1/2)</Styled.InfoText>
      <Styled.InputList>
        <Styled.InputDiv>
          <Styled.InputText>성함</Styled.InputText>
          <div style={{ height: '5rem' }}>
            <Styled.DetailInput
              onChange={e => nameChange(e)}
              placeholder="사장님 성함"
            ></Styled.DetailInput>
            <Styled.Ischecked src={namecheck ? checked_icon : unchecked_icon} />
          </div>
        </Styled.InputDiv>
        <Styled.InputDiv>
          <Styled.InputText>가게 이름</Styled.InputText>
          <div style={{ height: '5rem' }}>
            <Styled.DetailInput
              onChange={e => storeChange(e)}
              placeholder="가게 이름"
            ></Styled.DetailInput>

            <Styled.Ischecked src={storecheck ? checked_icon : unchecked_icon} />
          </div>
        </Styled.InputDiv>
        <Styled.InputDiv>
          <Styled.InputText>전화번호</Styled.InputText>
          <div style={{ height: '5rem' }}>
            <Styled.DetailInput
              onChange={e => callnumChange(e)}
              placeholder="전화번호 (-없이 입력)"
            ></Styled.DetailInput>
            <Styled.Ischecked src={callnumcheck ? checked_icon : unchecked_icon} />
          </div>
        </Styled.InputDiv>
        <Styled.InputDiv>
          <Styled.InputText>한줄 소개</Styled.InputText>
          <div style={{ height: '5rem' }}>
            <Styled.DetailInput
              onChange={e => detailChange(e)}
              placeholder="한줄 소개 (40자 이내)"
            ></Styled.DetailInput>
            <Styled.Ischecked src={detailcheck ? checked_icon : unchecked_icon} />
          </div>
        </Styled.InputDiv>
      </Styled.InputList>
    </Styled.ShopDetail1>
  );
}

const Styled = {
  ShopDetail1: styled.section``,

  InfoText: styled.div`
    height: 4.6rem;
    background-color: #338bff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: white;
    padding: 1.4rem 11.1rem 1.3rem 3.7rem;
  `,
  InputList: styled.div`
    padding: 0 1.6rem 0 1.6rem;
    margin-top: 2rem;
  `,
  InputDiv: styled.div`
    display: flex;
    align-items: center;
    height: 5rem;
    margin-bottom: 1.2rem;
    text-align: right;
  `,
  InputText: styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding-right: 1.6rem;

    width: 8rem;
  `,
  DetailInput: styled.input.attrs({ type: 'text' })`
    height: 5rem;
    background: #eaeaea;
    border-radius: 5px;
    border: none;
    width: 26rem;

    padding-left: 1.4rem;
  `,
  Ischecked: styled.img`
    position: relative;
    bottom: 3.6rem;
    right: 1.4rem;
  `,
};
export default ShopDeatial1;