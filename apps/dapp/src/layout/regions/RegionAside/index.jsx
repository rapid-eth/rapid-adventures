/* --- Global --- */
import menuDev from 'data/menu-dev';
import menuPrd from 'data/menu-prd';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column sx={sx}>
      <Atom.Flex column>
        <Atom.Box sx={{bg: '#172692', p: [3, 3, 3]}}>
          <Atom.Heading>Space</Atom.Heading>
          <Molecule.Link to="/">
            <Atom.Heading lg heavy sx={{mb: 0}}>
              Rapid Adventures
            </Atom.Heading>
          </Molecule.Link>
        </Atom.Box>

        <Atom.HorizontalRule
          sx={{
            width: '100%',
          }}
        />
      </Atom.Flex>

      <Atom.Box sx={{p: [3, 3, 4]}}>
        <Molecule.Menu
          expanded
          items={menuPrd}
          direction="column"
          sx={{
            fontSize: 2,
            my: 1,
            flexDirection: 'column',
          }}
          sxChildren={{
            fontSize: 1,
            my: 1,
            flexDirection: 'column',
          }}
        />

        <Atom.Heading md sx={{mt: 4}}>
          Developer Menu
        </Atom.Heading>
        <Molecule.Menu
          expanded
          direction="column"
          sx={{
            fontSize: 2,
            my: 1,
            flexDirection: 'column',
          }}
          sxChildren={{
            fontSize: 1,
            my: 1,
            flexDirection: 'column',
          }}
          items={menuDev}
        />
      </Atom.Box>
    </Atom.Flex>
  );
};

export default RegionAside;
