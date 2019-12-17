import { Dashboard } from 'templates';
import { Router } from '@reach/router';

import {
  Introduction,
  Adventure,
  AdventureList,
  AdventureCreate,
  QuestCreate,
  Testing,
  Quest,
  QuestList,
  Playground,
  Prequalifier
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
