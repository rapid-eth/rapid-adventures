import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {
  Introduction,
  Adventure,
  AdventureList,
  AdventureCreate,
  QuestCreate,
  Testing,
  Quest,
} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Introduction path="/" />
      {/* Adventures */}
      <AdventureList path="/adventures" />
      <AdventureCreate path="/adventure/create" />
      <Adventure path="/adventure/:alias" />

      {/* Quests */}
      <QuestCreate path="/quest/create" />
      <Quest path="/quest/:alias" />
      <Testing path="/testing" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
