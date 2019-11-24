/**
 * @name TokenCertificateGetData
 * @description Display
 * @version 0.0.1
 */

import React, { useState } from 'react';

const TokenCertificateGetData = ({ ethers, address, children }) => {
  // const [] = useContractReadSelector(address);
  // const [] = 
  const build = (address, name) =>
    new ethers.instance.Contract(address, require(`../../contracts/${name}.json`), ethers.instance.providers.InfuraProvider)

  console.log('>>', ethers)

  // build('0x0123', 'ERC20Certificate')
  if (children) return children;
  return null;
};

export default TokenCertificateGetData;
