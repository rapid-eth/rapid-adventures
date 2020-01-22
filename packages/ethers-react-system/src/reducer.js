import { hashCode } from './utilities';
import {
  ENABLE_REQUEST,
  ENABLE_SUCCESS,
  ENABLE_FAILURE,
  SET_PROVIDER,
  SET_PROVIDER_STATUS,
  WALLET_SIGN_TYPED_MESSAGE_REQUEST,
  WALLET_SIGN_MESSAGE_REQUEST,
  INIT_CONTRACT_REQUEST,
  CONTRACT_DEPLOY_REQUEST,
  CONTRACT_DEPLOY_SUCCESS,
  CONTRACT_DEPLOY_FAILURE,
  CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST,
  CONTRACT_DEPLOY_FROM_BYTECODE_SUCCESS,
  CONTRACT_DEPLOY_FROM_BYTECODE_FAILURE,
  BALANCE_SET,
  NONCE_SET,
  NETWORK_SET,
  ENS_ADDRESS_SET,
  WALLET_PROVIDER_GET_REQUEST,
  WALLET_PROVIDER_GET_SUCCESS,
  WALLET_PROVIDER_GET_FAILURE,
  WALLET_SEND_TRANSACTION_REQUEST,
  SIGNER_GET_REQUEST,
  SIGNER_GET_SUCCESS,
  SIGNER_GET_FAILURE,
  SET_WALLET,
  SET_WALLET_FAILURE,
  SET_ADDRESS
} from './types';

const reducerActions = (state, action) => {
  const { delta, id, payload, type, error } = action;
  switch (type) {
    /* ----------------------- */
    /*         Common          */
    /* ----------------------- */
    case ENABLE_REQUEST:
      return {
        ...state,
        isEnableRequested: true
      };
    case ENABLE_SUCCESS:
      return {
        ...state,
        isEnableSuccess: true,
        isEnableRequested: false
      };
    case ENABLE_FAILURE:
      return {
        ...state,
        isEnableRequested: false,
        isEnableSuccess: false
      };
    case SET_PROVIDER:
      return {
        ...state,
        providers: payload
      };
    case SET_PROVIDER_STATUS:
      return {
        ...state,
        providerStatus: payload
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: payload
      };

    case BALANCE_SET:
      return {
        ...state,
        balance: payload
      };
    case NONCE_SET:
      return {
        ...state,
        nonce: payload
      };
    case NETWORK_SET:
      return {
        ...state,
        network: payload
      };
    case ENS_ADDRESS_SET:
      return {
        ...state,
        ensAddress: payload
      };

    /* ----------------------- */
    /*         Signer          */
    /* ----------------------- */
    case SIGNER_GET_REQUEST:
      return {
        ...state
      };
    case SIGNER_GET_SUCCESS:
      return {
        ...state,
        wallet: payload
      };
    case SIGNER_GET_FAILURE:
      return {
        ...state
        // wallet: error
      };
    /* ----------------------- */
    /*         Wallet          */
    /* ----------------------- */
    case WALLET_PROVIDER_GET_SUCCESS:
      return {
        ...state,
        injected: payload
      };
    case WALLET_PROVIDER_GET_FAILURE:
      return {
        ...state,
        wallet: false
      };
    case SET_WALLET:
      return {
        ...state
        // wallet: payload.wallet
      };
    case SET_WALLET_FAILURE:
      return {
        ...state
        // wallet: error
      };
    case WALLET_SEND_TRANSACTION_REQUEST:
      return {
        ...state,
        signatures: {
          ...state.signatures,
          [id]: payload
        }
      };
    case WALLET_SIGN_TYPED_MESSAGE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              ...action
            }
          ]
        }
      };
    case WALLET_SIGN_MESSAGE_REQUEST:
      return {
        ...state,
        messages: {
          [id]: payload
        }
      };
    /* ----------------------- */
    /* Contract Initialize     */
    /* ----------------------- */

    case INIT_CONTRACT_REQUEST:
      const { address, contract } = payload;
      return {
        ...state,
        store: {
          ...state.store,
          contracts: []
        },
        contracts: {
          ...state.contracts,
          [id]: {
            id,
            address,
            ...contract
          }
        }
      };

    /* ----------------------- */
    /* Contract Deployment     */
    /* ----------------------- */
    case CONTRACT_DEPLOY_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: [
            ...state.store.deploy,
            {
              payload,
              id: delta
            }
          ]
        },
        contracts: {
          ...state.contracts,
          [id]: payload.contract
        }
      };
    case CONTRACT_DEPLOY_SUCCESS:
      return {
        ...state
      };
    case CONTRACT_DEPLOY_FAILURE:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: []
        }
      };
    case CONTRACT_DEPLOY_FROM_BYTECODE_REQUEST:
      return {
        ...state,
        store: {
          ...state.store,
          deploy: [
            ...state.store.deploy,
            {
              payload,
              id: delta
            }
          ]
        }
      };

    default:
      // return { ...state };
      throw new Error(`No Reducer Type Set: ${action.type}`);
  }
};

export default reducerActions;
