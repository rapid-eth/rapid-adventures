import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { postData } from '../../components/forms/testing/fetch';
import quest from 'data/quest.json';
import MeshDevCoin from 'contracts/MeshDevCoin.json';

const { networks, abi } = MeshDevCoin;
const {
  data: {
    certificate: { id: certificateId },
    config,
    certificate,
  },
} = quest;
let contractAddress = '';
if (Object.values(networks).length) {
  const data = Object.values(networks)[0];
  contractAddress = data.address;
}
const VERIFY_EVENT_ENDPOINT =
  'https://cwa95xpep8.execute-api.us-east-1.amazonaws.com/dev/rapid-verify-event';

const View = () => {
  const [response, setResponse] = useState();

  const invokeEthers = async () => {
    const provider = new ethers.providers.Web3Provider(
      window.web3.currentProvider,
    );
    const signer = provider.getSigner();
    const contract = await new ethers.Contract(contractAddress, abi, signer);
    const userAddress = window.ethereum.selectedAddress; // only works for metamask
    const payload = { userAddress, config, certificate };
    const response = await postData(VERIFY_EVENT_ENDPOINT, payload);

    const contractResponse = await contract.redeemCertificate(
      response.cert,
      certificateId,
    );
    setResponse(response);
  };

  return (
    <div>
      <button onClick={invokeEthers}>load</button>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default View;
