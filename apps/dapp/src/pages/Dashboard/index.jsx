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
  QuestCreate,
  JournalAdventures,
  JournalQuests,
  Quest,
} from 'views';

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%">
      <Introduction path="/" />
      <JournalAdventures path="/journal/adventures" />
      <JournalQuests path="/journal/quests" />
      <Profile path="/profile" />
      <Leaderboard path="/leaderboard" />
      <Collections path="/collections" />
      {/* Adventures */}
      <AdventureList path="/adventures" />
      <AdventureCreate path="/adventure/create" />
      <Adventure path="/adventure/:delta" />

      {/* Quests */}
      <QuestCreate path="/quest/create" />
      <Quest path="/quest/:delta" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
