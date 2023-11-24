import React from "react";

const LendBorrow = () => {
  return (
    <div className="flex flex-col gap-2 w-full justify-between ">
      <button className="flex-1 bg-green p-1 py-2  rounded-full">Lend</button>
      <button className="flex-1 bg-purple  p-1 py-2  rounded-full">
        Borrow
      </button>
    </div>
  );
};

export default LendBorrow;
