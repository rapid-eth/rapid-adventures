/* --- Global --- */
import {Avatar} from '3box-ui-profiles';
/* --- Local --- */

import {ShowcaseRegionTop, ShowcaseRegionBottom} from './regions';

const styles = {
  profileCard: {
    my: 1,
  },
  quest: {
    width: ['100%', '100%', '33%'],
    p: 3,
  },
  asideLiftUp: {
    flex: 1,
    p: 0,
    mt: -180,
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
      minHeight: [320, 270],
      zIndex: 100,
    }}>
    <Atom.BackgroundGradient gradient="sunset" sx={{opacity: 0.2}} />

    <Atom.Flex sx={{flex: 1}}>
      {/* Right */}
      <Atom.Flex sx={{flex: 10}}>
        <ShowcaseRegionTop />
        <ShowcaseRegionBottom />
      </Atom.Flex>

      {/* Left */}
      <Atom.Flex sx={{flex: 6}}></Atom.Flex>
    </Atom.Flex>
  </Atom.Flex>
);

const Main = props => {
  return (
    <Atom.Flex sx={{flex: 1, p: 4, zIndex: 1000}}>
      {/* Right */}
      <Atom.Flex sx={styles.mainRight}>
        <QuestDescription />
      </Atom.Flex>
      {/* Right : End */}

      {/* Left */}
      <Atom.Flex sx={{flex: 6}}>
        <Atom.Box sx={styles.asideLiftUp}>
          <ProfileCard />
        </Atom.Box>
      </Atom.Flex>
      {/* Left : End */}
    </Atom.Flex>
  );
};

const ProfileCard = props => {
  return (
    <Atom.Box card sx={{p: 0}}>
      <Atom.Box sx={profileCard.cover}>
        <Atom.BackgroundImage
          ratio={0.2}
          sx={{opacity: 0.5}}
          src="https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1357&q=80"
        />
      </Atom.Box>
      <Atom.Box sx={profileCard.main}>
        <Avatar sx={styles.avatar} />
        <Atom.Heading xl>Quest Name Which Could Be Long</Atom.Heading>
        <Atom.Heading md thin>
          Etiam ut blandit augue. Pellentesque laoreet mollis purus, id dapibus
          ex semper sed. Quisque facilisis et nunc id laoreet.
        </Atom.Heading>
      </Atom.Box>
    </Atom.Box>
  );
};

const QuestDescription = props => {
  return (
    <Atom.Box>
      <Atom.Heading giga>Quest Details</Atom.Heading>
      <Atom.Paragraph>
        Cras ullamcorper aliquam turpis sit amet ultrices. Aliquam consequat,
        ligula eget consequat posuere, augue tellus aliquam purus, quis volutpat
        dolor lorem sit amet magna. Etiam ut blandit augue. Pellentesque laoreet
        mollis purus, id dapibus ex semper sed. Quisque facilisis et nunc id
        laoreet.
      </Atom.Paragraph>
      <Atom.Paragraph>
        Cras ullamcorper aliquam turpis sit amet ultrices. Aliquam consequat,
        ligula eget consequat posuere, augue tellus aliquam purus, quis volutpat
        dolor lorem sit amet magna. Etiam ut blandit augue. Pellentesque laoreet
        mollis purus, id dapibus ex semper sed. Quisque facilisis et nunc id
        laoreet.
      </Atom.Paragraph>
      <Atom.Paragraph>
        Cras ullamcorper aliquam turpis sit amet ultrices. Aliquam consequat,
        ligula eget consequat posuere, augue tellus aliquam purus, quis volutpat
        dolor lorem sit amet magna. Etiam ut blandit augue. Pellentesque laoreet
        mollis purus, id dapibus ex semper sed. Quisque facilisis et nunc id
        laoreet.
      </Atom.Paragraph>
    </Atom.Box>
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
