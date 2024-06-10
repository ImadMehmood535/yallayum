import React from "react";

const InnerpageHeader = ({ pagetitle }) => {
  return (
    <div className="InnerpageHeader py-[96px] md:pageLayout px-0 mx-auto bg-[#F9F4ED]">
      <div className="container">
        <h1 className="text-center Fedra-400 font-semibold">{pagetitle}</h1>
      </div>
    </div>
  );
};

export default InnerpageHeader;
