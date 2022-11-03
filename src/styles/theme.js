// light
const lightModeBackground = 'hsl(0, 0%, 98%)';
const lightModeText = 'hsl(200, 15%, 8%)';
const lightModeElements = 'hsl(0, 0%, 100%)';

//dark
const darkModeBackground = 'hsl(207, 26%, 17%)';
const darkModeText = 'hsl(0, 0%, 100%)';
const darkModeElements = 'hsl(209, 23%, 22%)';

const theme = {
  title: 'theme',
  fontFamily: 'Georgia',
  shadow: '',
  borderRadius: '7px',
  color: {
    background: '',
    text: '',
    elements: '',
  },
};

export const lightTheme = {
  ...theme,
  title: 'light',
  shadow: 'hsl(209, 23%, 22%) 0 0 2px',
  color: {
    background: lightModeBackground,
    text: lightModeText,
    elements: lightModeElements, 
  },
};

export const darkTheme = {
  ...theme,
  title: 'dark',
  shadow: 'hsl(0, 0%, 100%) 0 0 2px',
  color: {
    background: darkModeBackground,
    text: darkModeText,
    elements: darkModeElements, 
  },
};
  

