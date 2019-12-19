/**
 * @name RegionTop
 * @description Default top region for site template.
 */
/* --- Global --- */
import {ColorMode} from 'common';
import {Authenticate} from '3box-ui-system';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Molecule.Link to="/">
          <Atom.Heading sx={{mr: 3, mb: 0}}>{GLOBAL.siteName}</Atom.Heading>
        </Molecule.Link>
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 3,
          }}
          items={[
            {
              label: 'Account',
              to: '/account',
            },
            {
              label: 'Dashboard',
              to: '/dashboard',
            },
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Atom.Box sx={{mx: 3}}>
        <ColorMode />
      </Atom.Box>
      <Authenticate display="avatar" />
    </Atom.Flex>
  </Atom.Flex>
);
