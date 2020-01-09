import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#866bff',
      main: '#4e3fce',
      dark: '#00159c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9a67ea',
      main: '#673ab7',
      dark: '#320b86',
      contrastText: '#fff',
    },
  },
});

export default theme;