/* --- Local --- */
import {JournalQuestCard} from 'components';

/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      <IntroductionView />
    </Atom.Flex>
  );
};

const IntroductionView = props => (
  <Atom.Box
    sx={{
      bg: 'paper',
      color: 'text',
      p: 5,
    }}>
    <Atom.Flex alignCenter between>
      <Atom.Heading xl m0>
        Active Quests
      </Atom.Heading>
      <Atom.Span tag sm>
        Dashboard > Journal > Quests
      </Atom.Span>
    </Atom.Flex>
    <Atom.Flex column sx={{}}>
      <JournalQuestCard
        delta="quest-0001"
        title="Post Bounty on Open Bounties"
        subtitle="Contribute to Ethereum!"
        image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="Bounties"
        contractName="Open Bounties Network"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Start"
        sx={actions.dev}
      />
      <JournalQuestCard
        delta="quest-0002"
        title="Complete Bounty on Open Bounties"
        subtitle="Contribute to Ethereum!"
        image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="Bounties"
        contractName="Open Bounties Network"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Start"
        sx={actions.dev}
      />
      <JournalQuestCard
        delta="quest-0003"
        title="Refer Person on Open Bounties"
        subtitle="Contribute to Ethereum!"
        image="https://everipedia-storage.s3.amazonaws.com/ProfilePics/gitcoin__26162.jpeg"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="Bounties"
        contractName="Open Bounties Network"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Start"
        sx={actions.dev}
      />
      <JournalQuestCard
        delta="quest-0004"
        title="Purchase .eth domain at ENS Registrar"
        subtitle="Take the first step towards owning decentralized real-estate."
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="ENS"
        contractName="Ethereum Name System"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Create"
        image="https://miro.medium.com/max/1200/1*phqy7EzRlH6J2iU9_8vL0g.png"
        sx={actions.dev}
      />
      <JournalQuestCard
        title="Forward .eth domain to new address"
        subtitle="Redirect the registered domain to point to a new ETH address"
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="ENS"
        contractName="Ethereum Name System"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Create"
        image="https://miro.medium.com/max/1200/1*phqy7EzRlH6J2iU9_8vL0g.png"
        sx={actions.dev}
      />
      <JournalQuestCard
        title="Lend Money in Compound"
        subtitle="Start earning interest on your money."
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="Compound"
        contractName="Compound Finance"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Launch"
        image="https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_400x400.png"
        content={<ProfileCreateModal />}
        sx={actions.dev}
      />
      <JournalQuestCard
        title="Borrow Money in Compound"
        subtitle="Leverage your assets to borrow cryptocurrency."
        summary="Donec ipsum libero, tempus nec risus ut, iaculis gravida mi. Morbi sed lacinia dui. Duis id malesuada eros. Proin a sem sit amet sem tempus aliquam."
        contract="Compound"
        contractName="Compound Finance"
        contractAddress="0x6090a6e47849629b7245dfa1ca21d94cd15878ef"
        label="Launch"
        image="https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_400x400.png"
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
    px: [3],
    pb: [5],
    // flexDirection: ['row'],
    // flexWrap: 'wrap',
  },
  dev: {
    // flex: 1,
    p: 3,
  },
};

export default View;
