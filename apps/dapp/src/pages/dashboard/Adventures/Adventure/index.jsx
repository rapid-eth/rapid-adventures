/* --- Global --- */
import {QuestCard} from 'components';

/* --- Local --- */
import {styles} from './styles';
import adventures from 'data/adventureList.json';

/* --- Component --- */
const ViewAdventure = props => {
  const adventure = adventures.data.filter(adv => adv.alias === props.alias)[0];
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

    <Atom.Container sx={{mx: 0, maxWidth: ['100%', '100%', 780]}}>
      <Atom.Flex sx={{flex: 1}}>
        <Atom.Flex between sx={{boxShadow: 1, flex: 6, px: 5, py: 5}}>
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
    <Atom.Flex
      sx={{
        flexDirection: ['column', 'column', 'row'],
        zIndex: 1000,
        ...props.sx,
      }}>
      {/* Left */}

      <Atom.Container sx={{mx: 0, maxWidth: ['100%', '100%', 780]}}>
        <Atom.Flex between wrap sx={{flex: 1, p: 3, flexWrap: 'wrap'}}>
          {props.quests.map(qst => (
            <QuestCard {...qst.properties} sx={styles.quest} />
          ))}
        </Atom.Flex>
      </Atom.Container>

      {/* Right */}
      <Atom.Flex sx={{flex: 5, p: 4}}>
        <Atom.Box
          card
          sx={{
            flex: 1,
            mt: [0, 0, -250],
          }}>
          <Atom.Box sx={{p: 3}}>
            <Atom.Heading>Category: {props.category}</Atom.Heading>
            <Atom.Paragraph>{props.content}</Atom.Paragraph>
          </Atom.Box>
          <Atom.HorizontalRule sx={{mb: 2}} />
          <Atom.Flex column></Atom.Flex>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default ViewAdventure;
