import React from "react";
import MetaMaskIcon from "../assets/icons/MetamaskIcon.svg";
import CoinbaseIcon from "../assets/icons/CoinbaseIcon.png";

const WalletConnect = () => {
  return (
    <div className="h-56 py-3 flex flex-col gap-4 justify-between items-center flex-1 shadow-primary bg-[#FAFAFF] rounded-3xl ">
      <p className="font-bold text-2xl">My Wallets</p>
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex gap-4  items-center">
          <img src={MetaMaskIcon} className="h-8 w-8" />
          <p className="text-lg">Meta Mask</p>
        </div>
        <div className="flex gap-4 items-center">
          <img src={CoinbaseIcon} className="h-8 w-8" />
          <p className="text-lg">Coinbase </p>
        </div>
        <div className="flex p-2 px-4  w-50 gap-4 items-center bg-[#FAFAFF] border border-gray-400 rounded-full border-dashed">
          <p className="text-lg">Connect to Wallet </p>
        </div>
      </div>
    </div>
  );
};

export default WalletConnect;
