import { ProgresspackIcon } from "@/data/allSvgs";
import React from "react";

const ProgressBarArea = ({filledPercentage}) => {
  return (
    <div className="ProgressBarArea">
      <div className="progress-bar my-12">
        <h2 className="text-5xl GeneralSans font-medium mb-10 text-center">
          Fill Your Can with Fruits Flavours
        </h2>
        <div className="progress-bar-area border border-black rounded-full w-full h-[60px] overflow-hidden relative">
          <div
            className={`flex justify-end h-full items-center py-2 px-8 bg-red-500 rounded-r-full transition-all duration-150 `}
            style={{ width: `${filledPercentage}%`, minWidth: "12%" }}
          >
            <ProgresspackIcon />
          </div>
        </div>
        <div
          className={`flex justify-end mt-2 transition-all duration-150`}
          style={{ width: `${filledPercentage}%`, minWidth: "18%" }}
        >
          <span className="GeneralSans text-xl font-semibold">
            {filledPercentage.toFixed(2)}% Filled
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarArea;
