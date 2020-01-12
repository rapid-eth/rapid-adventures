/* --- Global --- */
import {ThemeProvider} from 'theme-ui';
import {PortalProvider, PortalTree} from 'react-portal-system';
import {BoxProvider} from '3box-ui-system';

/* --- Local --- */
import theme from './assets/theme';

// Routing
import createHashSource from 'hash-source';
import {createHistory, LocationProvider} from '@reach/router';

/* --- Special Routing History (Useful for GitHub) --- */
let source = createHashSource();
let history = createHistory(source);

const BoxConfig = {isAutoEnable: false, isAutoLogin: false};

export default props => {
  return (
    <LocationProvider history={history}>
      <ThemeProvider theme={theme}>
        <BoxProvider config={BoxConfig}>
          <PortalProvider>
            <PortalTree />
            {props.children}
          </PortalProvider>
        </BoxProvider>
      </ThemeProvider>
    </LocationProvider>
  );
};