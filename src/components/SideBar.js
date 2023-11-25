import React from "react";
import DashboardIcon from "../assets/icons/DashboardIcon.svg";
import WalletIcon from "../assets/icons/WalletIcon2.png";
import ChartIcon from "../assets/icons/ChartIcon.svg";
import LendBorrow from "./LendBorrow";
import ExchangeIcon from "../assets/icons/ExchangeIcon.svg";
import { Link } from "react-router-dom";
import Logo from "../assets/logoIcon.png";


const SideBar = () => {
  return (
    <nav className="m-4 h-[95vh] w-64 bg-[#E3DDDD] bg-opacity-40 border shadow-secondary rounded-3xl flex flex-col justify-between items-center py-4 px-2 backdrop-blur-lg sticky top-0 z-20">
      <div className="h-40 w-40 rounded-full gradient absolute blur-[80px] z-[-1]"/>
      <div className="text-lg h-max font-bold flex gap-3 items-center">
        <img className="h-20 w-20 " src={Logo}/>
        <p className="font-bold text-xl">ASTROS</p>
      </div>
      <div>
        <ul className="flex flex-col gap-5">
          {[
            { icon: DashboardIcon, text: "Dashboard" ,path:"/"},
            {
              icon: WalletIcon,
              text: "Wallet",
              path:"/wallet"
            },
            {
              icon: ChartIcon,
              text: "Live Market",
              path:"/coins"
            },
            {
              icon: ExchangeIcon,
              text: "DeX",
              path:"/de-x"
            },
          ].map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className="flex gap-4 items-center">
                  <img className="h-9 w-9 " src={item.icon} alt={item.text} />
                  <p className="font-poppins text-xl">{item.text}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <LendBorrow />
      
    </nav>
  );
};

export default SideBar;
