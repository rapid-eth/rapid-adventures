import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {Profile, Introduction, AdventureList} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <Profile path="/profile" />
      <AdventureList path="/adventures" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
