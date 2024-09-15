import React from "react";
import Category from "./Category";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row">
        <Category />
        <div className="w-full md:w-3/5 md:ml-4">
        This is the Payment Gateway
        </div>
      </div>
    </div>
  );
};

export default Checkout;
