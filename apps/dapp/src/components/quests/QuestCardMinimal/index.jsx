/* --- Global --- */
import {Modal} from '@horizin/design-system-organisms';

/* --- Local --- */
import {QuestModal} from 'components';
const styles = {
  cover: {
    bg: 'blue',
    color: 'white',
    pt: 5,
    px: 3,
  },
  coverImage: {
    opacity: 0.6,
  },
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },
  content: {
    alignSelf: 'flex-end',
    mt: 'auto',
  },
  badge: {
    borderRadius: 99999,
    boxShadow: 1,
    maxWidth: 70,
    width: '100%',
  },
  button: {
    width: '100%',
    mt: 3,
  },
};

export const QuestCard = props => {
  return (
    <Atom.Box sx={props.sx}>
      <Atom.Flex column card sx={props.main}>
        <Atom.Image src={props.properties.image} sx={{maxWidth: 35}} />
        <Atom.Heading md>{props.properties.title}</Atom.Heading>

        {/* Token Reward */}
        <Atom.Flex between>
          <Atom.Span md>{props.reward.amount}</Atom.Span>
          <Atom.Span md>{props.reward.token}</Atom.Span>
        </Atom.Flex>
        <Atom.Span md sx={{fontWeight: 700}}>
          {props.reward.collectible}
        </Atom.Span>

        {/* Collectible Reward */}
        <Atom.Flex between>
          {/* <Atom.Span md>{props.reward.collection}</Atom.Span> */}
        </Atom.Flex>

        <Atom.Box sx={styles.buttonContainer}>
          <Modal content={<QuestModal {...props} />}>
            <Atom.Button sx={styles.button}>Quest Details</Atom.Button>
          </Modal>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

QuestCard.defaultProps = {};

export default QuestCard;
