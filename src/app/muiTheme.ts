import { ThemeOptions, createTheme } from '@mui/material/styles';

export const muiTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff7222',
      light: '#ffe199',
      dark: '#9b0000',
    },
    secondary: {
      main: '#255eca',
    },
  },
  shape: {
    borderRadius: 20,
  }
});