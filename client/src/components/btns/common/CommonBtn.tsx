import * as React from 'react';
import styled from 'styled-components';

import { theme } from '@configs/theme';
import { Schema, Size } from '@lib/theme';

import * as utils from './utils';

type Props = {
  children;

  size?:Size;
  schema?:Schema;
  txtColor?:Schema;
};

export const CommonBtn = ({ size, schema, children, txtColor }:Props) => {
  const customTheme = utils.createTheme(size, schema, txtColor);

  return (
    <Body theme={customTheme}>
      {children}
    </Body>
  );
};

CommonBtn.defaultProps = {
  size: Size.MD,
  schema: Schema.PRIMARY,
  txtColor: theme.txtColors[Schema.LIGHT],
};

const Body = styled.div`
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  border-radius: ${theme.btn.borderRadius};
  transition: background-color .1s ease-in;
  
  ${props => props.theme};
`;
