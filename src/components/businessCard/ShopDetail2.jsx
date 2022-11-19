import styled from 'styled-components';
import Check from '../../assets/icon/ic_check.svg';
import { useState } from 'react';

function ShopDetail2() {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const [toggle, setToggle] = useState(false);

  const handleYes = () => {
    setToggle(true);
  };
  const handleNo = () => {
    setToggle(false);
  };

  return (
    <StShopDetailWrapper>
      <input type="text" placeholder="주소" />
      <StCheck src={Check} alt="체크버튼" />
      <StDeliveryCheck>
        <h1>택배가능여부</h1>
        <input type="checkbox" id="toggle" hidden />
        <label for="toggle" className="toggleswitch">
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
        <StCheck src={Check} alt="체크버튼" />
      </StDeliveryCheck>
      <hr />
      <StWorkDays>
        <div>
          <h1>영업요일</h1>
          <StCheck src={Check} alt="체크버튼" />
        </div>
        <div>
          {days.map((day, index) => (
            <StDayCircle key={index}>{day}</StDayCircle>
          ))}
        </div>
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

const StDeliveryCheck = styled.section`
  display: flex;
  justify-content: space-between;
  width: 122px;
  height: 35px;

  & > span.toggleYes {
    width: 50%;
    border-radius: 0px 5px 5px 0px;
    position: relative;
    cursor: pointer;
  }

  & > span.toggleNo {
    width: 50%;
    border-radius: 5px 0px 0px 5px;
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

  background-color: grey;
`;

const StWorkDays = styled.section`
  display: flex;
  flex-direction: column;
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    width: 375px;
    height: 25px;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;

    width: 375px;
  }
`;
