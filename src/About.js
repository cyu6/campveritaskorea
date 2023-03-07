// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import HeaderImg from './img/header_transparent.png';
import Haze from './img/mentors/placeholder.png';

const styles = {
  headerBox: {
    backgroundImage: `url(${HeaderImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '300px',
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

function About() {
  return (
    <ThemeProvider theme={theme}>
      <div className="about">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box sx={{ pl: '10%', pr: '10%', textAlign: 'center'}}>
            <Box display='inline-block'>
              <Typography variant="h1"
                style={styles.typewriter}
              >
                ABOUT US
              </Typography>
            </Box>
            {/* <Typography variant="h6" >
              who is cvk
            </Typography> */}
          </Box>
        </Box>
        <Box sx={{ pl: '5%', pr: '5%' }}>
          <Box sx={{ p: '2%' }} />
          <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={8}>
            <Box sx={{ width: '60%' }}>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                Veritas Education is an education startup that was founded by two Yalies in 2022.
                Its annual summer program, <b>Camp Veritas</b>, offers unique opportunities to learn the liberal arts from Harvard, Yale, and Princeton undergraduates.
                <br />
                <br />
                The first ever iteration of the program ran from late June to early August 2022 at Jeju Island, South Korea.
              </Typography>
            </Box>
            <Box sx={{ width: '40%' }}>
              placeholder image
            </Box>
          </Stack>
          <Box sx={{ p: '2%' }} />
          <Typography variant="h3" sx={{ pb: '2%' }}>
            Company Mission
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={8}>
            <Box sx={{ width: '50%' }}>
              <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                Mentorship
              </Typography>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                Most of our mentors are recent graduates or upperclassmen from Harvard, Yale, and Princeton. Unlike teachers in a traditional classroom setting, our mentors' purpose is to serve as a direct role model for our students, imparting not only knowledge but models of curiosity and ambition.
              </Typography>
            </Box>
            <Box sx={{ width: '50%', textAlign: 'justify' }}>
              <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                Liberal Arts
              </Typography>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                We offer a liberal arts education that is not based on a set syllabi. We introduce the lessons and concepts that we ourselves learned in our universities to our mentees, accommodated to their level.
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ p: '2%' }} />
          <Typography variant="h3" sx={{ pb: '2%' }}>
            Education Philosophy
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={8}>
            <Box sx={{ width: '50%' }}>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                At Camp Veritas, we rarely use the word "teacher" or "student".
                <br />
                We believe that mentees learn best when they are taught by inspiring mentors. We aim to educate the next generation of elites in the <i>liberal arts</i> through <i>close mentorship</i>.
              </Typography>
            </Box>
            <Box sx={{ width: '50%' }}>
              placeholder image
            </Box>
          </Stack>
          <Box sx={{ p: '1%' }} />
          <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={8}>
            <Box sx={{ width: '50%' }}>
              placeholder image
            </Box>
            <Box sx={{ width: '50%' }}>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                -- We aim to bring the <i>liberal arts</i> curriculum of the Ivy League education to South Korea.
                <br/>
                -- We teach <i>how we were taught</i> in our universities. Most classes are based on writing, debate, and group work.
                <br />
                -- Each syllabus is uniquely built by the individual mentors. Think of it as their <i>master class</i>.
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ p: '2%' }} />
          <Typography variant="h3" sx={{ pb: '2%' }}>
            Our Team
          </Typography>
          <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={8}>
            <Box sx={{ width: '50%' }}>
              <Box style={{ 
                  backgroundImage: `url(${Haze})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  width: '500px',
                  height: '500px',
                  marginBottom: '10px'
                }}
              />
              <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                Haze Lee
              </Typography>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                Co-founder and CEO
              </Typography>
              <Typography variant="body1" >
                Yale College, B.A., Film & Media Studies, Comparative Literature
              </Typography>
            </Box>
            <Box sx={{ width: '50%' }}>
              <Box style={{ 
                  backgroundImage: `url(${Haze})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  width: '500px',
                  height: '500px',
                  marginBottom: '10px'
                }}
              />
              <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                Harrison Muth
              </Typography>
              <Typography variant="body1" style={{ fontSize: '20px' }}>
                Co-founder
              </Typography>
              <Typography variant="body1" >
                Yale College, B.A., Economics, Humanities
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ p: '2%' }} />
        </Box>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default About;
