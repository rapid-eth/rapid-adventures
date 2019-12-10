/**
 * @name RegionTopDashboard
 * @description Default top region for dashboard template.
 */
/* --- Global --- */
import {ColorMode} from 'core';
import {Authenticate} from '3box-ui-system';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <ColorMode />
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        {/* <Molecule.Menu
          sx={{
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
                <Atom.Image src="https://image.flaticon.com/icons/svg/1673/1673579.svg" />
              ),
            },
          ]}
        /> */}
      </Atom.Flex>
    </Atom.Flex>

    {/* Right */}
    <Atom.Flex alignCenter>
      <Authenticate display="avatar" />
    </Atom.Flex>
  </Atom.Flex>
);
