import { Slide1SVG, Slide2SVG } from "@/data/allSvgs";
import React from "react";

const FilterMode = ({ setFilter, activeFilter }) => {
  return (
    <div className="w-fit rounded-full flex justify-center items-center gap-4 px-2 py-1 bg-themeGray-0 border-[2.5px] border-[#E4E7ED]">
      <div
        onClick={() => setFilter("Packet")}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          activeFilter === "Packet" ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide1SVG color={activeFilter === "Packet" ? "#ffff" : "#cccccc"} />
      </div>
      <div
        onClick={() => setFilter("Box")}
        className={`transition-all cursor-pointer w-[55px] h-[55px] rounded-full flex justify-center items-center ${
          activeFilter === "Box" ? "bg-black" : "bg-transparent"
        }`}
      >
        <Slide2SVG color={activeFilter === "Box" ? "#ffff" : "#cccccc"} />
      </div>
    </div>
  );
};

export default FilterMode;
