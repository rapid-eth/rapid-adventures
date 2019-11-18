import { Text, Icon, Card, Heading, Box, Button, MetaMaskButton, Blockie } from 'rimble-ui';
import styles from './styles.module.css';

const Rimble = (props) =>
  <div className={styles.parent}>
    <Card width={"auto"} maxWidth={"420px"} mx={"auto"} px={[3, 3, 4]}>
      <Text
        caps
        fontSize={0}
        fontWeight={4}
        mb={3}
        display={"flex"}
        alignItems={"center"}
      >
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

export default Rimble