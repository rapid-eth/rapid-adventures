/* --- Global --- */
import {TokenBalance} from 'experiments';

/* --- Component --- */
const RegionAside = ({sx, ...props}) => {
  return (
    <Atom.Flex column sx={sx}>
      <Atom.Flex center column>
        <Molecule.Link to="/">
          <Atom.Heading lg heavy sx={{mb: 0}}>
            Rapid Adventures
          </Atom.Heading>
        </Molecule.Link>
        <Atom.Heading sm thin>
          Activate Your Life
        </Atom.Heading>
        <Atom.Box>
          <Atom.Span tag sx={{fontSize: 0}}>
            earn crypto while adventuring
          </Atom.Span>
        </Atom.Box>
        <Atom.HorizontalRule
          sx={{
            width: '100%',
            my: 3,
          }}
        />
        <TokenBalance
          img="https://instadapp.io/dashboard/img/icons/tokens/eth.svg"
          label="ETH"
          value="22"
        />
        <TokenBalance
          img="https://pbs.twimg.com/profile_images/1056673888556351489/ymMwpnN5.jpg"
          label="MESH"
          value="425"
        />
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
    label: 'Dashboard',
    to: '/dashboard',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673630.svg"
        sx={{mr: 3}}
      />
    ),
  },
  {
    label: 'Adventures',
    to: '/dashboard/adventures',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673636.svg"
        sx={{mr: 3}}
      />
    ),
  },
  {
    label: 'Quests',
    to: '/dashboard/quests',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673641.svg"
        sx={{mr: 3}}
      />
    ),
  },
  {
    label: 'Team',
    to: '/dashboard/team',
    image: (
      <Atom.Image
        src="https://image.flaticon.com/icons/svg/1673/1673604.svg"
        sx={{mr: 3}}
      />
    ),
  },
];

export default RegionAside;
