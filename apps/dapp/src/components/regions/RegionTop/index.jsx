/**
 * @name RegionTop
 * @description Default top region for application.
 */
/* --- Global --- */
import {ColorMode} from 'core';
import {Authenticate, Login} from '3box-ui-system';
import {Global} from '@emotion/core';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Atom.Heading sx={{mr: 3, mb: 0}}>{GLOBAL.siteName}</Atom.Heading>
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
              label: 'About',
              to: '/about',
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
