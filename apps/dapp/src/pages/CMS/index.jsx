/* --- Global --- */
import {Router} from '@reach/router';

/* --- Local --- */
import {CMS} from 'templates';

/* --- Module --- */
import {
  AdventureStorageListRoute,
  AdventureCreateRoute,
  QuestCreateRoute,
} from './routes';

/* --- Component --- */
const CMSTemplate = props => (
  <CMS>
    <Router>
      <AdventureStorageListRoute path="/content/adventure" />
      <AdventureCreateRoute path="/content/adventure/create" />
      <QuestCreateRoute path="/content/quest/create" />
    </Router>
  </CMS>
);

export default CMSTemplate;
