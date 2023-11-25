require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-ethers");
const ethers = require("ethers");

MAINNET_PROVIDER_URL =
  "https://mainnet.infura.io/v3/d3c9058b8aad4316aae76ca531ded19a";
DEV_ETH_MNEMONIC =
  "between garment slide system equip uncle immense street melody fringe symptom iron";

const providerUrl = MAINNET_PROVIDER_URL;
const developmentMnemonic = DEV_ETH_MNEMONIC;

if (!providerUrl) {
  console.error(
    "Missing JSON RPC provider URL as environment variable `MAINNET_PROVIDER_URL`\n"
  );
  process.exit(1);
}

if (!developmentMnemonic) {
  console.error(
    "Missing development Ethereum account mnemonic as environment variable `DEV_ETH_MNEMONIC`\n"
  );
  process.exit(1);
}

function getPrivateKeysFromMnemonic(mnemonic, numberOfPrivateKeys = 20) {
  const result = [];
  for (let i = 0; i < numberOfPrivateKeys; i++) {
    result.push(
      ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${i}`).privateKey
    );
  }
}

module.exports = {
  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: providerUrl,
      },
      gasPrice: 0,
      initialBaseFeePerGas: 0,
      loggingEnabled: false,
      accounts: {
        mnemonic: developmentMnemonic,
      },
      chainId: 1, // metamask -> accounts -> settings -> networks -> localhost 8545 -> set chainId to 1
    },
    localhost: {
      url: "http://localhost:8545",
      accounts: getPrivateKeysFromMnemonic(developmentMnemonic),
    },
  },
};
