import React from 'react'

import { ChevronsLeft, ChevronsRight } from "lucide-react";
const Pagination = ({pageNo,handleNext,handlePre}) => {

  return (
    <div className="flex justify-center items-center bg-gray-700 text-white p-3 rounded-lg  shadow-md mt-4 gap-4">
      <button
        className="p-2 bg-gray-600 rounded-full hover:bg-amber-300"
        onClick={handlePre}
      >
        <ChevronsLeft />
      </button>
      <div className='bold text-3xl p-4'>{pageNo}</div>
      <button className="p-2 bg-gray-600 rounded-full hover:bg-amber-300">
        <ChevronsRight onClick={handleNext} />
      </button>
    </div>
  );
}

export default Pagination