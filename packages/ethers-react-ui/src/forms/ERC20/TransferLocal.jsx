import idx from 'idx';
import { useEffect, useState } from 'react';
import useForm from 'react-hook-form';
import { withEthers } from 'ethers-react-system';
/* --- Component --- */
export const TransferLocal = ({ contractAddress, contractAbi, ...props }) => {
  const { handleSubmit, register, errors } = useForm();
  /* --- State --- */
  const [contract, setContract] = useState(undefined);
  const [transactionStatus, setTransactionStatus] = useState();

  /* --- Ethers Provider --- */
  const ethersProvider = withEthers();

  useEffect(() => {
    if (contractAddress && contractAbi) {
      let contract = new ethersProvider.instance.Contract(
        contractAddress,
        contractAbi,
        ethersProvider.wallet
      );

      console.log(contract, 'contract');
      setContract(contract);
    }
  }, [contractAddress]);

  const onSubmit = async values => {
    try {
      const tx = contract.transfer([...values]);
      setTransactionStatus(tx);
    } catch (error) {
      setTransactionStatus(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
      <Molecule.Field
        name="address"
        placeholder="Address"
        defaultValue="0x5AdB8209b5276A23426994298FE9900644F57924"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Molecule.Field
        name="amount"
        placeholder="Amount"
        defaultValue="0.1"
        register={register}
        errors={errors}
        sx={styles.field}
      />

      <Atom.Button md rounded sx={styles.button}>
        {props.label}
      </Atom.Button>
    </form>
  );
};

const styles = {
  field: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    boxShadow: 0,
    p: 10,
    my: 1,
    width: '100%'
  },
  button: {
    mt: 2,
    width: '100%'
  }
};

TransferLocal.defaultProps = {
  label: 'Submit'
};
