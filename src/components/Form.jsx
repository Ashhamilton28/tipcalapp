import React from "react";
import TipAmountAndTotal from "./TipAmountAndTotal";
import dollarSign from "/images/icon-dollar.svg"
import person from "/images/icon-person.svg"

function Form() {
  const buttons = ['5%','20%','15%', '25%', '50%', 'Custom']
  return (

    <section>
      {/* bill  */}
      <div className="flex flex-col gap-1 relative">
        <label className="text-xl text-Dark-grayish-cyan " htmlFor="Bill">
          Bill
        </label>
        <img className="w-4 absolute top-10 left-2" src={dollarSign} alt="" />
        <input
        
          className=" bg-Very-light-grayish-cyan shadow-lg py-2 px-4 text-right"
          placeholder=""
          type="text"

        />
      </div>

      {/* select tip  */}
      <div className="mt-6">
        <label className="text-xl text-Dark-grayish-cyan" htmlFor="Tip">
          Select Tip %
        </label>
        <div className="flex items-center flex-wrap gap-4 mt-4">

          {/* something kissing from map  */}
          {/* add active and hover states  */}
          {/* add number of people input  */}
          {buttons.map((label)=><button className="bg-Very-dark-cyan h-10 min-w-[150px] text-white rounded-md">
            {label}
          </button>)}
         
        </div> 
      </div>

      {/* number of people  */}
      <div className="mt-6 relative">
       <label className="text-xl text-Dark-grayish-cyan">Number of People</label>
       <img className="w-4 absolute top-10 left-2" src={person} alt="" />
       <input className="bg-Very-light-grayish-cyan shadow-lg py-2 px-4 w-full text-right" type="text" />
      </div>

      <TipAmountAndTotal />
    </section>
  );
}

export default Form;
