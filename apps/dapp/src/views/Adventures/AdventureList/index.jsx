/* --- Global --- */
import {ProfileSmall} from '3box-ui-profiles';

/* --- Local --- */
import {AdventureCardLarge} from 'experiments';
import {FormSearch} from 'forms';
import {AdventureList} from 'components/adventures';
import adventures from 'demo/adventureList.json';

const styles = {
  profileCard: {
    my: 1,
  },
};

/* --- Component --- */
const ViewAdventureList = props => {
  return (
    <>
      <Showase />
      <SearchResult />
    </>
  );
};

const Showase = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      width: '100%',
      zIndex: 100,
    }}>
    <Atom.Flex sx={{flex: 1}}>
      <Atom.Flex column sx={{boxShadow: 1, flex: 6, px: 5, py: 4}}>
        <Atom.Heading xxl>Adventure Search</Atom.Heading>
        <FormSearch />
      </Atom.Flex>
      <Atom.Flex
        column
        sx={{bg: 'white', boxShadow: 1, color: 'night', p: 3, flex: 4}}>
        <Atom.Heading xl thin>
          Leaderboards
        </Atom.Heading>
        <Atom.HorizontalRule sx={{mb: 2}} />
        <Atom.Flex column></Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Box>
);

const SearchResult = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      color: 'text',
      py: 4,
    }}>
    <AdventureList />
  </Atom.Box>
);

const actions = {
  container: {
    px: [3, 3, 5],
    pb: [5],
    flexDirection: ['row'],
    flexWrap: 'wrap',
  },
  dev: {
    // width: '30%',
    p: 3,
  },
};

export default ViewAdventureList;
