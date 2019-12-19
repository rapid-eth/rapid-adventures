/* --- Local --- */
import {Profile} from '3box-ui-profiles';
import {SmallStatistic} from 'components';
/* --- Component --- */
const LeaderboardActivity = ({sx, ...props}) => {
  return (
    <Atom.Flex sx={sx} {...props}>
      {leadears.map(p => (
        <LeaderCard {...p} sx={styles.leaderCard} />
      ))}
    </Atom.Flex>
  );
};

const leadears = [
  {
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    balance: '40',
  },
  {
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    balance: '40',
  },
  {
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    balance: '40',
  },
  {
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    balance: '40',
  },
];

const styles = {
  leaderCard: {
    boxShadow: 0,
    borderRadius: 3,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'gray',
    my: 3,
    p: 3,
  },
};

const LeaderCard = props => {
  return (
    <Atom.Flex alignCenter between sx={props.sx}>
      <ProfileSetting address={props.address} />
      <Atom.Flex>
        <SmallStatistic value="432" label="MESH" sx={styles.item} />
        <SmallStatistic value="4" label="Adventures" sx={styles.item} />
        <SmallStatistic value="32" label="Quests" sx={styles.item} />
      </Atom.Flex>
      <Atom.Box>
        <Atom.Button m1 sm white>
          View Profile
        </Atom.Button>
        <Atom.Button m1 sm>
          Activity
        </Atom.Button>
      </Atom.Box>
    </Atom.Flex>
  );
};

/* --- Component --- */
const ProfileSetting = props => {
  return <Profile disableAddress address={props.address} sx={styles.profile} />;
};

export default LeaderboardActivity;
