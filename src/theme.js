import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#2D3D63'
    },
    secondary: {
      main: '#ffffff'
    },
  },
  typography: {
    h1: {
      fontSize: '80px'
    },
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;