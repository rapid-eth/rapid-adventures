import {Dashboard} from 'templates';
import {Router} from '@reach/router';

import {
  Adventure,
  AdventureList,
  AdventureCreate,
  QuestCreate,
  Testing,
  Quest,
  QuestList,
  Playground,
  Prequalifier,
} from 'views';

import {
  Adventures,
  Collections,
  Introduction,
  Leaderboard,
  Quests,
  Profile,
} from 'pages';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" primary={false}>
      <Introduction path="/" />
      {/* Adventures */}
      <AdventureList path="/adventures" />
      <AdventureCreate path="/adventure/create" />
      <Adventure path="/adventure/:alias" />

      <Profile path="/profile" />
      <Leaderboard path="/leaderboard" />
      <Collections path="/collections" />

      {/* Quests */}
      <QuestList path="/quests" />
      <QuestCreate path="/quest/create" />
      <Quest path="/quest/:alias" />
      <Testing path="/testing" />
      <Playground path="/playground" />
      <Prequalifier path="/prequalifier" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
