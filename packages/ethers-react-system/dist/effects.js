"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ethers = require("ethers");

var _utilities = require("./utilities");

var _types = require("./types");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var effects = (callUseEffect, state, dispatch) => {
  // /**
  //  * @function EthereumEnable
  //  */
  callUseEffect(() => {
    if (window.ethereum && !state.wallet) {
      window.ethereum.enable();
    }
  }, [state.enable]);
  /**
   * @function ProviderMonitor
   */

  callUseEffect(() => {
    if (window.web3 && window.web3.currentProvider) {
      dispatch({
        type: 'SET_PROVIDER',
        payload: {
          injected: window.web3.currentProvider,
          mainnet: _ethers.ethers.getDefaultProvider(),
          rinkeby: _ethers.ethers.getDefaultProvider('rinkeby')
        }
      });
    } else {
      dispatch({
        type: 'SET_PROVIDER_STATUS',
        payload: undefined
      });
    }
  }, [window.web3 && window.web3.currentProvider]);
  /**
   * @function SetAddress
   */

  callUseEffect(() => {
    var address = window.ethereum && window.ethereum.selectedAddress;

    if (address) {
      try {
        dispatch({
          type: 'SET_ADDRESS',
          input: address
        });
      } catch (error) {
        throw new Error("An error occured while setting the address: ".concat(error));
      }
    }
  }, [window.ethereum && window.ethereum.selectedAddress]);
  /**
   * @function SetWallet
   */

  callUseEffect(() => {
    if (state.address && state.wallet === undefined) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          try {
            var provider = (0, _utilities.networkRouting)('metamask');
            var wallet = provider.getSigner();
            var newContracts = (0, _utilities.generateNewContracts)(state.contracts, wallet);
            dispatch({
              type: _types.SET_WALLET,
              payload: {
                wallet,
                address: state.address,
                contracts: newContracts
              }
            });
          } catch (error) {
            throw new Error("An error occurred while trying to set the wallet: ".concat(error));
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.address]);
  /**
   * @function SignMessage
   * @description SIGN_MESSAGE_REQUEST
   */
  // callUseEffect(() => {
  //   if (
  //     state.provider &&
  //     state.wallet &&
  //     state.messages &&
  //     state.messages.length > 0
  //   ) {
  //     const runEffect = async () => {
  //       const messageRequest = state.messages[0];
  //       try {
  //         let signature;
  //         switch (messageRequest.type) {
  //           case 'SIGN_TYPED_MESSAGE_REQUEST':
  //             signature = await state.provider.injected.send(
  //               'eth_signTypedData',
  //               [messageRequest.payload, state.address]
  //             );
  //             break;
  //           default:
  //             signature = await state.wallet.signMessage(
  //               messageRequest.payload
  //             );
  //             break;
  //         }
  //         if (signature) {
  //           dispatch({
  //             type: 'SIGN_MESSAGE_SUCCESS',
  //             id: messageRequest.id,
  //             payload: messageRequest.payload,
  //             signature
  //           });
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         dispatch({
  //           type: 'SIGN_MESSAGE_FAILURE',
  //           input: {
  //             id: messageRequest.id,
  //             error
  //           }
  //         });
  //       }
  //     };
  //     runEffect();
  //   }
  // }, [state.messages, state.provider, state.wallet]);
  // /**
  //  * @function DeployContract
  //  * @description SIGN_MESSAGE_REQUEST
  //  */
  // callUseEffect(() => {
  //   if (state.store.deploy && state.store.deploy.length > 0) {
  //     const runEffect = async () => {
  //       let contract, deployed, transaction;
  //       const request = state.store.deploy[0];
  //       const { payload } = request;
  //       try {
  //         const wallet = state.wallet;
  //         if (wallet) {
  //           contract = new ethers.ContractFactory(
  //             payload.contract.abi,
  //             payload.contract.bytecode,
  //             wallet
  //           );
  //           transaction = contract.getDeployTransaction(...payload.values);
  //           deployed = await wallet.sendTransaction(transaction);
  //           dispatch({
  //             type: 'DEPLOY_CONTRACT_SUCCESS',
  //             id: request.id,
  //             delta: request.id,
  //             payload: deployed
  //           });
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     runEffect();
  //   }
  // }, [state.store.deploy]);
};

var _default = effects;
exports.default = _default;