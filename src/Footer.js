import * as React from 'react';
import { Box, Divider, Link, Typography } from "@mui/material";

import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& hr': {
            mx: 2,
            border: `1px solid white`,
          },
          width: "100%",
          height: "auto",
          backgroundColor: theme.palette.primary.main,
          paddingTop: "1rem",
          paddingBottom: "1rem",
          color: theme.palette.secondary.main
        }}
      >
        <Typography variant="body1">
          {`Camp Veritas Korea ${new Date().getFullYear()}`}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Link href="https://instagram.com/summer.veritas" variant="body1" target="_blank" color="inherit">
          {'@summer.veritas'}
        </Link>
        <Divider orientation="vertical" flexItem />
        <Link href="mailto:campveritaskorea@gmail.com" variant="body1" color="inherit">
          {'campveritaskorea@gmail.com'}
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
