// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';
// import Footer from './Footer';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import HeaderImg from './img/header_transparent.png';

const styles = {
  headerBox: {
    backgroundImage: `url(${HeaderImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typewriter: {
    mr: 2,
    letterSpacing: '.1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    borderRight: '.1em solid #2D3D63',
    width: 0,
    animation: 'typing 3s steps(100, end) forwards, blink .8s infinite',
  }
};

function Summer22() {
  return (
    <ThemeProvider theme={theme}>
      <div className="about">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box sx={{ pl: '10%', pr: '10%', textAlign: 'center'}}>
            <Box display='inline-block'>
              <Typography variant="h1" gutterBottom
                style={styles.typewriter}
              >
                SUMMER 2022
              </Typography>
            </Box>
            <Typography variant="h6" >
              June 28, 2022 -- August 6, 2022
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pl: '5%', pr: '5%' }}>
          <Box sx={{ p: '2%' }} />
          <Typography variant="subtitle1" sx={{ pl: '10%', pr: '10%', textAlign: 'center' }}>
            In 2022, Camp Veritas invited three mentors each from Harvard, Yale, and Princeton to teach 40 Korean students. 
            <br/>
            The average mentor to mentee ratio was 1:5 per class.
            <br/>
            <br />
            Watch the recap video below!
          </Typography>
          <Box sx={{ p: '2%' }} />
          <Box sx={{ alignContent: 'center' }}>
            placeholder video
          </Box>
        </Box>
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default Summer22;
