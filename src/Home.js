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
    letterSpacing: '.1rem',
    textDecoration: 'none',
    overflow: 'hidden',
    borderRight: '.1em solid #2D3D63',
    width: 0,
    animation: 'typing 3s steps(100, end) forwards, blink .7s infinite',
  }
};

function Introduction() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>
          Placeholder img
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          What is CVK?
        </Typography>
        <Typography>
          We are a summer camp on Jeju Island with Harvard, Yale, and Princeton college students acting as mentors and teachers.
        </Typography>
        <Typography>
          Founded in 2022, the first ever iteration of Camp Veritas Korea (CVK) ran from late June to early August 2022. 
          Our mission is to provide an alternative summer camp experience on Jeju Island that values well-roundedness and 
          experiential education rather than repetitive, mindless work.
        </Typography>
      </Grid>
    </Grid>
  );
}

function WhatWeDo() {
  return (
    <Grid container sx={{ backgroundColor: '#2D3D63', color: '#ffffff' }}>
      <Grid item xs={6}>
        <Typography>
          What we do
        </Typography>
        <Typography>
          We have classes for students in: grades 1-2, grades 3-4, grade 5, grade 6, grade 7, and grade 8. 
          We believe a small classroom setting is important for the best learning and thus we guarantee that the class size is 
          no larger than 7 students. An example schedule may look like the one on the right.
          <br /><br />
          Notice that we have allotted extracurricular time at the end of each day. These extracurricular offerings are based on 
          mentor experience and mentee interest. We offered 4 different extracurriculars last summer, including coding and song writing.
        </Typography>
        <Button>
          Past mentors
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Placeholder table
        </Typography>
      </Grid>
    </Grid>
  );
}

function Testimonials() {
  return (
    <Box sx={{backgroundColor: '#E1DFD9' }}>
      <Typography>
        Testimonials
      </Typography>
      <Typography>
        Hear from some of our former students, and see more about camp alumni here.
        {/* insert link to alumni tab */}
      </Typography>
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item xs="auto">
        <Typography>
            Placeholder quote
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Typography>
            Placeholder video
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Typography>
            Placeholder quote
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

function ContactUs() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>
          Contact Us
        </Typography>
        <Typography>
          Interested in participating in Camp Veritas Korea as a student?
          <br />
          Email us at campveritaskorea@gmail.com to learn more.
          
          Interested in being a mentor at Camp Veritas Korea?
          <br />
          Applications will be released soon, stay tuned for updates.
        </Typography>
        {/* add a button for interest form? maybe? */}
        {/* add a button for email us */}
        {/* think I might just turn the below into a footer */}
        <Typography>
          Camp Veritas Korea
          123 Anywhere St.
          Any City, ST 12345
        </Typography>
        <Typography>
          Tel. 123-456-7890
          Email: campveritaskorea@gmail.com
          Instagram: @summer.veritas
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Placeholder image
        </Typography>
      </Grid>
    </Grid>
  );
}

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Home">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box>
            <Box display='inline-block'>
              <Typography variant="h1"
                style={styles.typewriter}
              >
                RETHINKING EDUCATION
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ pl: '20%', pr: '20%', pb: '20px' }}>
              An annual summer camp on Jeju Island, Camp Veritas Korea offers unique opportunities to learn from and with Harvard, Yale, and Princeton 
              college students.
            </Typography>
            <Button sx={
              {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                ':hover': 
                {
                  color: theme.palette.primary.main,
                  backgroundColor: 'white',
                },
              }}
            >
              I'm interested
            </Button>
          </Box>
        </Box>
        <Introduction />
        <WhatWeDo />
        <Testimonials />
        <ContactUs />
      </div>
    </ThemeProvider>
  );
}

export default Home;
