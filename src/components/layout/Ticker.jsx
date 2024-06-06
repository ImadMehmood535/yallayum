import React from "react";

const Ticker = () => {
  const wordlist = ["Freeze the taste", "Buy Now"];

  return (
    <div className="Ticker bg-[#F9F1F8]">
      <div className="relative text-black py-2 overflow-hidden">
        <div className="ticker-wrapper">
          <div className="ticker flex !w-[200%] justify-evenly items-center space-x-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <>
                {wordlist.map((word, idx) => (
                  <React.Fragment key={`${word}-${index}-${idx}`}>
                    <span className="text-[#3C3C3B] text-sm w-full GeneralSans font-medium min-w-[220px]">
                      {word}
                    </span>
                    <span className="font-bold text-2xl w-full min-w-[220px]">·</span>
                  </React.Fragment>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
