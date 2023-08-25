import React from "react";

function TipAmountAndTotal() {
  return (
    <div className="mt-4 bg-Very-dark-cyan w-62 p-4 rounded-lg h-full">
      <div className="mt-4 flex justify-between">
        <div>
          <h5 className="text-White">Tip Amount</h5>
          <p className="text-Light-grayish-cyan">/person</p>
        </div>
        <p className="text-Primary-Cyan text-3xl font-semibold">$4.27</p>
      </div>

      <div className="mt-8 flex justify-between">
        <div>
          <h5 className="text-White ">Total</h5>
          <p className="text-Light-grayish-cyan">/person</p>
        </div>
        <p className="text-Primary-Cyan text-3xl font-semibold">$32.79</p>
      </div>

      <button className="bg-Primary-Cyan p-2 w-full mt-4 rounded-md text-Very-dark-cyan font-semibold text-2xl">RESET</button>
    </div>
  );
}

export default TipAmountAndTotal;
