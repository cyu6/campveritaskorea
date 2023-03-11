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
import Yale from './img/mentors/yale.png';
import Princeton from './img/mentors/princeton.png';
import Harvard from './img/mentors/harvard.png';


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

function MentorBox(props) {
  return (
    <Box style={{ alignContent: 'center' }} >
      <Box style={{ 
          backgroundImage: `url(${props.headshot})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '300px',
          height: '300px',
          marginBottom: '10px'
        }}
      />
      <Typography variant="subtitle1" style={{ fontSize: '24px' }}>
        {props.name} 멘토 <img style={{ paddingLeft: '4px', width: '24px', height: '24px' }} src={props.school} alt="school" />
      </Typography>
      <Box sx={{ width: '80%' }}>
        <Typography variant="subtitle1">
          Major / 전공: {props.major}
        </Typography>
      </Box>
      <Typography variant="subtitle1">
        Subject / 과목: {props.subject}
      </Typography>
      <Box sx={{ p: '5px' }} />
      <Box sx={{ width: '80%' }}>
        <Typography variant="body1">
          {props.experience}
          <b>득기사항</b>: {props.funfact}
        </Typography>
      </Box>
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
        <Box sx={{ p: '1%' }} />
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          2023 JEJU MENTORS
        </Typography>
        <hr />
        <Grid container direction="column" spacing={8} sx={{ pt: '2%', pb: '2%' }} >
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="flex-start">
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
              <MentorBox headshot={MentorImg}
                name="Alison"
                school={Yale}
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                    <br/>
                    2. 전 미국 국무부 경제 인턴
                    <br/>
                    3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                    <br/>
                    4. 미국 명문 보딩그쿨 그로튼 출신
                    <br/>
                    5. Yale College Democrats 캡틴
                    <br/>
                    6. 과외: 그롴튼 여름 캠프 튜터 등
                  </div>
                }
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              />
              <MentorBox headshot={MentorImg}
                name="Alison"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                    <br/>
                    2. 전 미국 국무부 경제 인턴
                    <br/>
                    3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                    <br/>
                    4. 미국 명문 보딩그쿨 그로튼 출신
                    <br/>
                    5. Yale College Democrats 캡틴
                    <br/>
                    6. 과외: 그롴튼 여름 캠프 튜터 등
                  </div>
                }
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" spacing={18} justifyContent="center" alignItems="flex-start">
              <MentorBox headshot={MentorImg}
                name="Alison"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                    <br/>
                    2. 전 미국 국무부 경제 인턴
                    <br/>
                    3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                    <br/>
                    4. 미국 명문 보딩그쿨 그로튼 출신
                    <br/>
                    5. Yale College Democrats 캡틴
                    <br/>
                    6. 과외: 그롴튼 여름 캠프 튜터 등
                  </div>
                }
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              />
              <MentorBox headshot={MentorImg}
                name="Alison"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                    <br/>
                    2. 전 미국 국무부 경제 인턴
                    <br/>
                    3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                    <br/>
                    4. 미국 명문 보딩그쿨 그로튼 출신
                    <br/>
                    5. Yale College Democrats 캡틴
                    <br/>
                    6. 과외: 그롴튼 여름 캠프 튜터 등
                  </div>
                }
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              />
              <MentorBox headshot={MentorImg}
                name="Alison"
                major="English (idk) / 영문학 (과수석)"
                subject="Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. 학부내 최대 규모 동아리 예일정치연합(YPU) 회장
                    <br/>
                    2. 전 미국 국무부 경제 인턴
                    <br/>
                    3. 옥스포드 교환학생 / 하버드 로스쿨 입학 예정
                    <br/>
                    4. 미국 명문 보딩그쿨 그로튼 출신
                    <br/>
                    5. Yale College Democrats 캡틴
                    <br/>
                    6. 과외: 그롴튼 여름 캠프 튜터 등
                  </div>
                }
                funfact="쉬는 시간에 축구 한판 하자는 타입"
              />
            </Stack>
          </Grid>
        </Grid>
        <hr />
        {/* ------------------------------------------------------------------------------------- */}
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          2022 JEJU MENTORS
        </Typography>
        <hr />
        <Grid container direction="column" spacing={8} sx={{ pt: '2%', pb: '2%' }} >
          <Grid item xs='auto' >
            <Stack direction="row" spacing={12} justifyContent="center" alignItems="flex-start">
              <MentorBox headshot={MentorImg}
                name="Kendall"
                school={Yale}
                major="Psychology / 심리학, 통계학"
                subject="Test Prep, College Essays"
                experience={
                  <div>
                    <b>경함</b>: 1. Yale 심리연구소 연구원, Psychology Today 칼럼 출판
                    <br/>
                    2. 전 USDA 인턴
                    <br/>
                    3. 현재 출판을 목표로 뇌의 시간 인식 관련 책을 쓰고 있음
                    <br/>
                    4. 과외 경험 2년 (SAT, ACT, 영문학, 대학 컨설팅)
                  </div>
                }
                funfact="낭만파 음유시인, 암벽등반 대장"
              />
              <MentorBox headshot={MentorImg}
                name="Nick"
                school={Yale}
                major="Economics / 경재학, 정치학"
                subject="English Literature"
                experience={
                  <div>
                    <b>경함</b>: 1. Yale DS (상위권 인문학) 프로그램, 국제관계 연구
                    <br/>
                    2. 전 리츠칼튼 중동 인턴 
                    <br/>
                    3. 미국 Sailing #1 챔피언 팀 일원 (졸엄 후 올림픽...?)
                    <br/>
                    4. IB 만점자 (45/45), 엉국 명문사립 Seven Oaks 출신
                    <br/>
                    5. 과외 경험 2년 (고대그리스어, 라탄어, 이문학)
                  </div>
                }
                funfact="국적은 스위스, 취미는 피아노!"
              />
              <MentorBox headshot={MentorImg}
                name="Haze"
                school={Yale}
                major="Media / 미디어학, History / 역사학"
                subject="English Writing"
                experience={
                  <div>
                    <b>경함</b>: 1. Yale 북한인권 동아리 회장, 디베이트 클럽 멤버
                    <br/>
                    2. 전 시애틀 정부 / 할리우드 제작사 인턴 
                    <br/>
                    3. 프리랜서 영화감독 (Yale 인 할리우드 2021 영화제 선정)
                    <br/>
                    4. 과외 경험 3년 (에세이, 영문학, 세계사, 대학 컨설팅)
                  </div>
                }
                funfact="5개국어, 대원외고 자퇴생"
              />
            </Stack>
          </Grid>
          <Grid item xs='auto'>
            <Stack direction="row" spacing={12} justifyContent="center" alignItems="flex-start">
              <MentorBox headshot={MentorImg}
                name="Josh"
                school={Harvard}
                major="Sociology / 사회학"
                subject="Philosophy"
                experience={
                  <div>
                    <b>경함</b>: 1. 하버드 셰익스피어 극단 소셜 기획부
                    <br/>
                    2. 전 메사추세츠 주 하버드 여름 프로그램 (PBHA) 선생님
                    <br/>
                    3. 하버드 혼혈 학생 연합 재무 담당
                    <br/>
                    4. 과외 경험 3년 (영어, 수학)
                  </div>
                }
                funfact="스탠드업 코미디언"
              />
              <MentorBox headshot={MentorImg}
                name="Zeel"
                school={Harvard}
                major={
                  <div>
                    Computer Science / 
                    <br/>컴퓨터 공학, 심경과학
                  </div>
                }
                subject="Math, Science"
                experience={
                  <div>
                    <b>경함</b>: 1. 하버드 최대규모 컨퍼런스 HPAIR 회장 
                    <br/>
                    (각중 미국 Fortune 500 CEO들, 반기문 등 초청)
                    <br/>
                    2. 전 마이크로소프트 AI, 맥킨지 인턴
                    <br/>
                    3. 미국 수학 올림피아드 결승 진출, 엑소 플레닛 연구원
                    <br/>
                    4. 캠브릿지 대학 석사 프로그램 합격 
                    <br/>
                    5. 과외 경험 4년 (하버드 중국 국제 프로그램 등)
                  </div>
                }
                funfact="이분은 그냥 전재, 캐나다 30 under 30 선정"
              />
              <MentorBox headshot={MentorImg}
                name="Carmine"
                school={Harvard}
                major="종교학, 진화생물학"
                subject="College Essays"
                experience={
                  <div>
                    <b>경함</b>: 1. 하버드 미중 관계 협회 회장 
                    <br/>
                    (학부 내 4번째로 큰 규모의 컨퍼런스 주최, 국제적으로 만 명이 넘게 참여)
                    <br/>
                    2. 하버드 정치학부 리서치 조교, 프랑스어 사회 회장 
                    <br/>
                    3. 뉴욕 난민 샌터 스페인어 번역 봉사자
                    <br/>
                    4. 과외 경험 3년 (SAT, 영어 글쓰기, 하버드 입학생 멘토링)
                  </div>
                }
                funfact="힌두교를 연구하기 위해 산스크리트어 독학"
              />
            </Stack>
          </Grid>
          <Grid item xs='auto'>
            <Stack direction="row" spacing={12} justifyContent="center" alignItems="flex-start">
              <MentorBox headshot={MentorImg}
                name="Fernanda"
                school={Princeton}
                major="정치학, 교욕학"
                subject="World History"
                experience={
                  <div>
                    <b>경함</b>: 1. 변호사들과 프린스턴 난민 프로젝트 기획 
                    <br/>
                    2. 아르헨티나, 멕시코 등의 각종 교육 기관, 띵크탱크 전 인턴
                    <br/>
                    3. 프린스턴 중학교에서 175시간 강의 시간 채우는 중
                    <br/>
                    4. 과외 경험 4년 (ESL, 영문학, 하회탐구)
                  </div>
                }
                funfact="체스 천재, 고향은 멕시코 칸쿤"
              />
              <MentorBox headshot={MentorImg}
                name="Mina"
                school={Princeton}
                major="History / 역사학"
                subject="English Writing, Debate"
                experience={
                  <div>
                    <b>경함</b>: 1. 프린스턴 에세이 라이팅 센터 대표, 신문부
                    <br/>
                    2. 전 스탠포드 디베이트 프로그램 코치, 김앤장 인턴
                    <br/>
                    3. 뉴욕시 청년 연합 위원
                    <br/>
                    4. 과외 경험 4년 (디베이트, 과학, 라이팅, 등)
                  </div>
                }
                funfact="음반 내신 싱어송라이터, 무솔인"
              />
              <MentorBox headshot={MentorImg}
                name="Catherine"
                school={Princeton}
                major="Mathematics / 수학과"
                subject="Math, Test Prep"
                experience={
                  <div>
                    <b>경함</b>: 1. 프린스턴 해킹팀 회장, 과학 올림피아드 팀 멤버
                    <br/>
                    2. 2년 연속 Google 인턴
                    <br/>
                    3. 프린스턴 컴퓨터공학 수업 조교
                    <br/>
                    4. 과외 경험 4년 (수학 경시애회, 코딩)
                  </div>
                }
                funfact="하국문화의 팬으로 K-pop댄스와 한국어 독학"
              />
            </Stack>
          </Grid>
        </Grid>
        <Box sx={{ p: '2%' }} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default Mentors;
