import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {
  Profile,
  Introduction,
  Adventure,
  AdventureList,
  Leaderboard,
  Collections,
  AdventureCreate,
} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <Profile path="/profile" />
      <Leaderboard path="/leaderboard" />
      <Collections path="/collections" />
      <AdventureList path="/adventures" />
      <AdventureCreate path="/adventure/create" />
      <Adventure path="/adventure/:delta" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
