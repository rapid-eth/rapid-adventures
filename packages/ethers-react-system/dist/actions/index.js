"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateWallet = exports.sendTransaction = exports.signMessage = exports.signMessageTyped = exports.deployContractFromBytecode = exports.deployContract = exports.initContract = exports.loadContractIntoLibrary = exports.setProviderStatus = exports.setProvider = void 0;

var _utilities = require("../utilities");

var _ethers = require("ethers");

var _types = require("./types");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 *
 * @param {Object} provider
 */
var setProvider = (state, dispatch) => (_ref) => {
  var {
    provider
  } = _ref;
  return dispatch({
    type: 'SET_PROVIDER',
    payload: provider
  });
};
/**
 *
 * @param {Object} provider
 */


exports.setProvider = setProvider;

var setProviderStatus = (state, dispatch) => (_ref2) => {
  var {
    provider
  } = _ref2;
  return dispatch({
    type: 'SET_PROVIDER_STATUS',
    payload: provider
  });
};
/* --- Library ---- */


exports.setProviderStatus = setProviderStatus;

var loadContractIntoLibrary = (state, dispatch) => (_ref3) => {
  var {
    abi,
    contractName
  } = _ref3;
  return dispatch({
    type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
    payload: {
      abi,
      contractName
    }
  });
};
/**
 * @summary This function will take the built smart contracts(and a optional deployed address param)
 * and initialize the smart contract with the deployed version.
 * By default it will pull the latest deployed address from the JSON file.
 * If the contract has not been deployed the address will be the empty string and the contract in state will be the given Contract parameter
 *
 * @param {Object} Contract The smart contract build object. Assumed to follow the general structure resulting
 * from compiling via the truffle(ie it has the abi, networks used, etc)
 *
 * @param {String} givenAddress optional parameter that specifies the deployment address to initialize the contract with.
 * In the event you need to initialize with a contract that is not the latest deployed.
 *
 * TODO @todo add extensive error checking
 * TODO @todo switch optional params to object method
 */


exports.loadContractIntoLibrary = loadContractIntoLibrary;

var initContract = (state, dispatch) => (Contract, _ref4) => {
  var {
    address: givenAddress,
    contractID: givenID
  } = _ref4;
  var {
    wallet,
    defaultProvider
  } = state;

  if (wallet === undefined || Contract === undefined) {
    throw new Error("Either contract to be initialized was not passed or no wallet is connected");
  }

  try {
    //the contractID will be the contractName and the shortened address of the contract
    var [contract, address, contractID] = (0, _utilities.getContract)(Contract, defaultProvider, {
      givenAddress,
      givenID
    });
    dispatch({
      type: _types.INIT_CONTRACT,
      id: contractID,
      payload: {
        contract,
        address
      }
    });
  } catch (error) {
    throw new Error('Error occured while initialization contract: ', error);
  }
};
/**
 *
 * @param {String} contractID
 * @param {Array} params
 */


exports.initContract = initContract;

var deployContract = (state, dispatch) =>
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(function* (contractID) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var {
      contracts,
      wallet
    } = state;

    if (wallet === undefined) {
      throw new Error("Contract cannot be deployed when there's no connected wallet");
    }

    if (contractID === undefined || contractID.length <= 0) {
      throw new Error('Invalid contractID passed to deployContract action creator');
    }

    if (contractID.includes('Factory') === false) {
      throw new Error('You can only deploy from contract factories');
    }

    if (contracts[contractID] === undefined) {
      throw new Error('No such contract factory found with id: ', contractID);
    }

    try {
      var factory = contracts[contractID];
      var deployedContract = yield factory.deploy(...params);
      yield deployedContract.deployed();
      var deployedID = (0, _utilities.getContractID)(deployedContract);
      dispatch({
        type: _types.DEPLOY_CONTRACT,
        id: deployedID,
        payload: {
          contract: deployedContract
        }
      });
    } catch (error) {
      throw new Error("An error occured while deploying the contract ".concat(contractID, ": ").concat(error));
    }
  });

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();
/**
 *
 * @param {Object} abi
 * @param {String} bytecode
 */


exports.deployContract = deployContract;

var deployContractFromBytecode = (state, dispatch) =>
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(function* (abi, bytecode, contractID) {
    var {
      contracts,
      wallet
    } = state;

    if (wallet === undefined) {
      throw new Error("Contract cannot be deployed when there's no connected wallet");
    }

    if (contractID === undefined) {
      throw new Error('When deploying from bytecode a contractID must be provided');
    }

    if (contracts[contractID] !== undefined) {
      throw new Error('The contractID provided is already in use');
    }

    var factory = new _ethers.ethers.ContractFactory(abi, bytecode, wallet);
    var deployedContract = yield factory.deploy();
    yield deployedContract.deployed();
    var deployedID = contractID;
    dispatch({
      type: _types.DEPLOY_CONTRACT,
      id: deployedID
    });
  });

  return function (_x2, _x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deployContractFromBytecode = deployContractFromBytecode;

var signMessageTyped = (state, dispatch) => (_ref7) => {
  var {
    message,
    delta
  } = _ref7;
  return dispatch({
    type: 'SIGN_TYPED_MESSAGE_REQUEST',
    payload: message,
    id: delta || (0, _utilities.hashCode)(message.toString())
  });
};
/**
 * @summary The action creator will receive a message
 * and a optional messageID that will be utilized as the reference in the 'messages' state object.
 * It will sign the given message and then dispatch the action with the message as the payload
 * @param {String} message message to be signed
 * @param {String} messsageID optional ID for the message (to be referenced in the state object)
 */


exports.signMessageTyped = signMessageTyped;

var signMessage = (state, dispatch) =>
/*#__PURE__*/
function () {
  var _ref8 = _asyncToGenerator(function* (message, messageID) {
    var {
      wallet
    } = state;

    if (wallet === undefined) {
      return;
    } //the basic signed message. It will be necessary to utilize the 'splitSignature' function to use it with solidity.
    //https://docs.ethers.io/ethers.js/html/cookbook-signing.html


    var flatSig = yield wallet.signMessage(message);
    dispatch({
      type: _types.SIGN_MESSAGE,
      payload: flatSig,
      id: messageID || (0, _utilities.hashCode)(message)
    });
  });

  return function (_x5, _x6) {
    return _ref8.apply(this, arguments);
  };
}();
/**
 *
 * @param {String} contractID
 * @param {String} functionName
 * @param {Array} params
 */


exports.signMessage = signMessage;

var sendTransaction = (state, dispatch) => function (contractID, functionName) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var contract = state.contracts[contractID];
  var contractFunction = contract[functionName];
  contractFunction(...params).then(tx => {
    return dispatch({
      type: _types.SEND_TRANSACTION,
      id: contractID,
      payload: tx.toNumber()
    });
  });
};
/**
 * @summary
 */


exports.sendTransaction = sendTransaction;

var generateWallet = (state, dispatch) => () => {
  var {
    contracts,
    provider
  } = state;

  if (state.wallet) {
    return;
  }

  var randomWallet = _ethers.ethers.Wallet.createRandom(); // const provider = networkRouting(provider) || networkRouting('json');


  var wallet = new _ethers.ethers.Wallet(randomWallet.privateKey, provider);
  var newContracts = (0, _utilities.generateNewContracts)(contracts, wallet);
  dispatch({
    type: _types.SET_WALLET,
    payload: {
      wallet,
      address: wallet.address,
      contracts: newContracts
    }
  });
};

exports.generateWallet = generateWallet;