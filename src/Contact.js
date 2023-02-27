import './Home.css';
import NavBar from './NavBar';

import { useState } from 'react';
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import HeaderImg from './img/header_transparent.png';

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
    animation: 'typing 3s steps(100, end) forwards, blink .8s infinite',
  }
};

function Contact() {
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
    <ThemeProvider theme={theme}>
      <div className="Contact">
        <NavBar />
        <Grid container>
          <Grid item xs={6} >
            <Box >
              <Box display='inline-block'>
                <Typography variant="h1" gutterBottom
                >
                  CONTACT US
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ pl: '10%', pr: '10%', textAlign: 'center'}}>
                Have questions? Fill out the form on this page and we'll get back to you by email as soon as we can.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6} >
            <form onSubmit={onSubmit}>
              <input
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <input
                type='text'
                name='from_name'
                placeholder='from name'
                value={toSend.from_name}
                onChange={handleChange}
              />
              <input
                type='text'
                name='message'
                placeholder='Your message'
                value={toSend.message}
                onChange={handleChange}
              />
              <button type='submit'>Submit</button>
            </form>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
