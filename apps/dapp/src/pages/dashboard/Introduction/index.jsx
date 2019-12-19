/* --- Local --- */
import {
  AdventureList,
  LeaderboardActivity,
  QuestListFeatured,
  QuestListSuggested,
} from 'components';

/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      <Featured />
      <Showcase />
      <AdventureList />
    </Atom.Flex>
  );
};

const showcase = {
  container: {
    bg: 'blue',
    color: 'white',
    flex: 1,
  },
  coverImage: {
    opacity: 0.6,
    ratio: 0.4,
  },
  left: {
    flex: 5,
    p: 5,
    py: 6,
  },
  right: {
    flex: 4,
  },
  actions: {mx: 2},
};

const Featured = props => {
  return (
    <Atom.Flex>
      <Atom.Box sx={{p: 4, flex: 5}}>
        <Atom.Heading xl m1>
          Featured Quests
        </Atom.Heading>
        <QuestListFeatured />
      </Atom.Box>
      <Atom.Box
        sx={{
          borderLeftWidth: 1,
          borderColor: 'gray',
          borderStyle: 'solid',
          p: 4,
          flex: 2,
        }}>
        <Atom.Heading xl m1>
          Suggested Quests
        </Atom.Heading>
        <QuestListSuggested />
      </Atom.Box>
    </Atom.Flex>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex>
      <Atom.Flex alignCenter sx={{...showcase.container, flex: 7}}>
        <Atom.BackgroundImage
          ratio={0.3}
          src="https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          sx={showcase.coverImage}
        />
        <Atom.Absolute sx={{top: 0, left: 0, m: 5}}>
          <Atom.Heading md>Featured Adventure</Atom.Heading>
        </Atom.Absolute>
        <Atom.Flex column sx={showcase.left}>
          <Atom.Box card>
            <Atom.Heading xxl heavy>
              Exploring Decentralized Finance
            </Atom.Heading>
            <Atom.Heading xl normal>
              Activate the World Around You
            </Atom.Heading>
            <Atom.Paragraph sx={{fontSize: 0}}>
              Vivamus tincidunt nibh facilisis metus finibus, laoreet aliquet
              lectus rutrum. Sed ex tortor, fermentum vel urna vitae, fermentum
              facilisis nulla. Maecenas at turpis quis metus sollicitudin
              placerat. Donec ipsum libero, tempus nec risus ut, iaculis gravida
              mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit
              amet sem tempus aliquam.
            </Atom.Paragraph>
            <Atom.Button sx={{}}>Start Adventure</Atom.Button>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex center column sx={showcase.right}>
          <Atom.Box></Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
      <Atom.Flex
        column
        sx={{
          bg: 'gray',
          flex: 3,
          p: 4,
        }}>
        <Atom.Heading>Leaderboards</Atom.Heading>
        <LeaderboardActivity column />
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default View;
