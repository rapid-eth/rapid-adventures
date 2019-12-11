const styles = {
  modal: {
    bg: 'white',
    maxWidth: 500,
    p: 4,
  },
};

/* --- Component --- */
const QuestModal = props => (
  <Atom.Box sx={styles.modal}>
    <Atom.Heading xxl>{props.title}</Atom.Heading>
    <Atom.Heading md>{props.title}</Atom.Heading>
    <Atom.Paragraph sx={{fontSize: [1, 1]}}>{props.content}</Atom.Paragraph>

    <Atom.Flex between>
      <Atom.Button>Claim Certificate</Atom.Button>
      <Atom.Button sx={{mx: 3}}>Redeem Certificate</Atom.Button>
      <Atom.Button>Save Certificate</Atom.Button>
    </Atom.Flex>
  </Atom.Box>
);

export default QuestModal;
