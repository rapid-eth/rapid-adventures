import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {Profile, Introduction, Adventure, AdventureList} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <Profile path="/profile" />
      <AdventureList path="/adventures" />
      <Adventure path="/adventure/:delta" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
