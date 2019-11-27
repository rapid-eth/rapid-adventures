import React, { useState } from 'react';
import useForm from "react-hook-form";

const FormTokenCertificateCreateType = ({ ethers, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm()
  const [isComplete, setComplete] = useState()
  // ethers.initContract(ERC20Certificate);

  const onSubmit = async (values) => {
    console.log('FormTokenCertificateCreateType ethers', ethers)
    const { contracts } = ethers;
    const MeshDevCoin = contracts['0x41b9a6c3E08D5F57cD52230de4966c2eb4fa7909']
    console.log('MeshDevCoin', MeshDevCoin);

    if (values) {
      console.log(values);

      console.log('calling sendTransaction()')
      // ethers.sendTransaction(contractID, functionName, params);
      const params = Object.entries(values).map(([key, value]) => value)
      console.log('params', params)
      // MeshDevCoin.sendTransaction('ERC20Certificate', 'createCertificateType', params);
      const response = await MeshDevCoin.balanceOf('0x762920c6eF772cEC2Db85577964156628277eA70')
      console.log(response);

      // makes an JSON RPC request into Metamask
      // e.g. ERC20Certificate.redeem


      // const factory = new ethers.instance.ContractFactory(ERC20Certificate.abi, ERC20Certificate.bytecode, ethers.wallet);
      // const contract = await factory.deploy("Dummy", "DUM", 0, 10000000);
      // await contract.deployed()
      // console.log(contract.address)
      setComplete(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Molecule.Field
          name='_amount'
          label="Amount"
          placeholder="0"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name='_delegates'
          label="Delegates"
          variants={['text']}
          disabled={isComplete}
          register={register}
          errors={errors}
        />
        <Molecule.Field
          name='_metadata'
          label="Metadata"
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

export default FormTokenCertificateCreateType