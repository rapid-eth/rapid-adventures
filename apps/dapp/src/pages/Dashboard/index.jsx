import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {Profile, Introduction} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <Profile path="/profile" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
