// import styles from './styles';
import {Modal} from '@horizin/design-system-organisms';
import {ProfileSmall} from '3box-ui-profiles';

const styles = {
  cover: {
    bg: 'blue',
    color: 'white',
    flex: 6,
    width: '35%',
    px: 3,
  },
  main: {
    flex: 12,
    m: 0,
    p: 4,
    width: '65%',
  },
  coverImage: {
    opacity: 0.6,
  },
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },
  content: {
    flex: 5,
  },
  leaderboard: {
    flex: 3,
    p: 3,
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

export const AdventureCard = ({
  title,
  subtitle,
  summary,
  image,
  label,
  action,
  ...props
}) => {
  return (
    <Atom.Flex sx={props.sx}>
      <Atom.Flex column card sx={styles.main}>
        <Atom.Flex>
          <Atom.Box sx={styles.content}>
            <Atom.Heading xl heavy>
              {title}
            </Atom.Heading>
            <Atom.Flex sx={{my: 2}}>
              <Atom.Span tag m1>
                Address: {props.contractAddress}
              </Atom.Span>
            </Atom.Flex>
            <Atom.Heading md heavy>
              {subtitle}
            </Atom.Heading>
            <Atom.Paragraph>{summary}</Atom.Paragraph>
            <Molecule.Link to={`/dashboard/quest/${props.delta}`}>
              <Atom.Button sx={{my: 3}}>View Full Quest</Atom.Button>
            </Molecule.Link>
          </Atom.Box>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>
      <Atom.Flex center column sx={styles.cover}>
        <Atom.BackgroundGradient
          gradient={props.gradient || 'blue'}
          sx={styles.coverImage}
        />
        <Atom.Flex center column sx={{mt: 3}}>
          <Atom.Span>
            <Atom.Image sx={styles.badge} src={image} />
          </Atom.Span>
          <Atom.Span tag m1>
            Contract: {props.contract}
          </Atom.Span>
          <Atom.Span>{props.contractName}</Atom.Span>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>
  );
};

export default AdventureCard;
