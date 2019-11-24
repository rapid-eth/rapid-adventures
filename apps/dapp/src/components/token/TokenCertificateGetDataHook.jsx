/**
 * @name TokenCertificateGetData
 * @description Hook version
 * @version 0.0.1
 */

import React, { useState, useEffect } from 'react';

const TokenCertificateGetDataHook = ({ ethers, address, children }) => {
  // const [] = useContractReadSelector(address);
  const []
  const build = (address, name) => new ethers.instance.Contract(address, require(`../../contracts/${name}.json`), ethers.instance.providers.InfuraProvider)
  console.log('>>', ethers)

  build('0x0123', 'ERC20Certificate')
  if (children) return children;
  return null;
};

export default TokenCertificateGetDataHook;


eth = new ethers.providers.InfuraProvider('homestead', '4525cb9262b24bbcaf6ac079efd887bf')

const TokenCertificateGetDataHook = (props) => {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    }
    const build = (address, name) => new ethers.instance.Contract(address, require(`../../contracts/${name}.json`), ethers.instance.providers.InfuraProvider)

    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // ethers.subscribeToContract(props.address, eth)

    return () => {
      // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      ethers.unsubscribeToContract()
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}