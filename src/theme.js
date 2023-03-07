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
      h3: {
        fontFamily: 'Fragment Mono',
        fontWeight: 400,
        fontSize: '3.5rem'
      },
      h6: {
        fontFamily: 'Quattrocento',
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: 'Quattrocento',
        fontWeight: 700,
        fontSize: '1.2rem',
        lineHeight: 1.5
      },
      body1: {
        fontFamily: 'Biryani',
        fontWeight: 300,
        fontSize: '0.9rem'
      },
      button: {
        fontFamily: 'Biryani'
      }
    },
  }
);

theme = responsiveFontSizes(theme);

export default theme;