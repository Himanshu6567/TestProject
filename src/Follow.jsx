import React from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { ImYoutube2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineCodepenCircle } from "react-icons/ai";

function Follow() {
  return (
    <div className="mt-8 mb-32 ">
      <div className="flex justify-center ">
        <AiOutlineCodepenCircle className="bg-red-300 border rounded-full text-9xl border-stone-700" />
      </div>
      <div className="flex justify-center mt-10 space-x-4">
        <a href="https://www.facebook.com" target="_blank">
          <ImFacebook className="w-12 h-12 border-2 rounded-full animate-spin hover:text-white hover:bg-black border-slate-800 " />
        </a>

        <a href="https://mobile.twitter.com/" target="_blank">
          <AiOutlineTwitter className="w-12 h-12 border-2 rounded-full animate-spin hover:bg-black border-slate-800 hover:text-white" />
        </a>

        <a href="https://mobile.twitter.com/" target="_blank">
          <AiFillLinkedin className="w-12 h-12 border-2 rounded-full animate-spin border-slate-800 hover:bg-black hover:text-white" />
        </a>

        <a href="https://youtube.com/" target="_blank">
          <ImYoutube2 className="w-12 h-12 border-2 rounded-full animate-spin border-slate-800 hover:text-white hover:bg-black" />
        </a>

        <a href="https://instagram.com/" target="_blank">
          <BsInstagram className="w-12 h-12 border-2 rounded-full animate-spin border-slate-800 hover:text-white hover:bg-black" />
        </a>
      </div>
      <p className="flex justify-center mt-16">ABCD 2022.</p>
      <p className="flex justify-center">All rights reserved</p>
    </div>
  );
}

export default Follow;
