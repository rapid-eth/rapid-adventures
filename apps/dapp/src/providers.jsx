/* --- Global --- */
import { ThemeProvider } from 'theme-ui';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BoxProvider } from '3box-ui-system';
import { EthersProvider } from 'ethers-react-system';
import { PortalProvider, PortalTree } from 'react-portal-system';
import { DataProvider } from './DataContext';

/* --- Local --- */
import theme from './assets/theme';
import muiTheme from './assets/mui';

const BoxConfig = { isAutoEnable: false, isAutoLogin: false };

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={muiTheme}>
        <EthersProvider>
          <DataProvider>
            <BoxProvider config={BoxConfig}>
              <PortalProvider>
                <PortalTree />
                {props.children}
              </PortalProvider>
            </BoxProvider>
          </DataProvider>
        </EthersProvider>
      </MuiThemeProvider>
    </ThemeProvider >
  );
};
