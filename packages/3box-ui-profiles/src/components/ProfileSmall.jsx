/* --- Global Dependencies --- */
import idx from 'idx';
import React from 'react';
import { BoxInject, Selectors } from '3box-ui-state';
import { GenerateImage } from '../utilities';
/* ------- Component ------- */
const ProfileSmallView = ({ box, address, small, styled, ...props }) => {
  const account = Selectors.useGetProfile(box, address.toLowerCase());
  console.log(account, 'accountaccount');
  return (
    <ProfileCard
      small={small}
      profile={account.data.profile}
      address={address}
      {...props}
    />
  );
};

const ProfileCard = ({ profile, small, ...props }) => {
  return profile ? (
    <>
      <Atom.Flex alignCenter>
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
            <Molecule.Link to={`/dashboard/wprofile/${props.address}`}>
              <Atom.Heading md sx={{ m: 0 }}>
                {idx(profile, _ => _.name)}
              </Atom.Heading>
            </Molecule.Link>
          </Atom.Box>
        )}
      </Atom.Flex>
    </>
  ) : (
    <Atom.Flex alignCenter>
      <Atom.Span>
        <Atom.Image
          circle
          src="https://static.thenounproject.com/png/2348501-200.png"
          sx={{
            width: 32,
            p: 0
          }}
        />
      </Atom.Span>
      <Atom.Box ml={10}>
        <Atom.Heading sx={{ m: 0 }}>No Identity ({props.addres})</Atom.Heading>
      </Atom.Box>
    </Atom.Flex>
  );
};

export const ProfileSmall = props => (
  <BoxInject>
    <ProfileSmallView {...props} />
  </BoxInject>
);
