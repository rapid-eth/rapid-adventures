/* --- Global --- */
import {Router} from '@reach/router';
import About from './About';
/* --- Component --- */
export default () => (
  <Router primary={false}>
    <About path="/about" />
  </Router>
);
