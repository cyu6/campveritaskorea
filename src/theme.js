import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const defaultTheme = createTheme({})
const { breakpoints } = defaultTheme

let theme = createTheme(defaultTheme, 
  {
    palette: {
      primary: {
        main: '#2D3D63'
      },
      secondary: {
        main: '#ffffff'
      },
    },
  }
);

theme = createTheme(theme,
  {
    typography: {
      h1: {
        fontFamily: 'Fragment Mono',
        fontWeight: 700,
        color: '#2D3D63',
        whiteSpace: 'nowrap',
        [breakpoints.down("lg")]: {
          whiteSpace: 'normal'
        }
      },
      h6: {
        fontFamily: 'Quattrocento',
        fontWeight: 700
      },
      body1: {
        fontWeight: 500,
      },
      button: {
        
      },
    },
  }
);

theme = responsiveFontSizes(theme);

export default theme;