/* --- Local --- */
import {AdventureCardLarge} from 'experiments';

/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      <Showcase />
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

const Showcase = props => {
  return (
    <Atom.Flex alignCenter sx={showcase.container}>
      <Atom.BackgroundImage
        ratio={0.3}
        src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
        sx={showcase.coverImage}
      />
      <Atom.Flex column sx={showcase.left}>
        <Atom.Box card>
          <Atom.Heading giga heavy>
            Rapid Adventures
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
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex center column sx={showcase.right}>
        {/* <Atom.Box>
          <Atom.Button sx={showcase.actions}>Create Profile</Atom.Button>
          <Atom.Button sx={showcase.actions}>Pick Quests</Atom.Button>
          <Atom.Button sx={showcase.actions}>Start Adventure</Atom.Button>
        </Atom.Box> */}
      </Atom.Flex>
    </Atom.Flex>
  );
};

const IntroductionView = props => (
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
      />
      <AdventureCardLarge
        title="DeFi Investment"
        subtitle="Take Advantage of DeFi"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        label="Launch"
        image="https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_400x400.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <AdventureCardLarge
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
