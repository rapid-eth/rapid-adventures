# Ethers React

A React state and component library to handle Ethereum interactions using the ethers.js library.

Building a decentralized application using React. Do you want a simple and straight-forward state management system for handling Ethereum blockchain interactions?

## Modules

The `ethers-react` module is compromised of multiple sub-modules to better manage a separation of concerns.

- ethers-react-system
- ethers-react-components

### Ethers React System (ethers-react-system)

The `ethers-react-system` module is responsbile for managing the application state. The module initializes state using a `context` function and provides access to that state using the `Provider` and `Consumer` approach.

- actions
- components
- middleware
- selectors
- requests

#### Actions

The `ethers-react-system` provides a predictable naming convention for dispatching actions to an injected wallet.

#### Components

#### Middleware

#### Selectors

The selectors allow components to easily `hook` into the state of the application by observing important information like `networkId` or the current `selectedAddress` amongst others.

#### Requests

## Deploy Contracts

Insert documention for contract deployment

## Sign Transaction

Insert documentation for transaction signing/sending

## Sign Message

Insert documentation for signing messages

## Sign Typed Message

Insert documentation for signing typed messages (ERC712)

## Message Decryption and Encryption

Insert documentation for encrypting and decrypting messages

## Contributors

| Name      | Website                    |
| --------- | -------------------------- |
| **Kames** | <https://www.kamescg.com>  |
| **Luis**  | <https://www.luisosta.com> |

## License

[MIT](LICENSE) © [Kames](https://www.kamescg.com)

##

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
