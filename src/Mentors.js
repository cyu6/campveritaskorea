// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
// import Divider from '@mui/material/Divider';

import HeaderImg from './img/mentors_transparent.png';
import MentorImg from './img/mentors/placeholder.png';

const styles = {
  headerBox: {
    backgroundImage: `url(${HeaderImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    height: '600px',
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
  },
};

const MentorBox = (headshot, name, major, subject, experience, funfact) => {
  return (
    <Box style={{ alignContent: 'center' }}>
      <Box style={{ 
          backgroundImage: `url(${headshot})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '300px',
          height: '300px',
          marginBottom: '10px'
        }}
      />
      <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
        {name} 멘토
      </Typography>
      <Typography variant="subtitle1">
        Major / 전공: {major}
      </Typography>
      <Typography variant="subtitle1">
        Subject / 과목: {subject}
      </Typography>
      <Box sx={{ p: '5px' }} />
      <Typography variant="body1" >
        <b>경함</b>: {experience}
        <b>득기사항</b>: {funfact}
      </Typography>
    </Box>
  );
};

function Mentors() {
  return (
    <ThemeProvider theme={theme}>
      <div className="mentors">
        <NavBar />
        <Box style={styles.headerBox} >
          <Box sx={{ textAlign: 'center', pl: '10%', pr: '10%' }}>
            <Box display='inline-block' >
              <Typography variant="h1" gutterBottom
                style={styles.typewriter}
              >
                MENTORS
              </Typography>
            </Box>
            <Typography variant="h6" >
              Meet our mentors and learn about their class offerings.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ p: '10px' }} />
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          2023 JEJU MENTORS
        </Typography>
        <hr />
        <Grid container direction="column" spacing={8} sx={{ pt: '2%', pb: '2%' }} >
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="center">
              <Box style={{ alignContent: 'center' }}>
                <Box style={{ 
                    backgroundImage: `url(${MentorImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '300px',
                    height: '300px',
                    marginBottom: '10px'
                  }}
                />
                <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                  Alison 멘토
                </Typography>
                <Typography variant="subtitle1">
                  Major / 전공: English (idk) / 영문학 (과수석)
                </Typography>
                <Typography variant="subtitle1">
                  Subject / 과목: Literature
                </Typography>
                <Box sx={{ p: '5px' }} />
                <Typography variant="body1" >
                  <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                  <br />
                  2. 전 미국 국무부 경제 인턴
                  <br />
                  3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                  <br />
                  4. 미국 명문 보딩그쿨 그로튼 출신
                  <br />
                  5. Yale College Democrats 캡틴
                  <br />
                  6. 과외: 그롴튼 여름 캠프 튜터 등
                  <br />
                  <b>득기사항</b>: 쉬는 시간에 축구 한판 하자는 타입
                </Typography>
              </Box>
              {/* <MentorBox headshot={MentorImg}
                name="Alison 멘토"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience=
                  "1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장\n2. 전 미국 국무부 경제 인턴\n3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정\n4. 미국 명문 보딩그쿨 그로튼 출신\n5. Yale College Democrats 캡틴\n6. 과외: 그롴튼 여름 캠프 튜터 등\n"
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              /> */}
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="center">
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
            </Stack>
          </Grid>
        </Grid>
        <hr />
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          2022 JEJU MENTORS
        </Typography>
        <hr />
        <Grid container direction="column" spacing={8} sx={{ pt: '2%', pb: '2%' }} >
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="center">
              <Box style={{ alignContent: 'center' }}>
                <Box style={{ 
                    backgroundImage: `url(${MentorImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    width: '300px',
                    height: '300px',
                    marginBottom: '10px'
                  }}
                />
                <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
                  Alison 멘토
                </Typography>
                <Typography variant="subtitle1">
                  Major / 전공: English (idk) / 영문학 (과수석)
                </Typography>
                <Typography variant="subtitle1">
                  Subject / 과목: Literature
                </Typography>
                <Box sx={{ p: '5px' }} />
                <Typography variant="body1" >
                  <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                  <br />
                  2. 전 미국 국무부 경제 인턴
                  <br />
                  3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                  <br />
                  4. 미국 명문 보딩그쿨 그로튼 출신
                  <br />
                  5. Yale College Democrats 캡틴
                  <br />
                  6. 과외: 그롴튼 여름 캠프 튜터 등
                  <br />
                  <b>득기사항</b>: 쉬는 시간에 축구 한판 하자는 타입
                </Typography>
              </Box>
              {/* <MentorBox headshot={MentorImg}
                name="Alison 멘토"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience=
                  "1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장\n2. 전 미국 국무부 경제 인턴\n3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정\n4. 미국 명문 보딩그쿨 그로튼 출신\n5. Yale College Democrats 캡틴\n6. 과외: 그롴튼 여름 캠프 튜터 등\n"
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              /> */}
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="center">
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
              <Box style={{ 
                backgroundImage: `url(${MentorImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                width: '300px',
                height: '300px' }}
              />
            </Stack>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Mentors;
