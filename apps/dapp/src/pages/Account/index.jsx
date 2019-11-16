import React from 'react';
import {Canvas} from 'templates';

import {FormJobCreate} from 'forms';

const styles = {
  container: {
    p: [3, 3, 4],
    width: ['100%', '100%', 650, 820],
  },

  // Regions
  header: {
    top: 0,
    left: 0,
    right: 0,
    m: 3,
  },
  main: {
    flex: 1,
    width: '100%',
  },
  footer: {
    color: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    m: 2,
    px: 3,
  },

  // Components
  questCard: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    py: 3,
  },
  title: {
    fontSize: [4, 4, 5],
  },
  subtitle: {
    fontSize: [2, 2, 3],
  },

  branding: {
    color: 'white',
  },
  imageContainer: {
    bg: 'wite',
    boxShadow: 1,
    borderRadius: 99999,
    mr: 2,
    p: 1,
  },
  image: {
    borderRadius: 99999,
    width: 32,
  },

  avatarFloat: {
    top: 0,
    right: 0,
    m: -4,
  },
};

const IndexPage = () => (
  <Canvas center column sx={{}}>
    <Header />
    <Main />
    <Footer />
  </Canvas>
);

export default IndexPage;

const Main = props => {
  return (
    <Atom.Box card sx={styles.container}>
      {/* Header */}
      <Atom.Flex sx={styles.header}>
        <Atom.Flex column>
          <Atom.Heading sx={styles.title}>Kames Geraghty</Atom.Heading>
          <Atom.Heading sx={styles.subtitle}>
            Fullstack Javascript Developer
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>

      {/* Main */}
      <Atom.Flex sx={styles.main}>
        <QuestCatalogList sx={{width: '100%'}} />
      </Atom.Flex>

      {/* Footer */}
      <Atom.Flex sx={styles.footer}></Atom.Flex>

      <Atom.Absolute sx={styles.avatarFloat}></Atom.Absolute>
    </Atom.Box>
  );
};

// Main Sub-Components
const QuestCatalogList = props => {
  return (
    <Atom.Flex column sx={props.sx}>
      {quests.map(item => (
        <QuestCatalogItem {...item} sx={{...styles.questCard, flex: 1}} />
      ))}
    </Atom.Flex>
  );
};

const quests = [
  {
    delta: 'ens',
    title: 'Register ETH Domain',
    image: 'https://imgur.com/eH8mv8s.png',
    subtitle: '',
    reward: '100 MESH',
  },
  {
    delta: 'compound',
    title: 'Invest in Compound',
    image: 'https://imgur.com/ZsQhKZS.png',
    subtitle: '',
    reward: '300 MESH',
  },
  {
    delta: 'consensys',
    title: 'Vote in ConsenDAO',
    image: 'https://imgur.com/diiYdyU.png',
    subtitle: '',
    reward: '500 MESH',
  },
];

const QuestCatalogItem = props => {
  return (
    <Atom.Flex alignCenter between sx={{width: '100%', ...props.sx}}>
      <Atom.Flex alignCenter>
        <Atom.Span sx={styles.imageContainer}>
          <Atom.Image sx={styles.image} src={props.image} />
        </Atom.Span>
        <Atom.Heading sx={{m: 0}}>{props.title}</Atom.Heading>
      </Atom.Flex>
      <Atom.Heading sx={{m: 0}}>{props.reward}</Atom.Heading>
      <Atom.Box>
        <Molecule.Link to={`/adventure/${props.delta}`}>
          <Atom.Span tag>GO</Atom.Span>
        </Molecule.Link>
      </Atom.Box>
    </Atom.Flex>
  );
};

/* --- Header --- */
const Header = props => {
  return (
    <Atom.Absolute sx={styles.header}>
      <Atom.Flex between>
        <Atom.Box sx={styles.branding}>
          <Atom.Heading>MeshHub</Atom.Heading>
        </Atom.Box>
        <Atom.Flex>
          <Atom.Button sm white>
            Dashboard
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Absolute>
  );
};
const Footer = props => {
  return (
    <Atom.Absolute sx={styles.footer}>
      <Atom.Flex between>
        <Atom.Heading>3ID Enabled</Atom.Heading>
        <Atom.Flex>
          <Atom.Heading>Network: Main</Atom.Heading>
          <Atom.Heading>Network: MetaTx</Atom.Heading>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Absolute>
  );
};
