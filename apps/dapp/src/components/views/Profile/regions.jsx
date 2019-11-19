/* --- Global --- */
import {
  Avatar,
  ProfileIdentity,
  ProfileDetailsOccupation,
  ProfileCover,
} from '3box-ui-profiles';
/* --- Local --- */
import {
  CollectionList,
  ProfileCalculateRank,
  ProfileFriends,
} from 'experiments';

/* --- Regions --- */
export const ShowcaseRegionTop = props => (
  <Atom.Absolute sx={{top: 0, left: 0, right: 0, m: 3, p: 3}}>
    <>
      <Atom.Flex alignCenter between>
        <ProfileCalculateRank />
        <CollectionList />
      </Atom.Flex>
    </>
  </Atom.Absolute>
);

export const ShowcaseRegionBottom = props => (
  <Atom.Absolute sx={{bottom: 0, left: 0, right: 0, m: 3, p: 3}}>
    <Atom.Flex alignCenter between>
      <Atom.Box>
        <Atom.Heading xxl>Kames Geraghty</Atom.Heading>
        <Atom.Heading lg thin>
          Fullstack Javascript Developer
        </Atom.Heading>
      </Atom.Box>
      <ProfileFriends />
    </Atom.Flex>
  </Atom.Absolute>
);
