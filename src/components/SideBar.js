import React from "react";
import DashboardIcon from "../assets/icons/DashboardIcon.svg";
import WalletIcon from "../assets/icons/WalletIcon2.png";
import ChartIcon from "../assets/icons/ChartIcon.svg";
import LendBorrow from "./LendBorrow";
import ExchangeIcon from "../assets/icons/ExchangeIcon.svg";

const SideBar = () => {
  return (
    <nav className="m-4 h-[95vh] w-64 bg-[#E3DDDD] bg-opacity-40 border shadow-secondary rounded-3xl flex flex-col justify-between items-center py-4 px-2 backdrop-blur-lg">
      <div className="text-lg font-bold font-poppins">Logo </div>
      <div>
        <ul className="flex flex-col gap-5">
          {[
            { icon: DashboardIcon, text: "Dashboard" },
            {
              icon: WalletIcon,
              text: "Wallet",
            },
            {
              icon: ChartIcon,
              text: "Live Market",
            },
            {
              icon: ExchangeIcon,
              text: "DeX",
            },
          ].map((item, index) => {
            return (
              <li key={index}>
                <div className="flex gap-2 items-center">
                  <img className="h-7 w-7 " src={item.icon} alt={item.text} />
                  <p className="font-poppins text-lg">{item.text}</p>
                </div>
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
