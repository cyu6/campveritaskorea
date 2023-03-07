// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useState } from 'react';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import HeaderImg from './img/header_transparent.png';
import IntroImg from './img/jeju1.jpg';

import { send } from 'emailjs-com';

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
    <Grid container sx={{ backgroundColor: '#2D3D63', color: '#ffffff', minHeight: '600px' }}>
      <Grid item xs={6} sx={{ textAlign: 'left', pl: '5%', pr: '5%' }}>
        <Typography variant="h3" sx={{ pt: '5%', letterSpacing: '.1rem' }} gutterBottom >
          WHAT WE DO
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '16px', lineHeight: '1.7', pb: '16px' }}>
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
            padding: '10px',
            ':hover': 
            {
              backgroundColor: theme.palette.primary.main,
              color: 'white',
            },
          }}
          href="/mentors"
        >
          mentors
        </Button>
      </Grid>
      <Grid item xs={6} direction="column" alignItems="center" justifyContent="center" sx={{ mt: '2%', mb: '2%' }} >
        <table>
          <tr>
            <th>9:00 - 9:50</th>
            <td>Science (e.g. biology, chemistry)</td>
          </tr>
          <tr>
            <th>10:00 - 10:50</th>
            <td>Mathematics (e.g. algebra, geometry)</td>
          </tr>
          <tr>
            <th>11:00 - 11:50</th>
            <td>Creative writing (e.g. short stories, novella)</td> 
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
            <td>Literature (e.g. The Odyssey, Catcher in the Rye)</td>
          </tr>
          <tr>
            <th>15:00 - 15:50</th>
            <td>Philosophy (e.g. Aristotle, Nietzsche)</td>
          </tr>
          <tr>
            <th>16:00 - 16:50</th>
            <td>Extracurriculars (e.g. coding, songwriting)</td>
          </tr>
        </table>
      </Grid>
    </Grid>
  );
}

function OutsideActivities() {
  return (
    <Box sx={{backgroundColor: '#E1DFD9', pb: '2%' }}>
      <Typography variant="h3" sx={{ pt: "2%", pb: '2%' }}>
        OUTSIDE THE CLASSROOM
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ pl: '15%', pr: '15%' }} >
        Mentorship doesn't only happen during class! 
        <br/>
        We organize a variety of activities for mentors and mentees to interact outside the classroom, including settings which extend the mentorship of Camp Veritas even after the camp is over.
        <br/>
        <br/>
        In 2022, we had:
        <br/>
        general college application info session | US boarding school info session (Phillips Exeter) | UK boarding school info session (Seven Oaks)
        | Mt. Halla hike | basketball and soccer games | MIT student Q&A | year-round Zoom classes
      </Typography>
      <Box sx={{ p: '2%' }} />
      <Grid container sx={{ justifyContent: 'space-around' }}>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
        <Grid item xs="4">
          placeholder image
        </Grid>
      </Grid>
    </Box>
  );
}


function LearnMore() {
  return (
    <Grid container sx={{ backgroundColor: '#2D3D63', color: '#ffffff' }}>
      <Grid item xs={6}>
        <Box style={styles.introBox } />
      </Grid>
      <Grid item xs={6} sx={{ pl: "5%", pr: "5%", display: "flex" }}>
        <Box style={styles.introContent} >
          <Typography variant="h3" sx={{ pt: '5%', letterSpacing: '.1rem' }} gutterBottom >
            LEARN MORE
          </Typography>
          <Typography variant="subtitle1" sx={{ pb: '20px' }} >
            Still curious about Camp Veritas? Check out our other pages, featuring our mentors and mentees!
          </Typography>
          <Typography variant="body1" sx={{ pb: '5%' }} >
            If you have any questions that can't be answered by the information available on the website, feel free to drop us a message in the contact form below and we'll respond to you as quickly as possible!
          </Typography>
          <Stack direction="row" spacing={4} sx={{ pb: '10%'}}>
            <Button sx={
              {
                color: theme.palette.primary.main,
                backgroundColor: 'white',
                padding: '10px',
                ':hover': 
                {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
              }}
              href="/about"
            >
              About Us
            </Button>
            <Button sx={
              {
                color: theme.palette.primary.main,
                backgroundColor: 'white',
                padding: '10px',
                ':hover': 
                {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
              }}
              href="/alumni"
            >
              camp alumni
            </Button>
            <Button sx={
              {
                color: theme.palette.primary.main,
                backgroundColor: 'white',
                padding: '10px',
                ':hover': 
                {
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                },
              }}
              href="/summer'22"
            >
              summer 2022
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

function ContactUs() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_ptd31do',
      'template_q7u656q',
      toSend,
      '-YCXwxbWGU5rS3Zqb'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <Grid container sx={{ pt: '2%', pb: '2%' }}>
      <Grid item xs={1} />
      <Grid item xs={4}>
        <Typography variant="h3" gutterBottom >
          CONTACT US
        </Typography>
        <Typography variant="subtitle1">
          Interested in participating in Camp Veritas Korea?
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px' }} >
          Email us at <a href="mailto:campveritaskorea@gmail.com" style={{ color: theme.palette.primary.main, textDecoration: 'underline' }}>campveritaskorea@gmail.com</a> or fill out the contact form.
        </Typography>
        <br />
        <Typography variant="subtitle1">
          Interested in being a mentor at Camp Veritas Korea?
        </Typography>
        <Typography variant="body1" style={{ fontSize: '16px' }} >
          This year's application cycle is unfortunately closed. Stay tuned for 2024!
        </Typography>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={4} sx={{ justifyContent: 'space-around', minHeight: '500px' }}>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='reply_to'
            placeholder='Email'
            value={toSend.reply_to}
            onChange={handleChange}
            style={{ padding: '10px', fontFamily: 'Biryani', width: '100%' }}
          />
          <Box sx={{ p: '10px' }} />
          <input
            type='text'
            name='from_name'
            placeholder='First and last name'
            value={toSend.from_name}
            onChange={handleChange}
            style={{ padding: '10px', fontFamily: 'Biryani', width: '100%' }}
          />
          <Box sx={{ p: '10px' }} />
          {/* TODO: change input type to be multi line */}
          <input
            type='text'
            name='message'
            placeholder='Message'
            value={toSend.message}
            onChange={handleChange}
            style={{ padding: '10px', fontFamily: 'Biryani', width: '100%', height: '300px' }}
          />
          <Box sx={{ p: '10px' }} />
          <Button type='submit'>Submit</Button>
        </form>
      </Grid>
      <Grid item xs={1} />
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
                padding: '20px',
                ':hover': 
                {
                  color: theme.palette.primary.main,
                  backgroundColor: 'white',
                },
              }}
            >
              {/* TODO: link to the contact section at the bottom of the page */}
              I'm interested
            </Button>
          </Box>
        </Box>
        <Introduction />
        <WhatWeDo />
        <OutsideActivities />
        <LearnMore />
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Home;
