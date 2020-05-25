import React from 'react';
import styled from '@emotion/styled';

const Condition = ({ temp, condition }) => {
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
      <Temp>{temp} ˚F</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
