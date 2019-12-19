/* --- Components --- */
import {QuestListSuggested} from 'components';

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{width: '100%'}}>
      <Showcase />
      <EventList />
      <FeaturedAdventure />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex center column sx={{py: 5, width: '100%'}}>
        <Atom.BackgroundGradient gradient="blue" />
        {/* <Atom.BackgroundImage
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ratio={0.0001}
          sx={{opacity: 0.2}}
        /> */}

        <Atom.Container
          sx={{
            color: 'white',
            maxWidth: ['100%', '100%', 880, 1080],
          }}>
          <Atom.Flex sx={{flex: 1}}>
            <Atom.Flex
              column
              sx={{flex: 4, justifyContent: 'center', height: 400, p: 4}}>
              <Atom.BackgroundImage
                src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                ratio={0.0001}
                sx={{
                  borderRadius: 10,
                  opacity: 1.2,
                }}
              />

              <Atom.BackgroundGradient gradient="blue" sx={{opacity: 0.65}} />
              <Atom.Heading giga>Rapid Adventures</Atom.Heading>
              <Atom.Heading lg>
                Activate Your Life. Play the game of games.
              </Atom.Heading>

              <Atom.Flex>
                <Molecule.Link to="/account">
                  <Atom.Button white m1>
                    Create Account
                  </Atom.Button>
                </Molecule.Link>
                <Molecule.Link to="/guide">
                  <Atom.Button blue m1>
                    The Guide
                  </Atom.Button>
                </Molecule.Link>
              </Atom.Flex>
            </Atom.Flex>
            <Atom.Flex center column sx={{flex: 1}}>
              <Atom.Box card sx={{ml: -100, width: 'calc(100% + 100px)'}}>
                <Atom.Heading xl m1>
                  Suggested Quests
                </Atom.Heading>
                <QuestListSuggested />
              </Atom.Box>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

const EventList = props => {
  return (
    <Atom.Container sx={{my: 5}}>
      <Atom.Heading xxl sx={{textAlign: 'center', my: 3}}>
        Why Play?
      </Atom.Heading>
      <Atom.Heading md sx={{fontWeight: 400, textAlign: 'center', my: 3}}>
        Get the most out of life by playing the biggest "Meta Game" possible.
        Activate your life!
      </Atom.Heading>
      <Atom.Flex between sx={{flexWrap: 'wrap'}}>
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
        <FeatureCard
          title="Engaging"
          image="https://image.flaticon.com/icons/png/512/1673/1673581.png"
          content="Cras a cursus sem. Fusce porttitor dolor vel elit scelerisque, id efficitur nisl efficitur."
        />
      </Atom.Flex>
    </Atom.Container>
  );
};

const FeatureCard = props => {
  return (
    <Atom.Flex
      card
      column
      sx={{
        width: ['100%', '100%', '30%'],
      }}>
      <Atom.Image src={props.image} sx={{maxWidth: 45, mb: 3}} />
      <Atom.Heading>{props.title}</Atom.Heading>
      <Atom.Paragraph>{props.content}</Atom.Paragraph>
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

const FeaturedAdventure = props => {
  return (
    <Atom.Flex alignCenter sx={showcase.container}>
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
  );
};

export default HomePage;
