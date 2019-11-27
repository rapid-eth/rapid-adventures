import React from 'react';
import Web3Connect from 'web3connect';
import { withEthers } from 'ethers-react-system';
import TokenBalance from '../../components/token/TokenBalance';
import TokenCertificateGetData from '../../components/token/TokenCertificateGetData';

const IndexPage = ({ ethers }) => {
  console.log('>>> ethers', ethers)
  return (
    <div>
      <TokenBalance />
      <TokenCertificateGetData ethers={ethers} />
      <Web3Connect.Button
        network="mainnet" // optional
        onConnect={(provider) => {
          const web3 = new Web3(provider); // add provider to web3
        }}
        onClose={() => {
          console.log("Web3Connect Modal Closed"); // modal has closed
        }}
      />;
      <h5>Ethers Provider</h5>
      {Object.entries(ethers).map(([key, value]) => {
        if (['contracts', 'provider', 'wallet'].includes(key)) return null;
        // not sure why but wallet & provider are sometimes circular - skip to prevent an JSON.stringify throwing.
        return (
          <details key={key}>
            <summary>
              {key}
            </summary>
            <pre>
              {JSON.stringify(value, null, 2)}
            </pre>
          </details>
        )
      })
      }
    </div>
  )
};

export default withEthers(IndexPage);