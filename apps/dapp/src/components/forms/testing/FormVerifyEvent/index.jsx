/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import useForm from 'react-hook-form';

import {postData} from '../fetch';
import {async} from 'q';

const mock_url =
  'https://cwa95xpep8.execute-api.us-east-1.amazonaws.com/dev/rapid-verify-event';
const mock_data = {
  userAddress: '0x5AdB8209b5276A23426994298FE9900644F57924',
  config: {
    type: 'event',
    networkId: 1,
    contractAddress: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
    event: 'Transfer(address,address,uint256)',
    index: 0,
  },
  certificate: {
    networkId: 4,
    type: 'erc20',
    address: '0xDa0E7a56Bc25b12797206d0768aa51F6fE829B93',
    id: '0x511539f3af56f3f4aa25f107466c09f9668f3d98d951f5bffee0618a4c92d0dc',
  },
};

/* --- Component --- */
const FormFeedback = ({styled, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */
  const [isComplete, setComplete] = useState();
  const [certificate, setCertificate] = useState();

  /* --- Submit Handler --- */
  const onSubmit = async values => {
    if (values) {
      console.log(values, 'values');
      const data = await postData(mock_url, {
        userAddress: values.userAddress,
        config: {
          type: 'event',
          networkId: 1,
          contractAddress: '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359',
          event: 'Transfer(address,address,uint256)',
          index: 0,
        },
        certificate: {
          networkId: Number(values.networkId),
          type: values.type,
          address: values.address,
          id: values.id,
        },
      });
      console.log(data, 'datadata');

      if (data.cert) {
        setCertificate(data.cert);
      }
      setComplete(true); // Validate submission and set complete status to true
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="userAddress"
        label="User Address"
        defaultValue="0x5AdB8209b5276A23426994298FE9900644F57924"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="networkId"
        label="Network ID"
        defaultValue="4"
        as="input"
        type="number"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="type"
        label="Type"
        defaultValue="erc20"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />

      <Molecule.Field
        name="address"
        label="Address"
        defaultValue="0xDa0E7a56Bc25b12797206d0768aa51F6fE829B93"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="id"
        label="ID"
        defaultValue="0x511539f3af56f3f4aa25f107466c09f9668f3d98d951f5bffee0618a4c92d0dc"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />

      <Atom.Flex sx={{mt: 3}}>
        <Atom.Box>
          <Atom.Button bg="blue" color="white" sx={{}}>
            {isComplete ? (
              <Atom.Span>Complete!</Atom.Span>
            ) : (
              <Atom.Span>Submit</Atom.Span>
            )}
          </Atom.Button>
        </Atom.Box>
        <Atom.Box sx={{ml: 4}}>
          {certificate && (
            <>
              <Atom.Heading>Certificate Data</Atom.Heading>
              <Atom.Paragraph>
                <Atom.Span>{certificate}</Atom.Span>
              </Atom.Paragraph>
            </>
          )}
        </Atom.Box>
      </Atom.Flex>
    </form>
  );
};

FormFeedback.defaultProps = {
  styled: {},
};

FormFeedback.propTypes = {
  styled: PropTypes.object,
};

export default FormFeedback;
