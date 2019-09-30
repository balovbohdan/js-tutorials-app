import { Schema, Size } from '@lib/theme';
import { theme } from '@configs';

const { colors, hoverColors, oppositeColors, fontSizes } = theme;

export const createTheme = (
  size:Size = Size.MD,
  schema:Schema = Schema.PRIMARY,
  txtColor:Schema = Schema.DARK,
) => `
  background-color: ${colors[schema]};

  font-size: ${fontSizes[size]};
  color: ${theme.txtColors[txtColor]};
  
  &:hover {
    background-color: ${hoverColors[schema]};
  }
`;
