import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Ana renk
    },
    secondary: {
      main: "#fe5000",
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

export default theme;