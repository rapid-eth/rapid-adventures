import React from 'react';
import {ethers} from 'ethers';
import quest from 'demo/quest.json';
import MeshDevCoin from 'demo/artifacts/MeshDevCoin.json';

const {networks, abi} = MeshDevCoin;
const {
  data: {
    certificate: {id: certificateId},
  },
} = quest;
let contractAddress = '';
if (Object.values(networks).length) {
  const data = Object.values(networks)[0];
  contractAddress = data.address;
}

const QuestButton = props => {
  const invokeEthers = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.web3.currentProvider,
    );
    const signer = provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);

    contract.redeemCertificate(props.certificate, certificateId, {
      gasPrice: 10000,
      gasLimit: 1000000,
    });
  };

  return <Atom.Button onClick={invokeEthers}>Redeem Certificate</Atom.Button>;
};

export default QuestButton;
