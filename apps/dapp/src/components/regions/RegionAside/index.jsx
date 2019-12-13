/* --- Global --- */
import { TokenBalance } from 'experiments';

/* --- Component --- */
const RegionAside = ({ sx, ...props }) => {
  return (
    <Atom.Flex column sx={sx}>
      <Atom.Flex center column>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{ mb: 0 }}>
            Rapid Adventures
          </Atom.Heading>
        </Molecule.Link>

        <Atom.HorizontalRule
          sx={{
            width: '100%',
            my: 3,
          }}
        />
      </Atom.Flex>
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
        items={menu}
      />
    </Atom.Flex>
  );
};

const menu = [
  {
    label: 'Adventures',
    to: '/dashboard/adventures',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673636.svg"
        sx={{ mr: 3 }}
      />
    ),
  },
  {
    label: 'Quests',
    to: '/dashboard/quests',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673641.svg"
        sx={{ mr: 3 }}
      />
    ),
  },
  {
    label: 'Catalog',
    to: '/dashboard/catalog',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673630.svg"
        sx={{ mr: 3 }}
      />
    ),
  },
  {
    label: 'Testing',
    to: '/dashboard/testing',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673643.svg"
        sx={{ mr: 3 }}
      />
    ),
  },
  {
    label: 'Playground',
    to: '/dashboard/playground'
  },
  {
    label: 'Prequalifier',
    to: '/dashboard/prequalifier'
  },
];

export default RegionAside;
