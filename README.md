# Argochain Relay Bridge

This project provides a sleek, futuristic web interface for interacting with the Argochain Relay Bridge on the Polygon mainnet. The interface allows users to connect their MetaMask wallet and perform various actions such as approving the contract, getting locked balances, fetching Substrate addresses, locking tokens, and getting the contract owner. This interface helps users bridge their AGC tokens one way to your Substrate-based chain.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [Usage](#usage)
- [Files](#files)
- [License](#license)

## Features

- Connect MetaMask wallet
- Approve contract for spending AGC tokens
- Get locked AGC balance
- Fetch Substrate addresses linked to Ethereum accounts
- Lock AGC tokens for bridging to Substrate chain
- Get contract owner

## Prerequisites

- Node.js
- MetaMask extension installed in your browser

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/devolevd-ai/argochain-relay-bridge.git
   cd argochain-relay-bridge
   ```

2. Install dependencies:
   ```bash
   npm install express
   ```

## Running the Server

1. Start the server:
   ```bash
   node server.js
   ```

2. Open your browser and navigate to `http://localhost:3000/`.

## Usage

1. **Connect Wallet**: Click on the "Connect Wallet" button to connect your MetaMask wallet.
2. **Approve Contract**: Enter the spender address and amount, then click "Approve" to approve the contract for spending AGC tokens.
3. **Get Locked Balance**: Enter an account address and click "Get Locked Balance" to view the locked AGC balance.
4. **Get Substrate Address**: Enter an account address and click "Get Substrate Address" to fetch the linked Substrate address.
5. **Lock Tokens**: Enter the amount and Substrate address, then click "Lock Tokens" to lock AGC tokens for bridging.
6. **Get Contract Owner**: Click "Get Owner" to view the current contract owner.

## Files

- **server.js**: Node.js server script that serves the HTML, CSS, and JavaScript files.
- **public/index.html**: Main HTML file with the interface for interacting with the smart contract.
- **public/styles.css**: CSS file for styling the interface with a sleek, futuristic design.
- **public/main.js**: JavaScript file containing functions for interacting with the smart contract using `web3.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
