/**
 * @name TokenBalance
 * @description Display the token balance for passed ERC20 contract address prop.
 * @version 0.0.1
 */

/* --- Global --- */
import React, { useState } from 'react';
// import { useContractReadSelector } from 'ethers-react-system';

const styles = {
  searchSelect: {
    width: 200,
    mr: 4,
  },
};

/* --- Component --- */
const TokenBalance = ({ address, children }) => {
  // const [] = useContractReadSelector(address);


  if (children) return children;
  return null;
};

export default TokenBalance;
