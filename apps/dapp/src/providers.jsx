/* --- Global --- */
import { ThemeProvider } from 'theme-ui';
import { BoxProvider } from '3box-ui-system';
import { EthersProvider } from 'ethers-react-system';
import { PortalProvider, PortalTree } from 'react-portal-system';

/* --- Local --- */
import theme from './assets/theme';

import ERC20Certificate from './contracts/ERC20Certificate';

const BoxConfig = { isAutoEnable: false, isAutoLogin: false };

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider>
        <BoxProvider config={BoxConfig}>
          <PortalTree />
          <EthersProvider contracts={[ERC20Certificate]}>
            {props.children}
          </EthersProvider>
        </BoxProvider>
      </EthersProvider>
    </ThemeProvider>
  );
};
