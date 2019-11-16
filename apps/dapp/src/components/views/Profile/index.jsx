/* --- Local --- */
import {BasicAction} from 'experiments';

/* --- Component --- */
const ProfileView = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      color: 'text',
      py: 4,
    }}>
    <Atom.Flex between sx={actions.container}>
      <BasicAction
        title="Create Profile"
        subtitle="Get your decentralized identity started!"
        label="Create"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <BasicAction
        title="Quest Catalog"
        subtitle="See what quests are available today."
        label="Launch"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <BasicAction
        title="Build Team"
        subtitle="Start a team to complete adventures together!"
        label="Start"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
    </Atom.Flex>
  </Atom.Box>
);

/* --- Sub-Components --- */
const ProfileCreateModal = props => {
  return (
    <Atom.Box card sx={{maxWidth: 550}}>
      <Atom.Heading xxl heavy>
        Create Developer Profile
      </Atom.Heading>
      <Atom.Paragraph>
        Create your decentralized developer profile today. Start earning
        reputation, build your ecosystem credability and share your favorite
        projects with followers.
      </Atom.Paragraph>
    </Atom.Box>
  );
};

const actions = {
  container: {
    px: [3, 3, 5],
    pb: [5],
    flexDirection: ['row'],
    flexWrap: 'wrap',
  },
  dev: {
    width: '30%',
  },
};

export default ProfileView;
