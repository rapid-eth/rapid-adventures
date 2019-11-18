import React from 'react';
import Web3Connect from 'web3connect';

const IndexPage = props => (
  <div>
    <Web3Connect.Button
      network="mainnet" // optional
      onConnect={(provider) => {
        const web3 = new Web3(provider); // add provider to web3
      }}
      onClose={() => {
        console.log("Web3Connect Modal Closed"); // modal has closed
      }}
    />;
  </div>
);

export default IndexPage;
