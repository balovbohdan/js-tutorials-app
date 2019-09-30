import * as React from 'react';
import styled from 'styled-components';

import img from '@img/loader.svg';
import { theme } from '@configs';

export const PagePreloader = () =>
  <Wrapper>
    <Loader />
  </Wrapper>;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  position: absolute;
  background-color: ${theme.colors.primary};
`;

const Loader = styled.div`
  width: 50px;
  height: 50px;
  
  position: absolute;
  
  top: calc(50vh - 25px);
  left: calc(50vw - 25px);
  
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${img});
  background-position: center center;
`;
