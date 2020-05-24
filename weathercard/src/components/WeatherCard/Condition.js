import React from 'react';
import styled from '@emotion/styled';

const Condition = (props) => {
  const Temp = styled.h1`
    font-family: 'Fira Code', sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  const State = styled.h3`
    font-family: 'Merriweather', sans-serif;
    font-size: 1.2 rem;
  `;

  return (
    <>
      <Temp>22 ˚C</Temp>
      <State>Very Sunny Lilian</State>
    </>
  );
};

export default Condition;
