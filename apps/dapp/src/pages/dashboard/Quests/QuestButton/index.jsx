import React from 'react';
import {ethers} from 'ethers';
import MeshDevCoin from 'contracts/MeshDevCoin.json';

const {abi} = MeshDevCoin;

const QuestButton = () => {
  const invokeEthers = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.web3.currentProvider,
    );
    const signer = provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);

    await contract.redeemCertificate(props.certificate, certificateId, {
      gasPrice: 10000,
      gasLimit: 1000000,
    });
  };

  return <Atom.Button onClick={invokeEthers}>Redeem Certificate</Atom.Button>;
};

export default QuestButton;
