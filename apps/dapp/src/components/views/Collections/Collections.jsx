/* --- Local --- */
import {Profile} from '3box-ui-profiles';
import {SmallStatistic} from 'experiments';
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
    title: 'Collection 1',
    subtitle: 'Basic Information about Collection',
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    collectibles: '12',
    admins: 1,
  },
  {
    title: 'Collection 2',
    subtitle: 'Basic Information about Collection',
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    collectibles: '42',
    admins: 5,
  },
  {
    title: 'Collection 3',
    subtitle: 'Basic Information about Collection',
    address: '0xaE11042b07C0B8F01Faa1915Df8167e5650FBc4d',
    collectibles: '105',
    admins: 9,
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
      <Atom.Box>
        <Atom.Heading md heavy m0>
          {props.title}
        </Atom.Heading>
        <Atom.Span sm>{props.subtitle}</Atom.Span>
      </Atom.Box>
      <Atom.Flex>
        <SmallStatistic
          value={props.collectibles}
          label="Collectibles"
          sx={styles.item}
        />
        <SmallStatistic value={props.admins} label="Admins" sx={styles.item} />
      </Atom.Flex>
      <Atom.Box>
        <Atom.Button m1 sm white>
          View Items
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
