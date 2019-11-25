import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
import useForm from "react-hook-form";

const RedeemCondensedCertificate = ({ ethers, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm()
  const [isComplete, setComplete] = useState()

  const onSubmit = (values) => {
    if (values) {
      alert(Object.values(values))
      setComplete(true) // Validate submission and set complete status to true
    }
  }

  console.log('ethers', ethers)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Molecule.Field
          name='_signature'
          label="Signature"
          placeholder="Your Signature"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name='_combinedValue'
          label="Combined Value"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name='_certificateIDs'
          label="Certificate IDs"
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


RedeemCondensedCertificate.defaultProps = {
  styled: {}
}

RedeemCondensedCertificate.propTypes = {
  styled: PropTypes.object
}

export default RedeemCondensedCertificate