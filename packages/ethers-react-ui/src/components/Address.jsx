/* --- Global --- */
import React from 'react';
import { withEthers } from 'ethers-react-system';
import { Span } from '@horizin/design-system-atoms';

/* ---  Component --- */
const Address = ({ sx }) => {
  const ethers = withEthers();
  return <Span sx={sx}>{ethers.address ? ethers.address : '0x...'}</Span>;
};

export default Address;
