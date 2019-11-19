/* --- Global --- */
import { BoxInject, Selectors } from '3box-ui-state';
import { GenerateImage, shortenAddress } from '../utilities';

/* ------- Component ------- */
const ProfileSmallView = ({ box, address, ...props }) => {
  const account = Selectors.useGetProfile(box, address.toLowerCase());
  return (
    <Atom.Box sx={props.sx}>
      <ProfileCard
        address={address}
        profile={account.data.profile}
        {...props}
      />
    </Atom.Box>
  );
};

const ProfileCard = props =>
  props.profile ? (
    <AccountActive
      profile={props.profile}
      address={props.address}
      disableAddress={props.disableAddress}
      disableName={props.disableName}
    />
  ) : (
    <AccountInactive
      address={props.address}
      disableAddress={props.disableAddress}
      disableName={props.disableName}
    />
  );

/**
 * @name AccountActive
 * @param {Object} props
 */
const AccountActive = ({ profile, ...props }) => {
  return (
    <>
      <Atom.Flex alignCenter m1>
        <Atom.Flex
          circle
          center
          column
          sx={{
            boxShadow: 0,
            border: '1px solid #FFF',
            overflow: 'hidden',
            width: 32,
            height: 32
          }}
        >
          {profile.image ? (
            <Atom.BackgroundImage
              ratio={0.5}
              src={GenerateImage(profile.image)}
            />
          ) : (
            <Atom.BackgroundImage
              ratio={0.5}
              src="https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
            />
          )}
        </Atom.Flex>

        {!props.disableName && (
          <Atom.Box ml={10}>
            <Molecule.Link to={`/dashboard/profile/${props.address}`}>
              <Atom.Heading md sx={{ m: 0 }}>
                {profile.name}
              </Atom.Heading>
            </Molecule.Link>
            {!props.disableAddress && (
              <Atom.Span sx={{ fontSize: [0], m: 0 }}>
                {shortenAddress(props.address, 7)}
              </Atom.Span>
            )}
          </Atom.Box>
        )}
      </Atom.Flex>
    </>
  );
};

AccountActive.defaultProps = {
  disableName: false
};

AccountActive.propTypes = {
  disableName: PropTypes.bool
};

/**
 * @name AccountInactive
 * @param {*} param0
 */
const AccountInactive = props => {
  return (
    <Atom.Flex alignCenter>
      <Atom.Span>
        <Atom.Image
          circle
          src="https://static.thenounproject.com/png/2348501-200.png"
          sx={{
            bg: 'white',
            width: 32,
            p: 0
          }}
        />
      </Atom.Span>
      <Atom.Box ml={10}>
        {!props.disableAddress && (
          <Atom.Span sx={{ fontSize: [0, 0, 1], m: 0 }}>
            {shortenAddress(props.address, 7)}
          </Atom.Span>
        )}
      </Atom.Box>
    </Atom.Flex>
  );
};

export const Profile = props => (
  <BoxInject>
    <ProfileSmallView {...props} />
  </BoxInject>
);
