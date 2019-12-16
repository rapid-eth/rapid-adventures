/* --- Local --- */
import {FormVerifyEventDynamic, FormVerifyTransactionDynamic} from 'forms';

/* --- Styles --- */
const styles = {
  modal: {
    bg: 'white',
    maxWidth: 720,
    maxHeight: 500,
    overflow: 'auto',
    p: 4,
  },
};

/* --- Component --- */
const QuestModal = props => {
  return (
    <Atom.Box sx={styles.modal}>
      <Atom.Heading xxl>{props.properties.title}</Atom.Heading>
      <Atom.Heading md>{props.properties.title}</Atom.Heading>
      <Atom.Paragraph sx={{fontSize: [1, 1]}}>
        {props.properties.content}
      </Atom.Paragraph>

      {props.config.type === 'event' ? (
        <FormVerifyEventDynamic {...props} />
      ) : (
        <FormVerifyTransactionDynamic {...props} />
      )}
    </Atom.Box>
  );
};

export default QuestModal;
