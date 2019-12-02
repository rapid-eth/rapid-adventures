import { hashCode, generateNewContracts, networkRouting } from '../utilities';
import { ethers } from 'ethers';
import {
  INIT_CONTRACT_REQUEST,
  SET_WALLET,
  WALLET_SIGN_TRANSACTION_REQUEST
} from '../types';

export { enableRequest } from './enableRequest';
export { setProvider } from './setProvider';

/**
 *
 * @param {Object} provider
 */
export const setProviderStatus = (state, dispatch) => ({ provider }) =>
  dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });

/* --- Library ---- */
export const loadContractIntoLibrary = (state, dispatch) => ({
  abi,
  contractName
}) =>
  dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });

/**
 * @summary This function will take the built smart contracts(and a optional deployed address param)
 * and initialize the smart contract with the deployed version.
 * By default it will pull the latest deployed address from the JSON file.
 *
 * @param {Object} Contract The smart contract build object. Assumed to follow the general structure resulting
 * from compiling via the truffle(ie it has the abi, networks used, etc)
 *
 * @param {String} address optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 */
export const initContract = (state, dispatch) => (props, address) => {
  console.log(props, 'deltadeltadelta');

  const { wallet } = state;
  if (wallet === undefined || props.abi === undefined) {
    return;
  }

  try {
    // const latestAddress = getLatestDeploymentAddress(Contract);
    const contract = new ethers.Contract(props.address, props.abi, wallet);
    dispatch({
      type: INIT_CONTRACT_REQUEST,
      id: props.contractName,
      payload: {
        contract,
        address: props.address
      }
    });
  } catch (error) {
    console.log(error);
    return;
  }
};

export const initContractFromLibrary = (state, dispatch) => ({
  address,
  contractName
}) =>
  dispatch({
    type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
    payload: {
      address,
      contractName
    }
  });

export const generateWallet = (state, dispatch) => () => {
  if (state.wallet) {
    return;
  }
  const randomWallet = ethers.Wallet.createRandom();
  const provider = networkRouting('metamask') || networkRouting('json');
  const wallet = new ethers.Wallet(randomWallet.privateKey, provider);
  const contracts = generateNewContracts(state.contracts, wallet);
  dispatch({
    type: SET_WALLET,
    payload: { wallet, address: wallet.address, contracts }
  });
};
