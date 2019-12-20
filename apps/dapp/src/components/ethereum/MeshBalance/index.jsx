import {useState, useEffect} from 'react';
import {ethers} from 'ethers';

import MeshToken from 'contracts/MeshDevCoinTest';

const MeshBalance = props => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log('running balance');
    const invokeEthers = async () => {
      const provider = new ethers.providers.Web3Provider(
        window.web3.currentProvider,
      );
      const signer = provider.getSigner();
      const contract = await new ethers.Contract(
        process.env.REACT_APP_MESH_TOKEN,
        MeshToken.abi,
        signer,
      );

      const balance = await contract.balanceOf(window.ethereum.selectedAddress);

      setBalance(balance.toString());

      console.log(balance, 'balance');
    };
    invokeEthers();
  }, [window.ethereum.selectedAddress]);

  return <Atom.Span>Mesh Balance: {balance} </Atom.Span>;
};

export default MeshBalance;
