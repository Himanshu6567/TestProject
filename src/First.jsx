import React from "react";

function First() {
  return (
    <div className="items-center justify-around bg-red-200 sm:flex">
      <div className="flex items-center justify-center">
        <img
          className="flex justify-center w-96 h-96"
          src="https://theraworxrelief.com/wp-content/uploads/2021/08/TheraworxRelief-Hero_uncompressed.png"
        />
      </div>
      <div className="flex flex-col space-y-4 font-bold text-indigo-700">
        <h className="self-center text-5xl font-bold">PREVENT </h>
        <h className="self-center text-4xl font-bold">FOOT AND LEG CREAM</h>
        <h className="self-center text-2xl">
          WITH THERAWORX RELIFE FOR<br></br> MUSSCLE CREAMPS SPASMS
        </h>
        <button className="self-center px-3 py-2 text-2xl text-white bg-indigo-500 rounded hover:bg-indigo-700 w-72">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default First;
