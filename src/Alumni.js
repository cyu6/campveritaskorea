// import logo from './logo.svg';
import NavBar from './NavBar';
import Footer from './Footer';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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


function Testimonials() {
  return (
    <Box>
      <Typography variant="h3" sx={{ pt: "2%", pb: '2%' }}>
        TESTIMONIALS
      </Typography>
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item xs="4">
          <Typography variant="body1" style={{ fontSize: '18px'}} >
            "Learning from the mentors was the first time I saw someone and thought, 'wow, I want to be like them'. They made me work harder to achieve my dreams." 
          </Typography>
          <br />
          <Typography variant="body1" style={{ fontSize: '16px' }} >
            -- Yeso Kim, BHA
          </Typography>
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
      </Grid>
      <Box sx={{ m: '20px' }} />
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          <Typography variant="body1" style={{ fontSize: '18px'}} >
            "My interest in the humanities exploded after attending Camp Veritas, and now I understand better what I want to do in the future. I learned that not only smart but also fun, approachable people go to schools like HYP (Harvard, Yale, and Princeton) and I really want to apply when the time comes." 
          </Typography>
          <br />
          <Typography variant="body1" style={{ fontSize: '16px' }} >
            -- Chris Jeong, NLCS
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function Alumni() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Mentors">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box sx={{ textAlign: 'center', pl: '10%', pr: '10%' }}>
            <Box display='inline-block'>
              <Typography variant="h1" gutterBottom
                style={styles.typewriter}
              >
                CAMP ALUMNI
              </Typography>
            </Box>
            <Typography variant="h6" >
              Meet some of our camp alumni and catch up with them on where they are today.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pt: '2%', pb: '2%', pl: '5%', pr: '5%' }}>
          <Typography variant="h3" sx={{ pt: "2%", pb: '2%' }}>
            MENTEE FACTS
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '20px' }}>
            Most mentees attend Jeju international schools such as NLCS, BHA, KISJ, and SJA, but some of our attendees in 2022 were from Seoul, Dubai, and Canada.
          </Typography>
          <Testimonials />
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Alumni;
