const AdventureListItemSmall = ({name, sx, ...props}) => { 
 return(
  <Molecule.Card
    sx={sx}
    title={name}
    tagline={props.tagline}
    actions={(
    <Atom.Flex>
      <Molecule.Link to={`/adventure/${props.delta}`}>
        <Atom.Button>Preview</Atom.Button>
      </Molecule.Link>
      <Molecule.Link to={`/cms/content/adventure/${props.delta}`}>
        <Atom.Button sx={{mx: 3}}>Manage</Atom.Button>
      </Molecule.Link>
      <Molecule.Link to={`/cms/content/adventure/${props.delta}/edit`}>
        <Atom.Button>Edit</Atom.Button>
      </Molecule.Link>
    </Atom.Flex>
    )}
  />
)}

export default AdventureListItemSmall