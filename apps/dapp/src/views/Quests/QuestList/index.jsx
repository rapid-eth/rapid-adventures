/* --- Global --- */

/* --- Local --- */
import {FormSearch} from 'forms';
import {QuestList} from 'components';

/* --- Component --- */
const ViewQuestList = props => {
  return (
    <>
      {/* <Showase /> */}
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
        <Atom.Heading xxl>Quest Search</Atom.Heading>
        <FormSearch />
      </Atom.Flex>
      <Atom.Flex
        column
        sx={{bg: 'paper', boxShadow: 1, color: 'text', p: 3, flex: 4}}>
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
    <QuestList />
  </Atom.Box>
);

export default ViewQuestList;
