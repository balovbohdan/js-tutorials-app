import { Size, Schema } from '@lib/theme';

export const theme = {
  colors: {
    [Schema.PRIMARY]: '#9D8DF1',
    [Schema.DANGER]: 'red',
    [Schema.TRANSPARENT]: 'transparent',
  },
  hoverColors: {
    [Schema.PRIMARY]: '#3A81C9',
    [Schema.DANGER]: 'yellow',
    [Schema.TRANSPARENT]: 'rgba(255, 255, 255, .1)',
  },
  oppositeColors: {
    [Schema.PRIMARY]: 'white',
    [Schema.DANGER]: 'white',
    [Schema.TRANSPARENT]: '#090909',
  },
  txtColors: {
    [Schema.DARK]: '#0F0E0E',
    [Schema.LIGHT]: '#FBFBF2',
  },

  fontSizes: {
    [Size.BG]: '20px',
    [Size.MD]: '18px',
    [Size.SM]: '15px',
  },

  btn: {
    borderRadius: '3px',
  },
  header: {
    height: 50,
    padding: 10,
    backgroundColor: '#2E4057',
  },
};

export default theme;
