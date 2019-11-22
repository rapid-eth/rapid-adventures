import React from 'react';
import { Canvas } from 'templates';
import { Text, Icon, Card, Heading, Box, Button, MetaMaskButton, Blockie } from 'rimble-ui';

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

  branding: {
    color: 'white',
  },
}

const IndexPage = (props) => (
  <Canvas center column sx={{}}>
    <div>
      <Header />
      <Rimble />
      <Footer />
    </div>
  </Canvas>
);

const Header = props => {
  return (
    <Atom.Absolute sx={styles.header}>
      <Atom.Flex between>
        <Atom.Box sx={styles.branding}>
          <Molecule.Link to="/">
            <Atom.Heading>{GLOBAL.siteName}</Atom.Heading>
          </Molecule.Link>
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

const Rimble = (props) =>
  <div>
    <Card width={"auto"} maxWidth={"420px"} mx={"auto"} px={[3, 3, 4]}>
      <Text caps fontSize={0} fontWeight={4} mb={3} display={"flex"} alignItems={"center"}>
        <Icon name={"AccountBalanceWallet"} mr={2} />
        Connect your Wallet:
    </Text>

      <MetaMaskButton.Outline fullWidth width={[1, "auto", "auto"]} px={[3, 4, 4]}>
        Install MetaMask
    </MetaMaskButton.Outline>
    </Card>
    <br />
    <br />
    <Card width={"auto"} maxWidth={"420px"} mx={"auto"} px={[3, 3, 4]}>
      <Heading>RAPID</Heading>

      <Box>
        <Text mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam autem
          ratione doloribus quidem neque provident eius error dignissimos delectus
          architecto nemo quos alias sunt voluptate impedit, facilis sequi tempore.
          Amet!
        </Text>
      </Box>

      <Button width={[1, "auto", "auto"]} mr={3}>
        Accept
      </Button>

      <Button.Outline width={[1, "auto", "auto"]} mt={[2, 0, 0]}>
        Cancel
      </Button.Outline>
    </Card>
    <br />
    <br />
    <Card maxWidth={"420px"} mx={"auto"}>
      <Heading>Connect</Heading>
      <Text mb={4}>
        Web3 Connect here
      </Text>
      <Blockie
        opts={{
          seed: new Date().toString(),
          color: "#dfe",
          bgcolor: "#a71",
          size: 15,
          scale: 3,
          spotcolor: "#000"
        }}
      />
    </Card>
  </div>

export default IndexPage