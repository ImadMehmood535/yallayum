import React from "react";

const InnerpageHeader = ({ pagetitle, font }) => {
  return (
    <div className="InnerpageHeader py-[96px] md:pageLayout px-0 mx-auto bg-[#F9F1F8]">
      <div className="container">
        <h1 className={`text-center Fedra-400 font-semibold ${font ? `kalamFont font-bold uppercase` : `Fedra-400 font-medium`}`}>{pagetitle}</h1>
      </div>
    </div>
  );
};

export default InnerpageHeader;
