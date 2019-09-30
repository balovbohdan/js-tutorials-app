import * as React from 'react';
import styled from 'styled-components';

import { CommonBtn } from '@components/btns/common';
import { Schema } from '@lib/theme';
import { theme } from '@configs';

export const Header = () =>
  <Wrapper>
    <CommonBtn schema={Schema.TRANSPARENT} txtColor={Schema.LIGHT}>Click me</CommonBtn>
  </Wrapper>;

const Wrapper = styled.div`
  width: 100%;
  height: ${theme.header.height}px;
  
  display: flex;
  align-items: center;
  
  padding: ${theme.header.padding}px;
  background-color: ${theme.header.backgroundColor};
`;
