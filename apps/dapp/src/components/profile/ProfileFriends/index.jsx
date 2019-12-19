/* --- Local --- */
import {ProfileSmall, Profile} from '3box-ui-profiles';

/* --- Component --- */
const ProfileFriends = props => (
  <Atom.Box sx={{textAlign: 'center'}}>
    <Atom.Flex>
      <ProfileSetting address="0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d" />
      <ProfileSetting address="0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d" />
      <ProfileSetting address="0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d" />
      <ProfileSetting address="0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d" />
      <ProfileSetting address="0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d" />
    </Atom.Flex>
    <Atom.HorizontalRule sx={{my: 2, width: 30, mx: 'auto'}} />
    <Atom.Span sx={{fontSize: 0, mt: 0}}>Team</Atom.Span>
  </Atom.Box>
);

/* --- Component --- */
const ProfileSetting = props => {
  return (
    <Profile
      disableName
      disableAddress
      address={props.address}
      sx={styles.profile}
    />
  );
};

const styles = {
  profile: {},
};

export default ProfileFriends;
