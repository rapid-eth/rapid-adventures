import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {
  Profile,
  Introduction,
  Adventure,
  AdventureList,
  Leaderboard,
} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <Profile path="/profile" />
      <Leaderboard path="/leaderboard" />
      <AdventureList path="/adventures" />
      <Adventure path="/adventure/:delta" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
