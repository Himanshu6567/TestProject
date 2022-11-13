import React, { useState, useEffect } from "react";
import { FcClock } from "react-icons/fc";
import { CgCalendarDates } from "react-icons/cg";

function Timer() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, []);
  return (
    <div className="flex items-center justify-center bg-yellow-300">
      <div className="flex flex-col">
        <div className="flex items-center text-3xl">
          <FcClock />
          <p className="">
            {dateState.toLocaleTimeString("en-US", {
              second: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        </div>
        <div className="flex items-center text-3xl">
          <CgCalendarDates />

          <p>
            {dateState.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
