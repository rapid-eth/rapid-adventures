/* --- Local --- */
import {
  FormVerifyEvent,
  FormVerifyEventArray,
  FormVerifyTransaction,
  FormVerifyTransactionArray,
} from 'forms';
/* --- Component --- */
const View = props => {
  return (
    <Atom.Flex column>
      <Showcase />
      <FormVerifications />
    </Atom.Flex>
  );
};

const Showcase = props => {
  return (
    <Atom.Flex
      alignCenter
      sx={{
        bg: 'blue',
        color: 'white',
        p: 4,
        flex: 1,
      }}>
      <Atom.Heading giga heavy>
        Testing
      </Atom.Heading>
    </Atom.Flex>
  );
};

const FormVerifications = props => {
  return (
    <>
      <FormDemo
        title="Verify Event"
        subtitle="Verify an event occured on-chain."
        form={<FormVerifyEvent />}
      />
      <FormDemo
        title="Verify Multiple Events"
        subtitle="Verify 1 of N events that occured on-chain."
        form={<FormVerifyEventArray />}
      />
      <FormDemo
        title="Verify Transaction"
        subtitle="Verify a transaction occured on-chain."
        form={<FormVerifyTransaction />}
      />
      <FormDemo
        title="Verify Multiple Transactions"
        subtitle="Verify 1 of N transactions that occured on-chain."
        form={<FormVerifyTransactionArray />}
      />
    </>
  );
};

const FormDemo = props => {
  return (
    <Atom.Box sx={{p: 4}}>
      <Atom.Flex alignCenter>
        <Atom.Heading xxl>{props.title}</Atom.Heading>
        <Atom.Paragraph sx={{ml: 3}}>{props.subtitle}</Atom.Paragraph>
      </Atom.Flex>
      {props.form}
    </Atom.Box>
  );
};

export default View;
