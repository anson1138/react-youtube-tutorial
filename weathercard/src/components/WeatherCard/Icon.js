import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {
  const Icon = styled.img`
    width: 40%;
  `;

  return <Icon img src="./img/Mostly Cloudy-2x.png" alt="Weather Icon" />;
};

export default Icon;
