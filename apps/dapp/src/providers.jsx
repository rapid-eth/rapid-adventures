/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-ui-system';

/* --- Local --- */
import theme from './assets/theme';

const BoxConfig = {isAutoEnable: false, isAutoLogin: false};

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <PortalProvider>
        <BoxProvider config={BoxConfig}>
          <PortalTree />
          {props.children}
        </BoxProvider>
      </PortalProvider>
    </ThemeProvider>
  );
};
