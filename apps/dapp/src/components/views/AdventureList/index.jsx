/* --- Global --- */
import {ProfileSmall} from '3box-ui-profiles';

/* --- Local --- */
import {BasicAction} from 'experiments';
import {SmallStatistic} from 'experiments';
import {AdventureCardLarge} from 'experiments';
import {FormSearch} from 'forms';

const addressList = [
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
  '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
];

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
      <ViewSettings />
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
    {/* <Atom.BackgroundGradient gradient="blue" /> */}

    <Atom.Flex sx={{flex: 1}}>
      <Atom.Flex column sx={{boxShadow: 1, flex: 6, px: 5, py: 6}}>
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
        <Atom.Flex column>
          {addressList.map(i => (
            <ProfileSmall address={i} sx={styles.profileCard} />
          ))}
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  </Atom.Box>
);

const ViewSettings = props => {
  return (
    <Atom.Flex
      alignCenter
      between
      sx={{bg: 'blue', boxShadow: 1, color: 'white', p: 3}}>
      <Atom.Flex>
        <SmallStatistic label="Adventures" value="12" />
        <SmallStatistic label="Users" value="365" />
        <SmallStatistic label="Rewards" value="5,402" />
      </Atom.Flex>

      <Atom.Flex alignCenter>
        <Atom.Span tag sx={{mx: 2}}>
          List
        </Atom.Span>
        <Atom.Span sx={{mx: 2}}>Card</Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const SearchResult = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      color: 'text',
      py: 4,
    }}>
    <Atom.Flex column sx={{p: 5}}>
      <AdventureCardLarge
        title="Register ETH Domain"
        subtitle="Get your decentralized identity started!"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Create"
        image="https://miro.medium.com/max/1200/1*phqy7EzRlH6J2iU9_8vL0g.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
        gradient="blue"
      />
      <AdventureCardLarge
        title="DeFi Investment"
        subtitle="Take Advantage of DeFi"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Launch"
        image="https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_400x400.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
        gradient="purple"
      />
      <AdventureCardLarge
        title="Complete Bounties"
        subtitle="Contribute to Ethereum!"
        image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Start"
        content={<ProfileCreateModal />}
        sx={actions.dev}
        gradient="green"
      />
    </Atom.Flex>
  </Atom.Box>
);

/* --- Sub-Components --- */
const ProfileCreateModal = props => {
  return (
    <Atom.Box card sx={{maxWidth: 550}}>
      <Atom.Heading xxl heavy>
        Create Developer Profile
      </Atom.Heading>
      <Atom.Paragraph>
        Create your decentralized developer profile today. Start earning
        reputation, build your ecosystem credability and share your favorite
        projects with followers.
      </Atom.Paragraph>
    </Atom.Box>
  );
};

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
