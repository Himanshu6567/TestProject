import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
function Contect() {
  return (
    <div className="py-20 mb-32 px-28 ">
      <div className="">
        <h className="flex justify-center text-2xl"> CONTACT</h>
        <div className="flex justify-center space-x-10 mt-28">
          <div className="flex items-center ">
            <IoIosCall className="text-3xl animate-bounce" />
            <div className="flex flex-col pl-3">
              <p>CALL US</p>
              <p>987654321</p>
            </div>
          </div>

          <div className="flex items-center ">
            <MdLocationOn className="text-3xl animate-bounce" />
            <div className="flex flex-col pl-3">
              <p>ADDRESS</p>
              <p> DEHRADUN</p>
            </div>
          </div>

          <div className="flex items-center">
            <MdEmail className="text-3xl animate-bounce" />
            <div className="flex flex-col pl-3">
              <p>EMAIL</p>
              <p>hellomahii@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-44">
        <div className="space-x-4 sm:flex">
          <div className="flex flex-col space-y-4">
            <input
              className="border rounded w-96 h-9 border-stone-700"
              placeholder="NAME"
            ></input>

            <input
              className="border rounded w-96 h-9 border-stone-700"
              placeholder="MOBILE NO"
            ></input>
          </div>

          <textarea
            className="mt-5 border border-stone-700 sm:mt-0"
            rows="3"
            cols="48"
            placeholder="MESSAGE"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-between mt-10 px-36">
        <p>
          All the fields are required <span className="text-red-700">*</span>
        </p>
        <button className="px-3 py-2 bg-gray-300">SUBMIT MESSAGE</button>
      </div>
    </div>
  );
}

export default Contect;
