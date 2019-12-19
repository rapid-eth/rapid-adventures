/* --- Global --- */
import {useState} from 'react';

/* --- Local --- */
import {FormVerifyEventDynamic, FormVerifyTransactionDynamic} from 'forms';

/* --- Styles --- */
const styles = {
  modal: {
    bg: 'white',
    maxWidth: [450, 650, 720, 880],
    maxHeight: 500,
    overflow: 'auto',
    p: 4,
  },
};

/* --- Component --- */
const QuestModal = props => {
  const [formRevealed, setFormRevealed] = useState(false);

  return (
    <Atom.Box sx={styles.modal}>
      <Atom.Flex>
        <Atom.Box sx={{flex: 3, p: 4}}>
          <Atom.Image src={props.properties.image} sx={{maxWidth: 100}} />
          <Atom.Heading xxl>{props.properties.title}</Atom.Heading>
          <Atom.Heading md>{props.properties.subtitle}</Atom.Heading>
          <Atom.Span tag onClick={() => setFormRevealed(!formRevealed)}>
            Reveal Form
          </Atom.Span>
        </Atom.Box>
        <Atom.Box sx={{flex: 5, p: 4}}>
          <Atom.Paragraph sx={{fontSize: [1, 1]}}>
            {props.properties.content}
          </Atom.Paragraph>
          <Atom.Heading md>What Will You Need?</Atom.Heading>
          <ul>
            {props.properties &&
              props.properties.requirements &&
              props.properties.requirements.map(req => (
                <li>
                  <Atom.Span>{req}</Atom.Span>
                </li>
              ))}
          </ul>
        </Atom.Box>
      </Atom.Flex>
      {!formRevealed ? null : (
        <Atom.Box>
          {props.config.type === 'event' ? (
            <FormVerifyEventDynamic {...props} />
          ) : (
            <FormVerifyTransactionDynamic {...props} />
          )}
        </Atom.Box>
      )}
      <Atom.HorizontalRule sx={{my: 3}} />
      <Atom.Flex>
        <Atom.Flex sx={{flex: 5, alignItems: 'center'}}>
          <Atom.Button white m1>
            Inventory
          </Atom.Button>
          <Atom.Paragraph m0 sx={{m: 0}}>
            Have everything you need for the quest?
          </Atom.Paragraph>
        </Atom.Flex>
        <Atom.Flex sx={{flex: 3, justifyContent: 'flex-end'}}>
          <Atom.Button white m1>
            Check
          </Atom.Button>
          <Atom.Button purple m1>
            Next
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

export default QuestModal;
