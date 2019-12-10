/* --- Global --- */
import {ProfileSmall} from '3box-ui-profiles';
import {QuestCard} from 'experiments';
/* --- Local --- */
import {addressList} from './demo';
import {styles} from './styles';

import adventures from 'demo/adventureList.json';

/* --- Component --- */
const ViewAdventure = props => {
  console.log(props, 'VIEW ADVENTURE');

  const adventure = adventures.data.filter(adv => adv.alias === props.alias)[0];
  console.log(adventure, 'adventureadventureadventure');
  return (
    <>
      <Showase {...adventure} />
      <Main {...adventure} />
    </>
  );
};

const Showase = props => (
  <Atom.Box
    sx={{
      bg: 'blue',
      color: 'white',
      width: '100%',
      zIndex: 100,
    }}>
    <Atom.BackgroundGradient gradient="sunset" sx={{opacity: 0.2}} />

    <Atom.Container sx={{mx: 0, maxWidth: ['100%', '100%', 780, 880]}}>
      <Atom.Flex sx={{flex: 1}}>
        <Atom.Flex between sx={{boxShadow: 1, flex: 6, px: 5, py: 6}}>
          <Atom.Box>
            <Atom.Heading xxl>{props.title}</Atom.Heading>
            <Atom.Heading lg thin>
              {props.subtitle}
            </Atom.Heading>
            <Atom.Paragraph>{props.summary}</Atom.Paragraph>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  </Atom.Box>
);

const Main = props => {
  return (
    <Atom.Flex sx={{zIndex: 1000, ...props.sx}}>
      {/* Left */}
      <Atom.Container
        sx={{mx: 0, maxWidth: ['100%', '100%', 780, 820, 820, 980]}}>
        <Atom.Box sx={{p: 3}}>
          <Atom.Heading>Category: {props.category}</Atom.Heading>
          <Atom.Paragraph>{props.content}</Atom.Paragraph>
        </Atom.Box>

        <Atom.Flex between wrap sx={{flex: 1, p: 3, flexWrap: 'wrap'}}>
          {props.quests.map(qst => (
            <QuestCard {...qst.properties} sx={styles.quest} />
          ))}
        </Atom.Flex>
      </Atom.Container>

      {/* Right */}
      <Atom.Flex sx={{flex: 4, p: 4}}>
        <Atom.Box
          card
          sx={{
            flex: 1,
            mt: -300,
          }}>
          <Atom.Heading xl thin>
            Leaderboards
          </Atom.Heading>
          <Atom.HorizontalRule sx={{mb: 2}} />
          <Atom.Flex column>
            {addressList.map(i => (
              <ProfileSmall address={i} sx={styles.profileCard} />
            ))}
          </Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default ViewAdventure;
