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
const mock_url =
  'https://cwa95xpep8.execute-api.us-east-1.amazonaws.com/dev/rapid-verify-tx';

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
      const data = await postData(mock_url, {
        transactionHash: values.transactionHash,
        userAddress: values.userAddress,
        config: {
          networkId: Number(values.networkId),
          functionSignature: values.functionSignature,
          toAddress: [values.addressOne, values.addressTwo],
          value: false,
        },
        certificate: {
          networkId: Number(4),
          type: values.type,
          address: values.address,
          id: values.id,
        },
      });
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
        defaultValue="0x342fe81f80ad854a3aa3c1dc2937999a49d9a8bd"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="transactionHash"
        label="Transaction Hash"
        defaultValue="0x60991e9181f9e289c6cd658b18e2e89f6648eb86951ac3839a96fd55eaedf148"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />

      <Atom.Heading xl>Configuration</Atom.Heading>
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
        name="functionSignature"
        label="Function Signature"
        defaultValue="0xc4b794aa"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="addressOne"
        label="Address One"
        defaultValue="0x4b001411186583fd65b8c0b92a57ff028a459f9f"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Field
        name="addressTwo"
        label="Address Two"
        defaultValue="0xb68CDa5e9327461Bfe63704e68c2a33b9c077cdf"
        variants={['text']}
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Atom.Heading xl>Certificate</Atom.Heading>
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
  sx: {},
};

FormFeedback.propTypes = {
  sx: PropTypes.object,
};

export default FormFeedback;
