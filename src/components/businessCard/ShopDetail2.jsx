import styled from 'styled-components';
import checked_icon from '../../assets/icon/ic_inputChecked.svg';
import unchecked_icon from '../../assets/icon/ic_inputUnchecked.svg';
import { useState } from 'react';
import Button from '../common/Button';
import { useRecoilState } from 'recoil';
import userData from '../../states/atom/userData';

function ShopDetail2({ setStep }) {
  // 배달 가능 여부
  const [toggle, setToggle] = useState(false);
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
  const [checkedDay, setcheckedDay] = useState(false);
  const [inputData, setInputData] = useRecoilState(userData);
  const [daysNew, setDaysNew] = useState([
    { week: '월', isActive: false, en: 'mon' },
    { week: '화', isActive: false, en: 'tue' },
    { week: '수', isActive: false, en: 'wed' },
    { week: '목', isActive: false, en: 'thu' },
    { week: '금', isActive: false, en: 'fri' },
    { week: '토', isActive: false, en: 'sat' },
    { week: '일', isActive: false, en: 'sun' },
  ]);

  const handleClick = () => {
    setStep('SHOP_IMAGE');
  };

  const handleYes = () => {
    setToggle(true);
    setIsDeliveryClicked(true);
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        isDeliver: true,
      },
    });
  };
  const handleNo = () => {
    setToggle(false);
    setIsDeliveryClicked(true);
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        isDeliver: false,
      },
    });
  };

  const toggleActive = e => {
    const idx = e.currentTarget.id;
    let copyDay = [...daysNew];
    copyDay[idx].isActive = !copyDay[idx].isActive;
    setcheckedDay(true);
    setDaysNew(copyDay);
    const weekDayData = {};
    copyDay.map(item => {
      return (weekDayData[item.en] = item.isActive);
    });
    setInputData({
      ...inputData,
      weekday: weekDayData,
    });
  };

  const [addresscheck, setaddresscheck] = useState(false);
  const nameChange = e => {
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        address: e.target.value,
      },
    });
    if (e.target.value.length > 0) {
      setaddresscheck(true);
    } else {
      setaddresscheck(false);
    }
  };
  console.log('daysNew', daysNew);

  return (
    <StShopDetailWrapper>
      <Styled.InputDiv>
        <Styled.InputText>주소</Styled.InputText>
        <div style={{ height: '5rem' }}>
          <Styled.DetailInput onChange={e => nameChange(e)} placeholder="주소"></Styled.DetailInput>
          <Styled.Ischecked src={addresscheck ? checked_icon : unchecked_icon} />
        </div>
      </Styled.InputDiv>

      <StDeliveryCheck>
        <Styled.longInputText>택배가능여부</Styled.longInputText>
        <input type="checkbox" id="toggle" hidden />
        <label htmlFor="toggle" className="toggleswitch">
          {toggle ? (
            <>
              <div className="toggleYes" onClick={handleYes} style={{ backgroundColor: '#0BE600' }}>
                예
              </div>
              <div className="toggleNo" onClick={handleNo} style={{ backgroundColor: '#EAEAEA' }}>
                아니오
              </div>
            </>
          ) : (
            <>
              <div className="toggleYes" onClick={handleYes} style={{ backgroundColor: '#EAEAEA' }}>
                예
              </div>
              <div className="toggleNo" onClick={handleNo} style={{ backgroundColor: '#FF3333' }}>
                아니오
              </div>
            </>
          )}
        </label>
        <StCheck src={isDeliveryClicked ? checked_icon : unchecked_icon} />
      </StDeliveryCheck>
      <hr />
      <StWorkDays>
        <div>
          <Styled.InputText2>영업요일</Styled.InputText2>
          <StCheck src={checkedDay ? checked_icon : unchecked_icon} alt="체크버튼" />
        </div>
        <div style={{ display: 'flex', marginTop: '2.4rem' }}>
          <input type="checkbox" id="0" hidden />
          <input type="checkbox" id="1" hidden />
          <input type="checkbox" id="2" hidden />
          <input type="checkbox" id="3" hidden />
          <input type="checkbox" id="4" hidden />
          <input type="checkbox" id="5" hidden />
          <input type="checkbox" id="6" hidden />

          {daysNew.map((day, idx) => (
            <label htmlFor={idx} onClick={toggleActive} key={day.week} id={idx}>
              <StDayCircle isActive={day.isActive}>{day.week}</StDayCircle>
            </label>
          ))}
        </div>
        {/* <input type="checkbox" id="choose-days" hidden />
        <label for="choose-days" className="choosing-days">
          {days.map((day, idx) => (
            <>
              <StDayCircle
                value={idx}
                className={idx == btnActive ? 'active' : ''}
                onClick={toggleActive}
              >
                {day}
              </StDayCircle>
            </>
          ))}
        </label> */}
      </StWorkDays>
      <Button
        onClick={handleClick}
        className="button"
        disabled={!isDeliveryClicked || !toggle || !checkedDay}
      >
        다음으로
      </Button>
    </StShopDetailWrapper>
  );
}

export default ShopDetail2;

const StCheck = styled.img`
  width: 21px;
  height: 21px;
`;

const StShopDetailWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  & .button {
    margin-left: 16px;
    margin-top: 150px;
  }

  & > section.workDays {
    display: flex;
    justify-content: space-evenly;
  }
`;

const StAddress = styled.section`
  display: flex;
  align-items: center;

  padding-left: 24px;

  & input {
    width: 287px;
    height: 50px;

    margin-left: 18px;

    background: #eaeaea;
    border: 1px solid transparent;
    border-radius: 5px;

    & .checkButton {
      margin-left: -28px;
    }
  }
`;

const StDeliveryCheck = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 0 2.4rem 0 2.4rem;

  & > label.toggleswitch {
    width: 12.2rem;
    height: 35px;
    display: flex;
  }

  & > label > div.toggleYes {
    width: 50%;
    border-radius: 5px 0px 0px 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    /* 시장에가면/707070 */

    color: #707070;
  }

  & > label > div.toggleNo {
    width: 50%;
    border-radius: 0px 5px 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    /* identical to box height */

    /* 시장에가면/707070 */

    color: #707070;
    position: relative;
    cursor: pointer;
  }
`;

const StDayCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 42px;
  height: 42px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-right: 0.8rem;
  color: ${({ isActive }) => (isActive ? 'white' : '#B1B1B1')};
  background: ${({ isActive }) => (isActive ? '#338bff' : '#EAEAEA')};

  cursor: pointer;
`;

const StWorkDays = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem 0 2.4rem;
  margin-top: 1.4rem;
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

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
    color: #707070;
    text-align: left;
    padding-left: 2.4rem;
  `,
  InputText2: styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding-right: 1.6rem;
    width: 8rem;
    color: #707070;
    text-align: left;
  `,
  DetailInput: styled.input.attrs({ type: 'text' })`
    height: 5rem;
    background: #eaeaea;
    border-radius: 5px;
    border: none;
    width: 28.7rem;
    padding-left: 1.4rem;
  `,
  Ischecked: styled.img`
    position: relative;
    bottom: 3.5rem;
    right: 2.4rem;
  `,
  longInputText: styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.9rem;
    padding-right: 1.6rem;
    width: 10rem;
    color: #707070;
  `,
};
