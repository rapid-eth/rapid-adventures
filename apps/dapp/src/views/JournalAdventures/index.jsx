/* --- Local --- */
import {AdventureCardActiveLarge} from 'components';

/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      {/* <Showcase /> */}
      <IntroductionView />
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
    flex: 3,
    p: 5,
    py: 6,
  },
  right: {
    flex: 4,
  },
  actions: {mx: 2},
};

const IntroductionView = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      color: 'text',
      p: 5,
    }}>
    <Atom.Flex alignCenter between>
      <Atom.Heading xl m0>
        Active Adventures
      </Atom.Heading>
      <Atom.Span tag sm>
        Dashboard > Journal > Adventures
      </Atom.Span>
    </Atom.Flex>
    <Atom.Flex column sx={{}}>
      <AdventureCardActiveLarge
        title="Register ETH Domain"
        subtitle="Get your decentralized identity started!"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Create"
        image="https://miro.medium.com/max/1200/1*phqy7EzRlH6J2iU9_8vL0g.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <AdventureCardActiveLarge
        title="DeFi Investment"
        subtitle="Take Advantage of DeFi"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Launch"
        image="https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_400x400.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <AdventureCardActiveLarge
        title="Complete Bounties"
        subtitle="Contribute to Ethereum!"
        image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Start"
        content={<ProfileCreateModal />}
        sx={actions.dev}
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
    px: [3],
    pb: [5],
    // flexDirection: ['row'],
    // flexWrap: 'wrap',
  },
  dev: {
    // flex: 1,
    p: 3,
  },
};

export default View;
