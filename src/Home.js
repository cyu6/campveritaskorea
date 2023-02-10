// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
    <Grid container>
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
    <div>
      <Typography>
        Testimonials
      </Typography>
      <Typography>
        Hear from some of our former students, and see more about camp alumni here.
        {/* insert link to alumni tab */}
      </Typography>
      <Grid container>
        <Grid item xs={4}>
        <Typography>
            Placeholder quote
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            Placeholder video
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            Placeholder quote
          </Typography>
        </Grid>
      </Grid>
    </div>
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
    <div className="Home">
      <NavBar />
      <Container>
        {/* background image */}
        <Typography>
          Camp Veritas Korea
        </Typography>
        <Button>
          Learn more 
          {/* some CTA */}
        </Button>
      </Container>
      <Introduction />
      <WhatWeDo />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default Home;
