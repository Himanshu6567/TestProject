import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Everything() {
  return (
    <div className="h-screen p-10 bg-pink-300 ">
      <GiHamburgerMenu className="text-3xl" />
      <div className="flex justify-end px-10">
        <input
          placeholder="Search"
          className="border rounded border-stone-700"
        />
        <button className="px-3 py-1 text-white bg-indigo-600 rounded hover:bg-indigo-900 ">
          Search
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-32">
        <div className="flex items-center justify-center w-2/3 h-20 text-4xl ">
          Everything for you
        </div>

        <div className="flex items-center justify-center w-2/3 h-20 text-3xl bg-white ">
          There's nothing here!
        </div>
      </div>
    </div>
  );
}

export default Everything;
