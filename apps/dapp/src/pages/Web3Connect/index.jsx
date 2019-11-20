import React from 'react';
import Web3Connect from 'web3connect';
// import { withEthers } from 'ethers-react-system';

const IndexPage = ({ ethers }) => {
  console.log('>>> ethers', ethers)
  return (
    <div>
      {ethers && ethers.toString()}
      hello world
  </div>
  )
};

// export default withEthers(IndexPage);
export default IndexPage;