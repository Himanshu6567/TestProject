import React from "react";

function Animation() {
  return (
    <div className="flex items-center justify-center min-h-screen px-16 bg-gray-50">
      <div className="relative w-full max-w-lg">
        <div className="absolute top-0 bg-purple-300 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 bg-yellow-300 rounded-full -right-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bg-pink-300 rounded-full -bottom-8 left-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="relative m-8 space-y-4">
          <div className="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
            <div className="flex-1">
              <div className="w-48 h-4 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-24 h-6 bg-purple-300 rounded-lg"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
            <div className="flex-1">
              <div className="w-56 h-4 bg-gray-300 rounded"></div>
            </div>
            <div>
              <div className="w-20 h-6 bg-yellow-300 rounded-lg"></div>
            </div>
          </div>
          <div className="flex items-center justify-between p-5 space-x-8 bg-white rounded-lg">
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-44"></div>
            </div>
            <div>
              <div className="h-6 bg-pink-300 rounded-lg w-28"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Animation;
