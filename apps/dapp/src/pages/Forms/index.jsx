import React from 'react';
import { withEthers } from 'ethers-react-system';

import FormTokenCreateCertificateType from '../../components/forms/FormTokenCreateCertificateType'
import FormTokenCertificateRedeem from '../../components/forms/FormTokenCertificateRedeem'
import FormTokenRedeemCondensedCertificate from '../../components/forms/FormTokenRedeemCondensedCertificate'

const styles = {
  container: {
    p: [3, 3, 4],
    width: ['100%', '100%', 650, 820],
    margin: '20px auto'
  },

  // Regions
  header: {
    top: 0,
    left: 0,
    right: 0,
    m: 3,
  },
  main: {
    flex: 1,
    width: '100%',
  },
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    m: 2,
  },

  // Components
  title: {
    fontSize: [4, 4, 5],
  },
  subtitle: {
    fontSize: [2, 2, 3],
  },
  branding: {
    color: 'white',
  },
  image: {
    borderRadius: 99999,
    width: 32,
  },
};


const Header = props => {
  return (
    <Atom.Box sx={styles.header}>
      <Atom.Flex between>
        <Atom.Box sx={styles.branding}>
          <Molecule.Link to="/">
            <Atom.Heading>{GLOBAL.siteName}</Atom.Heading>
          </Molecule.Link>
        </Atom.Box>
        <Atom.Flex>
          <Atom.Button sm white>
            Forms
          </Atom.Button>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  );
};

const RedeemCondensedCertificateCard = ({ ethers }) => {
  return (
    <Atom.Box card sx={styles.container}>
      <Atom.Flex sx={styles.header}>
        <Atom.Flex column>
          <Atom.Heading sx={styles.title}>RedeemCondensedCertificate</Atom.Heading>
          <Atom.Heading sx={styles.subtitle}>
            redeemCondensedCertificateType
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>

      <Atom.Flex sx={styles.main}>
        <FormTokenRedeemCondensedCertificate ethers={ethers} />
      </Atom.Flex>

      <Atom.Flex sx={styles.footer}>
        <em>
          calls ERC20Certificate redeemCondensedCertificate(bytes calldata _signature, uint256 _combinedValue, bytes32[] calldata _certificateIDs)
        </em>
      </Atom.Flex>

      <Atom.Absolute sx={styles.avatarFloat}></Atom.Absolute>
    </Atom.Box>
  );
};

const CreateCertificateTypeCard = ({ ethers }) => {
  return (
    <Atom.Box card sx={styles.container}>
      <Atom.Flex sx={styles.header}>
        <Atom.Flex column>
          <Atom.Heading sx={styles.title}>CreateCertificateType</Atom.Heading>
          <Atom.Heading sx={styles.subtitle}>
            createCertificateType
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>

      <Atom.Flex sx={styles.main}>
        <FormTokenCreateCertificateType ethers={ethers} />
      </Atom.Flex>

      <Atom.Flex sx={styles.footer}>
        <em>
          calls ERC20Certificate createCertificateType(uint256 _amount, address[] calldata _delegates, string calldata _metadata)
        </em>
      </Atom.Flex>

      <Atom.Absolute sx={styles.avatarFloat}></Atom.Absolute>
    </Atom.Box>
  );
};

const CertificateRedeemCard = ({ ethers }) => {
  return (
    <Atom.Box card sx={styles.container}>
      <Atom.Flex sx={styles.header}>
        <Atom.Flex column>
          <Atom.Heading sx={styles.title}>RedeemCertificate</Atom.Heading>
          <Atom.Heading sx={styles.subtitle}>
            redeemCertificate
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex></Atom.Flex>
      </Atom.Flex>

      <Atom.Flex sx={styles.main}>
        <FormTokenCertificateRedeem ethers={ethers} />
      </Atom.Flex>

      <Atom.Flex sx={styles.footer}>
        <em>
          calls ERC20Certificate redeemCertificate(bytes calldata _signature, bytes32 _certificateID)
        </em>
      </Atom.Flex>

      <Atom.Absolute sx={styles.avatarFloat}></Atom.Absolute>
    </Atom.Box>
  );
};

const EthersDemo = ({ ethers }) =>
  <div>
    <hr />
    <h5>Ethers Provider</h5>
    {Object.entries(ethers).map(([key, value]) => {
      if (['contracts', 'provider', 'wallet'].includes(key)) return null;
      // not sure why but wallet & provider are sometimes circular skip to prevent an JSON.stringify throwing.
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

const IndexPage = ({ ethers }) => {
  // const result = ethers.initContract(ERC20Certificate);
  // console.log('result', result)

  return (
    <div>
      <Header />
      <CreateCertificateTypeCard ethers={ethers} />
      <RedeemCondensedCertificateCard ethers={ethers} />
      <CertificateRedeemCard ethers={ethers} />
      <EthersDemo ethers={ethers} />
    </div>
  )
};

export default withEthers(IndexPage)