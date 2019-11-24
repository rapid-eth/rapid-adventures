/* --- Global --- */
import { ThemeProvider } from 'theme-ui';
import { PortalProvider, PortalTree } from 'react-portal-system';
import { BoxProvider } from '3box-ui-system';
import { EthersProvider } from 'ethers-react-system'

/* --- Local --- */
import theme from './assets/theme';

import ERC20Certificate from './contracts/ERC20Certificate';

const BoxConfig = { isAutoEnable: false, isAutoLogin: false };

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <PortalProvider>
        <BoxProvider config={BoxConfig}>
          <PortalTree />
          <EthersProvider contracts={[ERC20Certificate]}>
            {props.children}
          </EthersProvider>
        </BoxProvider>
      </PortalProvider>
    </ThemeProvider>
  );
};
