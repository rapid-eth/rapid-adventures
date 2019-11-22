/**
 * @name TokenCertificateGetData
 * @description Display
 * @version 0.0.1
 */

import React, { useState } from 'react';

const TokenCertificateGetData = ({ ethers, address, children }) => {
  // const [] = useContractReadSelector(address);
  const build = (address, name) => new ethers.Contract(address, require(`../../../contracts/${name}.json`), eth)

  if (children) return children;
  return null;
};

export default TokenCertificateGetData;
