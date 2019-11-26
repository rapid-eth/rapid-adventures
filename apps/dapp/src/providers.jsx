/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-ui-system';
import {EthersProvider} from 'ethers-react-system';

/* --- Local --- */
import theme from './assets/theme';

const BoxConfig = {isAutoEnable: false, isAutoLogin: false};

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider>
        {/* <BoxProvider config={BoxConfig}> */}
        <PortalProvider>
          <PortalTree />
          {props.children}
        </PortalProvider>
        {/* </BoxProvider> */}
      </EthersProvider>
    </ThemeProvider>
  );
};
