// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';
// import Footer from './Footer';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className="PastMentors">
        <NavBar />
        <Box sx={{ pl: '10%', pr: '10%', pt: '5%' }} >
          <Typography variant="h3" >
            Whoops! This isn't a page. 
            <br />
            <br />
            Click on one of the links in the navigation bar up top to get to a real page.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default ErrorPage;
