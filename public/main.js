let web3;
let userAccount;

async function connectWallet() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            userAccount = accounts[0];
            document.getElementById('walletAddress').innerText = `Connected: ${userAccount}`;
            document.getElementById('connectWalletButton').innerText = 'Wallet Connected';
        } catch (error) {
            console.error('User rejected request', error);
        }
    } else {
        alert('MetaMask not detected. Please install MetaMask.');
    }
}

const abi = [
    {

        "inputs": [

            {

                "internalType": "contract IERC20",

                "name": "_agcToken",

                "type": "address"

            },

            {

                "internalType": "address",

                "name": "initialOwner",

                "type": "address"

            }

        ],

        "stateMutability": "nonpayable",

        "type": "constructor"

    },

    {

        "inputs": [

            {

                "internalType": "address",

                "name": "owner",

                "type": "address"

            }

        ],

        "name": "OwnableInvalidOwner",

        "type": "error"

    },

    {

        "inputs": [

            {

                "internalType": "address",

                "name": "account",

                "type": "address"

            }

        ],

        "name": "OwnableUnauthorizedAccount",

        "type": "error"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": true,

                "internalType": "address",

                "name": "previousOwner",

                "type": "address"

            },

            {

                "indexed": true,

                "internalType": "address",

                "name": "newOwner",

                "type": "address"

            }

        ],

        "name": "OwnershipTransferred",

        "type": "event"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": true,

                "internalType": "address",

                "name": "account",

                "type": "address"

            },

            {

                "indexed": false,

                "internalType": "uint256",

                "name": "amount",

                "type": "uint256"

            },

            {

                "indexed": false,

                "internalType": "string",

                "name": "substrateAddress",

                "type": "string"

            }

        ],

        "name": "TokensLocked",

        "type": "event"

    },

    {

        "anonymous": false,

        "inputs": [

            {

                "indexed": true,

                "internalType": "address",

                "name": "account",

                "type": "address"

            },

            {

                "indexed": false,

                "internalType": "uint256",

                "name": "amount",

                "type": "uint256"

            }

        ],

        "name": "TokensUnlocked",

        "type": "event"

    },

    {

        "inputs": [],

        "name": "agcToken",

        "outputs": [

            {

                "internalType": "contract IERC20",

                "name": "",

                "type": "address"

            }

        ],

        "stateMutability": "view",

        "type": "function"

    },

    {

        "inputs": [

            {

                "internalType": "address",

                "name": "account",

                "type": "address"

            }

        ],

        "name": "getLockedBalance",

        "outputs": [

            {

                "internalType": "uint256",

                "name": "",

                "type": "uint256"

            }

        ],

        "stateMutability": "view",

        "type": "function"

    },

    {

        "inputs": [

            {

                "internalType": "address",

                "name": "account",

                "type": "address"

            }

        ],

        "name": "getSubstrateAddress",

        "outputs": [

            {

                "internalType": "string",

                "name": "",

                "type": "string"

            }

        ],

        "stateMutability": "view",

        "type": "function"

    },

    {

        "inputs": [

            {

                "internalType": "uint256",

                "name": "amount",

                "type": "uint256"

            },

            {

                "internalType": "string",

                "name": "substrateAddress",

                "type": "string"

            }

        ],

        "name": "lockTokens",

        "outputs": [],

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "inputs": [],

        "name": "owner",

        "outputs": [

            {

                "internalType": "address",

                "name": "",

                "type": "address"

            }

        ],

        "stateMutability": "view",

        "type": "function"

    },

    {

        "inputs": [],

        "name": "renounceOwnership",

        "outputs": [],

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "inputs": [

            {

                "internalType": "address",

                "name": "newOwner",

                "type": "address"

            }

        ],

        "name": "transferOwnership",

        "outputs": [],

        "stateMutability": "nonpayable",

        "type": "function"

    },

    {

        "inputs": [

            {

                "internalType": "uint256",

                "name": "amount",

                "type": "uint256"

            }

        ],

        "name": "unlockTokens",

        "outputs": [],

        "stateMutability": "nonpayable",

        "type": "function"

    }

];

const contractAddress = '0xYourContractAddress';
let contract;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        contract = new web3.eth.Contract(abi, contractAddress);
    } else {
        alert('MetaMask not detected. Please install MetaMask.');
    }
});

async function approve() {
    const spender = document.getElementById('spenderApprove').value;
    const amount = document.getElementById('amountApprove').value;
    try {
        const result = await contract.methods.approve(spender, amount).send({ from: userAccount });
        document.getElementById('resultApprove').innerText = `Approved: ${result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultApprove').innerText = 'Error occurred. Check console for details.';
    }
}

async function getLockedBalance() {
    const account = document.getElementById('accountGetLockedBalance').value;
    try {
        const result = await contract.methods.getLockedBalance(account).call();
        document.getElementById('resultGetLockedBalance').innerText = `Locked Balance: ${result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultGetLockedBalance').innerText = 'Error occurred. Check console for details.';
    }
}

async function getSubstrateAddress() {
    const account = document.getElementById('accountGetSubstrateAddress').value;
    try {
        const result = await contract.methods.getSubstrateAddress(account).call();
        document.getElementById('resultGetSubstrateAddress').innerText = `Substrate Address: ${result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultGetSubstrateAddress').innerText = 'Error occurred. Check console for details.';
    }
}

async function lockTokens() {
    const amount = document.getElementById('amountLockTokens').value;
    const substrateAddress = document.getElementById('substrateAddressLockTokens').value;
    try {
        const result = await contract.methods.lockTokens(amount, substrateAddress).send({ from: userAccount });
        document.getElementById('resultLockTokens').innerText = `Tokens Locked: ${result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultLockTokens').innerText = 'Error occurred. Check console for details.';
    }
}

async function getOwner() {
    try {
        const result = await contract.methods.owner().call();
        document.getElementById('resultGetOwner').innerText = `Owner: ${result}`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultGetOwner').innerText = 'Error occurred. Check console for details.';
    }
}
