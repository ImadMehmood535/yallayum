import React from "react";
import FilterMode from "./FilterMode";
import { grid_col, grid_list } from "@/assets";
import { Button } from "@nextui-org/react";

const Filterbar = ({ filter, setFilter, setOption, option }) => {
  return (
    <div className="Filterbar mb-10">
      <div className="container">
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="variation-filter">
              <FilterMode setFilter={setFilter} activeFilter={filter} />
            </div>
            <div className="view-list hidden md:flex gap-3">
              <Button
                id="filter"
                className={` text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${
                  option === 1 ? "active" : ""
                }`}
                onClick={() => setOption(1)}
              >
                <img
                  src={grid_list.src}
                  alt="Grid_2"
                  width={30}
                  className=" pr-1 w-auto h-full  "
                />
              </Button>
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${
                  option === 2 ? "active" : ""
                }`}
                type="button"
              >
                <img
                  src={grid_col.src}
                  alt="Grid_3"
                  width={30}
                  onClick={() => setOption(2)}
                  height={24}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
