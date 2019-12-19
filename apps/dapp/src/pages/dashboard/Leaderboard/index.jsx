/* --- Local --- */
import LeaderboardActivity from './LeaderboardActivity';
/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <Main />
      {/* <IntroductionView /> */}
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
    flex: 2,
    p: 5,
    py: 4,
  },
  right: {
    flex: 4,
    justifyContent: 'flex-end',
    p: 3,
  },
  actions: {mx: 2},
};

const Showcase = props => {
  return (
    <Atom.Flex alignCenter between sx={showcase.container}>
      <Atom.BackgroundImage
        ratio={0.3}
        // src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
        sx={showcase.coverImage}
      />
      <Atom.Flex column sx={showcase.left}>
        <Atom.Heading giga heavy>
          Leaderboard
        </Atom.Heading>
        <Atom.Paragraph>Who Is Leading the Pack</Atom.Paragraph>
      </Atom.Flex>
      <Atom.Flex sx={showcase.right}>
        <Atom.Box>
          <Atom.Button sx={showcase.actions}>Experience Boost</Atom.Button>
          <Atom.Button white sx={showcase.actions}>
            Reward Incentives
          </Atom.Button>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const Main = props => {
  return (
    <Atom.Flex sx={{flex: 1}}>
      <Atom.Flex sx={styles.mainLeft}>
        <LeaderboardActivity column sx={{p: 4, flex: 1}} />
      </Atom.Flex>
      <Atom.Flex card sx={styles.mainRight}>
        <LeaderboardActivityRoles />
      </Atom.Flex>
    </Atom.Flex>
  );
};

const LeaderboardActivityRoles = props => {
  return (
    <Atom.Box>
      <Atom.Heading xxl>Activity</Atom.Heading>
      <Atom.Paragraph sm>
        Aliquam sodales diam non diam placerat, at vulputate magna gravida. Sed
        sed posuere turpis. Phasellus et purus et nisl suscipit lobortis. Sed
        iaculis ut est ac sagittis.
      </Atom.Paragraph>
    </Atom.Box>
  );
};

const styles = {
  mainLeft: {
    flex: 7,
  },
  mainRight: {
    flex: 3,
  },
};

export default View;
