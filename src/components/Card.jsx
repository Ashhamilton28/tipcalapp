import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

function Card() {
  return (
    <div className="bg-White min-w-[320px] flex-grow rounded-t-3xl w-full p-4 md:max-w-[700px] border border-red-500 xl:flex-grow-0 xl:max-w-5xl flex xl:flex-row flex-col gap-4 xl:p-6">
      {/* card should have 2 children (the form)  a right side and a left side */}
     
      <LeftSide />
      <RightSide />
    
    </div>
  );
}

export default Card;
