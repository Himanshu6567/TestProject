import React from "react";

function Help() {
  return (
    <div className="px-6 py-10 text-white bg-black md:flex md:items-center md:px-12">
      <div className="">
        <h className="flex justify-center text-xl md:justify-start">
          HELP US IN HELPING THEM
        </h>

        <p className="flex justify-center px-8 mt-12 md:px-0 md:pr-7 ">
          If there are 12th pass underprivileged youth around you who are eager
          to work hard to change their lives, please let us know.
        </p>

        <button className="flex justify-center px-3 py-2 mx-auto mt-12 text-black bg-white rounded md:mx-0 w-44">
          LET'S TALK
        </button>
      </div>
      <img
        className="mt-16 md:h-60 lg:h-96 lg:w-auto lg:-mt-20 md:w-80 md:mt-0 "
        src="https://codeyogi.io/images/promo-1.jpg"
      />
    </div>
  );
}

export default Help;
