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
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif'
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'inherit',
        padding: '9px 20px'
      }
    }
  }
});

export default theme;