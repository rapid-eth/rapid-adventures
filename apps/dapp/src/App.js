/**
 * @function Application
 * @version 0.0.1
 * @description Rapid Adventures Application
 */

/* --- Local --- */
import './assets/index.css';
import './assets/App.css';
import {Router} from '@reach/router';
import Providers from './providers';

import {Home, Dashboard} from './pages';
import Content from './content';

/* --- Component --- */
export default () => (
  <Providers>
    <Router width="100%">
      <Home path="/" />
      <Dashboard path="/dashboard" />
      <Content path="/*" />
    </Router>
  </Providers>
);
