import { useState } from 'react';
import styled from 'styled-components';
import checked_icon from '../../assets/icon/ic_inputChecked.svg';
import unchecked_icon from '../../assets/icon/ic_inputUnchecked.svg';
import Button from '../common/Button';
import { useRecoilState } from 'recoil';
import userData from '../../states/atom/userData';

function ShopDeatial1({ setStep }) {
  const [namecheck, setnamecheck] = useState(false);
  const [storecheck, setstorecheck] = useState(false);
  const [callnumcheck, setcallnumcheck] = useState(false);
  const [detailcheck, setdetailcheck] = useState(false);
  const [inputData, setInputData] = useRecoilState(userData);
  const handleClick = () => {
    setStep('SHOP_ENVIRONMENT');
  };
  const nameChange = e => {
    // TODO 가게 이름 아닌 유저 이름으로 바꾸기
    setInputData({
      ...inputData,
      userName: {
        ...inputData.userName,
        name: e.target.value,
      },
    });
    if (e.target.value.length > 0 || inputData?.userName?.name > 0) {
      setnamecheck(true);
    } else {
      setnamecheck(false);
    }
  };
  const storeChange = e => {
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        name: e.target.value,
      },
    });
    if (e.target.value.length > 0) {
      setstorecheck(true);
    } else {
      setstorecheck(false);
    }
  };
  const callnumChange = e => {
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        telNumber: e.target.value,
      },
    });
    if (
      (e.target.value.length > 0 && !isNaN(e.target.value)) ||
      inputData?.card?.telNumber.length > 0
    ) {
      setcallnumcheck(true);
    } else {
      setcallnumcheck(false);
    }
  };
  const detailChange = e => {
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        introduce: e.target.value,
      },
    });
    if (e.target.value.length > 0 && e.target.value.length <= 40) {
      setdetailcheck(true);
    } else {
      setdetailcheck(false);
    }
  };

  return (
    <Styled.ShopDetail1>
      <Styled.InputList>
        <Styled.InputDiv>
          <Styled.InputText>성함</Styled.InputText>
          <div style={{ height: '5rem' }}>
            <Styled.DetailInput
              onChange={e => nameChange(e)}
              placeholder="사장님 성함"
              defaultValue={inputData?.userName?.name}
            ></Styled.DetailInput>
            <Styled.Ischecked src={checked_icon} />
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
              defaultValue={inputData?.card?.telNumber}
            ></Styled.DetailInput>
            <Styled.Ischecked src={checked_icon} />
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
      <Button onClick={handleClick} className="button" disabled={!detailcheck || !storecheck}>
        다음으로
      </Button>
    </Styled.ShopDetail1>
  );
}

const Styled = {
  ShopDetail1: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & .button {
      margin-top: 100px;
    }
  `,

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
