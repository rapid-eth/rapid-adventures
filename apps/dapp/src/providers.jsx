/* --- Global --- */
import { ThemeProvider } from 'theme-ui';
import { BoxProvider } from '3box-ui-system';
import { EthersProvider } from 'ethers-react-system';
import { PortalProvider, PortalTree } from 'react-portal-system';

/* --- Local --- */
import theme from './assets/theme';

import MeshDevCoin from './contracts/MeshDevCoin';

const BoxConfig = { isAutoEnable: false, isAutoLogin: false };

/* --- Component --- */
export default props => {
  return (
    <ThemeProvider theme={theme}>
      <EthersProvider contracts={[MeshDevCoin]}>
        <BoxProvider config={BoxConfig}>
          <PortalTree />
          {props.children}
        </BoxProvider>
      </EthersProvider>
    </ThemeProvider>
  );
};
