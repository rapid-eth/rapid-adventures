/* --- Global --- */
import { Avatar, ProfileCover } from '3box-ui-profiles';
/* --- Local --- */
import { AdventureCardActiveLarge, CollectionList } from 'components';

import { ShowcaseRegionTop, ShowcaseRegionBottom } from './regions';

const styles = {
  profileCard: {
    my: 1,
  },
  quest: {
    // flex: 1,
    width: ['100%', '100%', '33%'],
    p: 3,
  },
  asideLiftUp: {
    flex: 1,
    p: 0,
    mt: -370,
  },
  mainRight: {
    px: 4,
    flex: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    mt: -80,
  },
  adventureActive: {
    my: 3,
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
  <Atom.Flex
    sx={{
      bg: 'blue',
      color: 'white',
      width: '100%',
      minHeight: [320, 400, 400],
      zIndex: 100,
    }}>
    <Atom.BackgroundGradient gradient="sunset" sx={{ opacity: 0.2 }} />

    <Atom.Flex sx={{ flex: 1 }}>
      {/* Left */}
      <Atom.Flex sx={{ flex: 4 }}></Atom.Flex>
      {/* Left : End */}

      {/* Right */}
      <Atom.Flex sx={{ flex: 10 }}>
        <ShowcaseRegionTop />
        <ShowcaseRegionBottom />
      </Atom.Flex>
      {/* Right : End */}
    </Atom.Flex>
  </Atom.Flex>
);

const Main = props => {
  return (
    <Atom.Flex sx={{ flex: 1, p: 4, zIndex: 1000 }}>
      {/* Left */}
      <Atom.Flex sx={{ flex: 4 }}>
        <Atom.Box sx={styles.asideLiftUp}>
          <Atom.Flex center>
            <Atom.Button m1>Send MESH Tip</Atom.Button>
            <Atom.Button m1 green>
              Connect
            </Atom.Button>
          </Atom.Flex>
          <ProfileCard />
        </Atom.Box>
      </Atom.Flex>
      {/* Left : End */}

      {/* Right */}
      <Atom.Flex sx={styles.mainRight}>
        <ActiveAdventures />
      </Atom.Flex>
      {/* Right : End */}
    </Atom.Flex>
  );
};

const ProfileCard = props => {
  return (
    <Atom.Box card sx={{ p: 0 }}>
      <Atom.Box sx={profileCard.cover}>
        <ProfileCover />
        {/* <ProfileIdentity sx={styles.cardIdentity} /> */}
        {/* <ProfileDetailsOccupation sx={styles.cardOccupation} /> */}
      </Atom.Box>
      <Atom.Box sx={profileCard.main}>
        <Avatar sx={styles.avatar} />
        <Atom.Heading xl>Kames Geragty</Atom.Heading>
        <Atom.Heading md thin>
          Fullstack Javascript Developer
        </Atom.Heading>
      </Atom.Box>
    </Atom.Box>
  );
};

const ProfileTabs = props => {
  return <Atom.Flex></Atom.Flex>;
};

const ActiveAdventures = props => {
  return (
    <Atom.Flex column>
      <AdventureCardActiveLarge
        title="Register ETH Domain"
        subtitle="Get your decentralized identity started!"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Create"
        image="https://miro.medium.com/max/1200/1*phqy7EzRlH6J2iU9_8vL0g.png"
        // content={<ProfileCreateModal />}
        sx={styles.adventureActive}
        gradient="blue"
      />
    </Atom.Flex>
  );
};

const profileCard = {
  cover: {
    bg: 'blue',
    color: 'white',
    minHeight: 200,
  },
  main: {
    p: 4,
  },
};

export default ViewAdventure;
