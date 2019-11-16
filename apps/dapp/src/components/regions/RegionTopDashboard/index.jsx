/**
 * @name RegionTop
 * @description Default top region for application.
 */
/* --- Global --- */
import {ColorMode} from 'core';
import {Authenticate, Login} from '3box-ui-system';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        {/* <Atom.Heading sx={{mr: 3, mb: 0}}>RapidAdventures</Atom.Heading> */}
        <ColorMode />
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
              label: 'Dashboard',
              to: '/dashboard',
            },
            {
              label: 'Profile',
              to: '/dashboard/profile',
            },
            {
              label: 'Adventure List',
              to: '/dashboard/adventure-list',
            },
            {
              label: 'Adventure',
              to: '/dashboard/adventure/:id',
            },
            {
              label: 'Quest List',
              to: '/dashboard/quest-list',
            },
            {
              label: 'Quest',
              to: '/dashboard/quest/:id',
            },
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Authenticate display="avatar" />
    </Atom.Flex>
  </Atom.Flex>
);
