import {ethers} from 'ethers';

const QuestButton = props => {
  const invokeEthers = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.web3.currentProvider,
    );
    const signer = provider.getSigner();
    const contract = await new ethers.Contract(
      process.env.REACT_APP_MESH_TOKEN,
      abi,
      signer,
    );

    contract.redeemCertificate(props.certificate, props.certificateId, {
      gasPrice: 1000000,
      gasLimit: 1000000,
    });
  };

  return <Atom.Button onClick={invokeEthers}>Redeem Certificate</Atom.Button>;
};

export default QuestButton;
