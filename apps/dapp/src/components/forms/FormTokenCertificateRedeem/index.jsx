import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
import useForm from "react-hook-form";

const FormTokenCertificateRedeem = ({ ethers, styled, ...props }) => {
  /* --- Form Hook State --- */
  const { handleSubmit, register, errors } = useForm()

  /* --- Component State --- */
  const [isComplete, setComplete] = useState()

  /* --- Submit Handler --- */
  const onSubmit = (values) => {
    if (values) {
      alert(Object.values(values))
      setComplete(true) // Validate submission and set complete status to true
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Molecule.Field
          name='_signature'
          label="Signature"
          placeholder="0"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name='_certificateID'
          label="Certificate ID"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Atom.Button bg='blue' color='white' sx={{ mt: 3 }}>
          {
            isComplete
              ? <Atom.Span>Complete!</Atom.Span>
              : <Atom.Span>Submit</Atom.Span>
          }
        </Atom.Button>
      </form>
    </div>
  )
}


FormTokenCertificateRedeem.defaultProps = {
  styled: {}
}

FormTokenCertificateRedeem.propTypes = {
  styled: PropTypes.object
}

export default FormTokenCertificateRedeem