// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import HeaderImg from './img/header_transparent.png';

const styles = {
  headerBox: {
    backgroundImage: `url(${HeaderImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '700px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  typewriter: {
    mr: 2,
    fontFamily: 'Fragment Mono',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: '#2D3D63',
    textDecoration: 'none',
    overflow: 'hidden',
    borderRight: '.1em solid #2D3D63',
    width: 0,
    animation: 'typing 3s steps(100, end) forwards, blink .8s infinite',
    whiteSpace: 'nowrap'
  }
};

function Mentors() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Mentors">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box>
            <Box display='inline-block'>
              <Typography variant="h1" gutterBottom
                style={styles.typewriter}
              >
                PAST MENTORS
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ pl: '25%', pr: '25%'}}>
              See our past mentors and their class offerings.
            </Typography>
            <Button>
              This is a button
              {/* some CTA */}
            </Button>
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Mentors;
