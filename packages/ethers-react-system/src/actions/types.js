// * Set Actions
export const SET_PROVIDER = 'SET_PROVIDER';
export const SET_PROVIDER_STATUS = 'SET_PROVIDER_STATUS';

// * Init actions
export const INIT_CONTRACT = 'INIT_CONTRACT';

// * Deploy actions
export const DEPLOY_CONTRACT = 'DEPLOY_CONTRACT';
export const DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST =
  'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST';

// * Sign actions
export const SIGN_TYPED_MESSAGE = 'SIGN_TYPED_MESSAGE';
export const SIGN_MESSAGE = 'SIGN_MESSAGE';
export const SEND_TRANSACTION = 'SEND_TRANSACTION';

// * Wallet
export const SET_WALLET = 'SET_WALLET';
export const SET_ADDRESS = 'SET_ADDRESS';

const Action = {};

const ActionType = {
  SET_PROVIDER: 'SET_PROVIDER',
  SET_PROVIDER_STATUS: 'SET_PROVIDER_STATUS',
  INIT_CONTRACT: 'INIT_CONTRACT',
  DEPLOY_CONTRACT: 'DEPLOY_CONTRACT',
  SIGN_TYPED_MESSAGE: 'SIGN_TYPED_MESSAGE',
  SIGN_MESSAGE: 'SIGN_MESSAGE',
  SEND_TRANSACTION: 'SEND_TRANSACTION',
  SET_WALLET: 'SET_WALLET',
  SET_ADDRESS: 'SET_ADDRESS'
};

export { ActionType };