// import styles from './styles';
import {Modal} from '@horizin/design-system-organisms';
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
      <Atom.Flex sx={styles.cover}>
        <Atom.BackgroundImage
          // src="https://images.squarespace-cdn.com/content/v1/5ce6c5ea16bcf700010cf4eb/1569085618224-15UT48EN1VTSFWXOHFA0/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/ethereal-ny-home-kevin-owocki.jpg?format=2500w"
          sx={styles.coverImage}
        />
        <Atom.Absolute sx={{top: 0, right: 0, m: -3}}>
          <Atom.Image sx={styles.badge} src={props.properties.image} />
        </Atom.Absolute>
        <Atom.Box sx={styles.content}>
          <Atom.Heading xxl>{props.properties.title}</Atom.Heading>
          <Atom.Paragraph>{props.properties.subtitle}</Atom.Paragraph>
        </Atom.Box>
      </Atom.Flex>
      <Atom.Flex column card sx={props.main}>
        <Atom.Paragraph sx={{fontSize: [1, 1]}}>
          {props.properties.content}
        </Atom.Paragraph>
        <Atom.Box sx={styles.buttonContainer}>
          <Modal content={<QuestModal {...props.properties} />}>
            <Atom.Button sx={styles.button}>Quest Deatails</Atom.Button>
          </Modal>
        </Atom.Box>
      </Atom.Flex>
    </Atom.Box>
  );
};

QuestCard.defaultProps = {};

export default QuestCard;
