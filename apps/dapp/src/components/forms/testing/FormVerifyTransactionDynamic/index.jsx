/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.1
 */

/* --- Global --- */
import React, {useState} from 'react';
import {PropTypes} from 'prop-types';
import useForm from 'react-hook-form';

/* --- Global --- */
import {QuestButton} from 'components';
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

  console.log(props, 'contract transaction');
  /* --- Submit Handler --- */
  const onSubmit = async values => {
    if (values) {
      const data = await postData(mock_url, {
        transactionHash: values.transactionHash,
        userAddress: values.userAddress,
        config: {
          networkId: Number(props.config.networkId),
          functionSignature: props.config.functionSignature,
          toAddress: props.config.toAddress,
          value: false,
        },
        certificate: {
          networkId: Number(props.certificate.networkId),
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
          {isComplete ? (
            <>
              <QuestButton
                certificate={certificate}
                certificateId={props.certificate.certificateId}
              />
            </>
          ) : (
            <Atom.Button bg="blue" color="white" sx={{}}>
              <Atom.Span>Submit</Atom.Span>
            </Atom.Button>
          )}
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
