import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#50c19a',
      dark: '#38876b',
      light: '#73cdae',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff8522',
      dark: '#b25d17',
      light: '#ff9d4e',
      contrastText: '#fff',
    },
    text: {
      primary: '#212127',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
    },
  },
});
