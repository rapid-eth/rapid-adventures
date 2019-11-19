/* --- Global --- */
import {ProfileSmall} from '3box-ui-profiles';
import {QuestCard} from 'experiments';
/* --- Local --- */
import {SmallStatistic} from 'experiments';
const addressList = [
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
];

const styles = {
  profileCard: {
    my: 1,
  },
  quest: {
    // flex: 1,
    width: ['100%', '100%', '33%'],
    p: 3,
  },
};

/* --- Component --- */
const ViewAdventure = props => {
  return (
    <>
      <Showase />
      <Main />
      {/* <SearchResult /> */}
    </>
  );
};

const Showase = props => (
  <Atom.Box
    sx={{
      bg: 'blue',
      color: 'white',
      width: '100%',
      zIndex: 100,
    }}>
    <Atom.BackgroundGradient gradient="sunset" sx={{opacity: 0.2}} />

    <Atom.Container sx={{mx: 0, maxWidth: ['100%', '100%', 780, 880]}}>
      <Atom.Flex sx={{flex: 1}}>
        <Atom.Flex between sx={{boxShadow: 1, flex: 6, px: 5, py: 6}}>
          <Atom.Box>
            <Atom.Heading xxl>Adventure Title</Atom.Heading>
            <Atom.Heading lg thin>
              Adventure Subtitle and Catchy Info
            </Atom.Heading>
          </Atom.Box>
          <Atom.Flex>
            <SmallStatistic label="Reward" value="600" />
            <SmallStatistic label="Completed" value="420" />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  </Atom.Box>
);

const Main = props => {
  return (
    <Atom.Flex sx={{zIndex: 1000, ...props.sx}}>
      {/* Left */}
      <Atom.Container
        sx={{mx: 0, maxWidth: ['100%', '100%', 780, 820, 820, 980]}}>
        <Atom.Flex between wrap sx={{flex: 1, p: 3, flexWrap: 'wrap'}}>
          <QuestCard
            title="Quest"
            subtitle="New Quest"
            summary="Sed ac leo condimentum mauris condimentum consectetur et a odio. Integer finibus elementum nulla, in sagittis risus ornare sed."
            label="View Quest"
            sx={styles.quest}
          />
          <QuestCard
            title="Quest"
            subtitle="New Quest"
            summary="Sed ac leo condimentum mauris condimentum consectetur et a odio. Integer finibus elementum nulla, in sagittis risus ornare sed."
            label="View Quest"
            sx={styles.quest}
          />
          <QuestCard
            title="Quest"
            subtitle="New Quest"
            summary="Sed ac leo condimentum mauris condimentum consectetur et a odio. Integer finibus elementum nulla, in sagittis risus ornare sed."
            label="View Quest"
            sx={styles.quest}
          />
          <QuestCard
            title="Quest"
            subtitle="New Quest"
            summary="Sed ac leo condimentum mauris condimentum consectetur et a odio. Integer finibus elementum nulla, in sagittis risus ornare sed."
            label="View Quest"
            sx={styles.quest}
          />
        </Atom.Flex>
      </Atom.Container>

      {/* Right */}
      <Atom.Flex sx={{flex: 4, p: 4}}>
        <Atom.Box
          card
          sx={{
            flex: 1,
            mt: -300,
          }}>
          <Atom.Heading xl thin>
            Leaderboards
          </Atom.Heading>
          <Atom.HorizontalRule sx={{mb: 2}} />
          <Atom.Flex column>
            {addressList.map(i => (
              <ProfileSmall address={i} sx={styles.profileCard} />
            ))}
          </Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default ViewAdventure;
