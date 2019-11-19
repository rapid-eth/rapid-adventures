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
            // m: 2,
            mx: 2,
          }}
          items={[
            {
              label: 'Profile',
              to: '/dashboard/profile',
              image: (
                <Atom.Image src="https://image.flaticon.com/icons/svg/1673/1673568.svg" />
              ),
            },
            {
              label: 'Leaderboard',
              to: '/dashboard/leaderboard',
              image: (
                <Atom.Image src="https://image.flaticon.com/icons/svg/1673/1673599.svg" />
              ),
            },
            {
              label: 'Collections',
              to: '/dashboard/collections',
              image: (
                <Atom.Image src="https://image.flaticon.com/icons/svg/1673/1673599.svg" />
              ),
            },
            {
              label: 'Team',
              to: '/dashboard/team',
              image: (
                <Atom.Image src="https://image.flaticon.com/icons/svg/1673/1673561.svg" />
              ),
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
