import styled from 'styled-components';
import checked_icon from '../../assets/icon/ic_inputChecked.svg';
import unchecked_icon from '../../assets/icon/ic_inputUnchecked.svg';
import { useState } from 'react';

function ShopDetail2() {
  // 배달 가능 여부
  const [toggle, setToggle] = useState(false);
  const [isDeliveryClicked, setIsDeliveryClicked] = useState(false);
  const [daysNew, setDaysNew] = useState([
    { week: '월', isActive: false },
    { week: '화', isActive: false },
    { week: '수', isActive: false },
    { week: '목', isActive: false },
    { week: '금', isActive: false },
    { week: '토', isActive: false },
    { week: '일', isActive: false },
  ]);

  const handleYes = () => {
    setToggle(true);
    setIsDeliveryClicked(true);
    console.log(isDeliveryClicked);
  };
  const handleNo = () => {
    setToggle(false);
    setIsDeliveryClicked(true);
  };

  const toggleActive = e => {
    const idx = e.currentTarget.id;
    let copyDay = [...daysNew];
    copyDay[idx].isActive = !copyDay[idx].isActive;
    setDaysNew(copyDay);
  };

  const [namecheck, setnamecheck] = useState(false);
  const nameChange = e => {
    if (e.target.value.length > 0) {
      setnamecheck(true);
    } else {
      setnamecheck(false);
    }
  };
  console.log('daysNew', daysNew);

  return (
    <StShopDetailWrapper>
      <Styled.InputDiv>
        <Styled.InputText>주소</Styled.InputText>
        <div style={{ height: '5rem' }}>
          <Styled.DetailInput onChange={e => nameChange(e)} placeholder="주소"></Styled.DetailInput>
          <Styled.Ischecked src={namecheck ? checked_icon : unchecked_icon} />
        </div>
      </Styled.InputDiv>

      <StDeliveryCheck>
        <Styled.InputText>택배가능여부</Styled.InputText>
        <input type="checkbox" id="toggle" hidden />
        <label htmlFor="toggle" className="toggleswitch">
          {toggle ? (
            <>
              <span
                className="toggleYes"
                onClick={handleYes}
                style={{ backgroundColor: '#0BE600' }}
              >
                예
              </span>
              <span className="toggleNo" onClick={handleNo} style={{ backgroundColor: '#EAEAEA' }}>
                아니오
              </span>
            </>
          ) : (
            <>
              <span
                className="toggleYes"
                onClick={handleYes}
                style={{ backgroundColor: '#EAEAEA' }}
              >
                예
              </span>
              <span className="toggleNo" onClick={handleNo} style={{ backgroundColor: '#FF3333' }}>
                아니오
              </span>
            </>
          )}
        </label>
        <StCheck src={!isDeliveryClicked ? checked_icon : unchecked_icon} />
      </StDeliveryCheck>
      <hr />
      <StWorkDays>
        <div>
          <Styled.InputText>영업요일</Styled.InputText>
          <StCheck src={checked_icon} alt="체크버튼" />
        </div>
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
      <button type="button">확인</button>
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

  padding-left: 24px;

  & > label.toggleswitch {
    width: 122px;
    height: 35px;
  }

  & > label > span.toggleYes {
    width: 50%;
    border-radius: 5px 0px 0px 5px;

    position: relative;
    cursor: pointer;
  }

  & > label > span.toggleNo {
    width: 50%;
    border-radius: 0px 5px 5px 0px;

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

  border: 1px solid transparent;
  border-radius: 20px;

  background: ${({ isActive }) => (isActive ? '#338bff' : 'grey')};

  cursor: pointer;
`;

const StWorkDays = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 28px 0 24px;

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
