import React from 'react';
import styled from 'styled-components';
import Fruit from '../../assets/image/i_fruit.svg';
import Vegetable from '../../assets/image/i_vegetable.svg';
import Fish from '../../assets/image/i_fish.svg';
import Meat from '../../assets/image/i_meat.svg';
import Ddak from '../../assets/image/i_ddak.svg';
import Etc from '../../assets/image/i_etc.svg';
import { useRecoilState } from 'recoil';
import userData from '../../states/atom/userData';
import Button from '../common/Button';

function Category({ setStep }) {
  const [inputData, setInputData] = useRecoilState(userData);
  const handleClick = e => {
    console.log('e', e.currentTarget.id);
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        type: Number(e.currentTarget.id),
      },
    });
  };
  return (
    <StMain>
      <StWrapper
        id="1"
        role="button"
        tabIndex={0}
        onClick={handleClick}
        isSelected={inputData.card.type === 1}
      >
        <StImg src={Fruit} alt="과일" />
      </StWrapper>
      <StWrapper
        role="button"
        tabIndex={0}
        id="4"
        onClick={handleClick}
        isSelected={inputData.card.type === 4}
      >
        <StImg src={Vegetable} alt="야채" />
      </StWrapper>
      <StWrapper
        role="button"
        tabIndex={0}
        id="3"
        onClick={handleClick}
        isSelected={inputData.card.type === 3}
      >
        <StImg src={Fish} alt="생선" />
      </StWrapper>
      <StWrapper
        role="button"
        tabIndex={0}
        id="2"
        onClick={handleClick}
        isSelected={inputData.card.type === 2}
      >
        <StImg src={Meat} alt="고기" />
      </StWrapper>
      <StWrapper
        role="button"
        tabIndex={0}
        id="5"
        onClick={handleClick}
        isSelected={inputData.card.type === 5}
      >
        <StImg src={Ddak} alt="방앗간" />
      </StWrapper>
      <StWrapper
        role="button"
        tabIndex={0}
        id="12"
        onClick={handleClick}
        isSelected={inputData.card.type === 12}
      >
        <StImg src={Etc} alt="기타" />
      </StWrapper>
      <Button
        onClick={() => {
          setStep('SHOP_DETAIL');
        }}
        className="button"
      >
        다음으로
      </Button>
    </StMain>
  );
}

export default Category;
const StMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
  & .button {
    margin-top: 100px;
  }
`;
const StWrapper = styled.div`
  border-radius: 5px;
  width: 165px;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;

  ${({ isSelected }) =>
    isSelected
      ? `box-shadow: 0px 0px 10px rgba(51, 139, 255, 0.5); border: 3px solid #338BFF;`
      : 'box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);'}
`;
const StImg = styled.img`
  cursor: pointer;
`;
