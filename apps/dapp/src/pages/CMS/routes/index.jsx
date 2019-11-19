import {
  AdventureStorageList,
  AdventureItem,
  AdventureCreate,
  QuestCreate,
  CMSListItemSmall,
} from 'views';

/* --- Adventures --- */
export const AdventurePageRoute = props => (
  <Atom.Box sx={props.sx}>
    <AdventureItem
      component={<div>yo</div>}
      pass={{sx: {boxShadow: 0, my: 3, p: 3}}}
    />
  </Atom.Box>
);

export const AdventureStorageListRoute = props => (
  <Atom.Box sx={props.sx}>
    <AdventureStorageList
      component={CMSListItemSmall}
      pass={{sx: {boxShadow: 0, my: 3, p: 3}}}
    />
  </Atom.Box>
);

export const AdventureCreateRoute = props => (
  <Atom.Box sx={props.sx}>
    <AdventureCreate />
  </Atom.Box>
);

/* --- Quests --- */
export const QuestCreateRoute = props => (
  <Atom.Box sx={props.sx}>
    <QuestCreate />
  </Atom.Box>
);

export default {
  AdventureStorageListRoute,
  AdventureCreateRoute,
  QuestCreateRoute,
};
