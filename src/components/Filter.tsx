"use client";
import { useState } from "react";

type FilterPropsType = {
  activeFilterValue: "All" | "Active" | "Completed";
  updateCurrentFilter: (filter: "All" | "Active" | "Completed") => void;
};

const Filter = ({
  activeFilterValue,
  updateCurrentFilter,
}: FilterPropsType) => {
  const filterOptions = ["All", "Active", "Completed"];

  const handleFilterClick = (filterType: any) => {
    updateCurrentFilter(filterType);
  };
  return (
    <div className="flex gap-1.5 my-5">
      {filterOptions.map((filter) => {
        const isActive = activeFilterValue === filter;
        return (
          <button
            className={
              isActive
                ? "bg-[#3c82f6] rounded-xl text-xs font-medium text-white h-8 p-2"
                : "bg-[#e5e7eb] rounded-xl text-xs font-medium text-[#363636] h-8 p-2"
            }
            onClick={() => handleFilterClick(filter)}
            key={filter}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};
export default Filter;

{
  /* <Button className="text-xs font-medium px-3 rounded-xl bg-[#3c82f6] text-[#fff] hover:bg-[#3c82f6]">
        All
      </Button>
      <Button className="text-xs font-medium px-3 rounded-xl bg-[#3c82f6] text-[#fff] hover:bg-[#3c82f6]">
        Active
      </Button>
      <Button className="text-xs font-medium px-3 rounded-xl bg-[#3c82f6] text-[#fff] hover:bg-[#3c82f6]">
        Completed
      </Button> */
}
