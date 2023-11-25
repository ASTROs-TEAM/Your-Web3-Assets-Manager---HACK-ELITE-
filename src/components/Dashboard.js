import React,{useEffect, useState} from "react";
import SideBar from "./SideBar";
import UparrowIcon from "../assets/icons/UparrowIcon";
import DownArrowIcon from "../assets/icons/DownArrowIcon";
import WalletConnect from "./WalletConnect";
import Charts from "./Charts";
import MetaMaskSignIn from "./MetaMaskSignIn";

const Dashboard = () => {

  const [IsLoggedIn,setIsLoggedIn]=useState(false);

  
  let imgUrl =
    "https://img.freepik.com/free-photo/3d-illustration-boy-with-camera-his-hand_1142-36694.jpg?size=626&ext=jpg&ga=GA1.1.61347337.1693890015&semt=ais";

  return (
    <>
   
    
    <div className="relative flex-1">
      {/**RIGHT SIDE */}
      
      <div className="m-4 h-full flex flex-col gap-3">
        <div className="self-end flex flex-col gap-2 ">
        {
          IsLoggedIn ? (
            <div className="flex gap-2 items-center mt-2">
              <img src={imgUrl} className="h-12 w-12 rounded-full" />
              <p className="font-poppins font-semibold">Hello &#128075; , Adam</p>
            </div>
          ) : < MetaMaskSignIn  setIsLoggedIn={setIsLoggedIn}/>
        }
        </div>
        
        <div className="flex  gap-4  w-full max-md:flex-col">
          <div className="h-56 p-2 flex flex-col justify-evenly  flex-1 shadow-primary bg-[#FAFAFF] rounded-3xl">
            <div className="flex justify-evenly items-center px-4 p-2 ">
              <p className="font-poppins font-bold text-2xl">Net Worth</p>
              <div className="flex gap-12 items-center">
                <p className="text-3xl font-poppins ">$123</p>
                <div className="flex gap-2">
                  <p className="text-green flex items-center gap-1 text-lg">
                    <UparrowIcon color={"#02B15A"} />
                    $25
                  </p>
                  <p className=" flex items-center gap-1 text-md text-gray-600">
                    $98
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between px-4  ">
                <p className="font-poppins font-lg text-lg">Cryptocurrencies</p>
                <div className="flex gap-9">
                  <p className="text-green flex items-center gap-1 text-lg">
                    <UparrowIcon color={"#02B15A"} />
                    $25
                  </p>
                  <p className=" flex items-center gap-1 text-md text-gray-600">
                    $98
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-4 ">
                <p className="font-poppins font-lg text-lg">NFTs </p>

                <div className="flex gap-9">
                  <p className="text-red flex items-center gap-1 text-lg">
                    <DownArrowIcon />
                    $4
                  </p>
                  <p className=" flex items-center gap-1 text-md text-gray-600">
                    $24
                  </p>
                </div>
              </div>
            </div>
          </div>

          <WalletConnect />
        </div>
        <Charts />
      </div>
    </div>
    </>
  );
};

export default Dashboard;
