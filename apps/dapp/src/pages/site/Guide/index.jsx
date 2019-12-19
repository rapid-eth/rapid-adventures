/* --- Component --- */
const AboutPage = props => (
  <Atom.Box sx={{width: '100%'}}>
    <Showcase />
  </Atom.Box>
);

const Showcase = props => (
  <Atom.Flex
    center
    column
    sx={{
      color: 'white',
      py: 5,
    }}>
    <Atom.BackgroundGradient gradient="blue" />
    <Atom.BackgroundImage
      src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      ratio={0.0001}
      sx={{opacity: 0.2}}
    />
    <Atom.Heading giga>Guide</Atom.Heading>
    <Atom.Heading sm>Get The Good Stuff</Atom.Heading>
  </Atom.Flex>
);

export default AboutPage;
