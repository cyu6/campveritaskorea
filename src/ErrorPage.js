// import logo from './logo.svg';
import './Home.css';
import NavBar from './NavBar';

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

import Typography from '@mui/material/Typography';

function ErrorPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className="PastMentors">
        <NavBar />
        <Typography>
          Whoops! This isn't a page. Click on one of the pages in the header to get to a real page.
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default ErrorPage;
