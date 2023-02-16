// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import HeaderImg from './img/header_transparent.png';
import IntroImg from './img/jeju1.jpg';

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
  },
  introBox: {
    backgroundImage: `url(${IntroImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: '100%',
    height: '500px'
  },
  introContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    alignSelf: 'flex-end'
  }
};

function Introduction() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Box style={styles.introBox } />
      </Grid>
      <Grid item xs={6} sx={{ pl: "5%", pr: "5%", display: "flex" }}>
        <Box style={styles.introContent} >
          <Typography variant="h3" sx={{ pt: '5%', letterSpacing: '.1rem' }} gutterBottom >
            WHAT IS CVK?
          </Typography>
          <Typography variant="subtitle1" sx={{ pb: '20px' }} >
            We are an annual summer camp on Jeju Island with Harvard, Yale, and Princeton college students acting as mentors and teachers.
          </Typography>
          <Typography variant="body1" sx={{ pb: '10%' }} >
            Founded in 2022, the first ever iteration of Camp Veritas Korea (CVK) ran from late June to early August 2022. 
            Our mission is to provide an alternative summer camp experience on Jeju Island that values well-roundedness and 
            experiential education rather than repetitive, mindless work.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

function WhatWeDo() {
  return (
    <Grid container sx={{ backgroundColor: '#2D3D63', color: '#ffffff' }}>
      <Grid item xs={6} sx={{ textAlign: 'left', pl: '5%', pr: '5%' }}>
        <Typography variant="h3" sx={{ pt: '5%', letterSpacing: '.1rem' }} gutterBottom >
          WHAT WE DO
        </Typography>
        <Typography variant="body1">
          We have classes for students in: grades 1-2, grades 3-4, grade 5, grade 6, grade 7, and grade 8. 
          We believe a small classroom setting is important for the best learning and thus we guarantee that the class size is 
          no larger than 7 students. An example schedule may look like the one on the right.
          <br /><br />
          Notice that we have allotted extracurricular time at the end of each day. These extracurricular offerings are based on 
          mentor experience and mentee interest. We offered 4 different extracurriculars last summer, including coding and song writing.
        </Typography>
        <Button sx={
          {
            mt: "2%",
            mb: "5%",
            color: theme.palette.primary.main,
            backgroundColor: 'white',
            ':hover': 
            {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
        >
          Past mentors
        </Button>
      </Grid>
      <Grid item xs={6}>
        <table>
          <tr>
            <th>9:00 - 9:50</th>
            <td>Science (biology, chemistry, physics, geology, etc.)</td>
          </tr>
          <tr>
            <th>10:00 - 10:50</th>
            <td>Mathematics (algebra, geometry, combinatorics, number theory)</td>
          </tr>
          <tr>
            <th>11:00 - 11:50</th>
            <td>Creative writing (poetry, short stories, novella, etc.)</td> 
          </tr>
          <tr>
            <th>12:00 - 12:50</th>
            <td>Lunch break</td> 
          </tr>
          <tr>
            <th>13:00 - 13:50</th>
            <td>History (U.S. and world)</td>
          </tr>
          <tr>
            <th>14:00 - 14:50</th>
            <td>Literature (selected readings include The Odyssey and Antigone)</td>
          </tr>
          <tr>
            <th>15:00 - 15:50</th>
            <td>Philosophy</td>
          </tr>
          <tr>
            <th>16:00 - 16:50</th>
            <td>Extracurricular time (coding, songwriting, dance, etc.)</td>
          </tr>
        </table>
      </Grid>
    </Grid>
  );
}

function Testimonials() {
  return (
    <Box sx={{backgroundColor: '#E1DFD9' }}>
      <Typography variant="h3" sx={{ pt: "2%" }}>
        TESTIMONIALS
      </Typography>
      <Typography variant="subtitle1" gutterBottom >
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
        <Typography variant="h3" >
          CONTACT US
        </Typography>
        <Typography variant="subtitle1">
          Interested in participating in Camp Veritas Korea as a student?
          <br />
          Email us at campveritaskorea@gmail.com to learn more.
          <br />
          <br />
          Interested in being a mentor at Camp Veritas Korea?
          <br />
          Applications will be released soon, stay tuned for updates.
        </Typography>
        {/* add a button for interest form? maybe? */}
        {/* add a button for email us */}
        {/* think I might just turn the below into a footer */}
        <br />
        <br />
        <br />

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
