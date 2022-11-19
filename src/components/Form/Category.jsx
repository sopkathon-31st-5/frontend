import React from 'react';
import styled from 'styled-components';
import Fruit from '../../assets/image/fruit.svg';
import Vegetable from '../../assets/image/vegetable.svg';
import Fish from '../../assets/image/fish.svg';
import Meat from '../../assets/image/meat.svg';
import Ddak from '../../assets/image/dddak.svg';
import Etc from '../../assets/image/etc.svg';
import { useRecoilState } from 'recoil';
import userData from '../../states/atom/userData';

function Category() {
  const [inputData, setInputData] = useRecoilState(userData);
  const handleClick = e => {
    setInputData({
      ...inputData,
      card: {
        ...inputData.card,
        type: Number(e.target.id),
      },
    });
  };
  return (
    <StMain onClick={handleClick}>
      <StImg src={Fruit} alt="과일" role="button" tabIndex={0} id="1" />
      <StImg src={Vegetable} alt="야채" role="button" tabIndex={0} id="4" />
      <StImg src={Fish} alt="생선" role="button" tabIndex={0} id="3" />
      <StImg src={Meat} alt="고기" role="button" tabIndex={0} id="2" />
      <StImg src={Ddak} alt="방앗간" role="button" tabIndex={0} id="5" />
      <StImg src={Etc} alt="기타" role="button" tabIndex={0} id="12" />
    </StMain>
  );
}

export default Category;
const StMain = styled.main``;
const StImg = styled.img`
  cursor: pointer;
`;
