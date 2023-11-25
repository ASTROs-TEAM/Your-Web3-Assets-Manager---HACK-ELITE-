import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { MetaMaskProvider } from '@metamask/sdk-react';

function MetaMaskSignIn({setIsLoggedIn}){

    const[walletAddress,setWalletAddress] = useState("");

    async function requestAccount(){
        console.log('Requesting Account..');

        if(window.ethereum){
            console.log('detected')

            try{
                const accounts = await window.ethereum.request({
                    method:"eth_requestAccounts",
                });
                
                setWalletAddress(accounts[0]);
                if(!walletAddress) return 0
                console.log("Wallet Address :",walletAddress);
                setIsLoggedIn(true);
            } catch(error){
                console.log('Error connecting');
            }

        }else{
            console.log('Meta mask not detected')
        }
    }
  
    return (
      <div>
        <button className="self-end w-max px-4 p-2 h-max rounded-2xl bg-green" onClick={requestAccount}>Connect and Sign</button>
        
      </div>
    );
}

export default MetaMaskSignIn