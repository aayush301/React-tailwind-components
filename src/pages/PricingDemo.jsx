import React from "react";
import Pricing from "../components/Pricing/Pricing";
import PricingComparisonTable from "../components/Pricing/PricingComparisonTable";

const PricingDemo = () => {
  return (
    <div className="m-8">
      <div className="text-center mb-8 text-xl">Pricing</div>
      <Pricing />
      <hr className="my-16" />
      <div className="mb-8 text-center text-2xl">Pricing Comparison Table</div>
      <PricingComparisonTable />
      <div className="mb-96 "></div>
    </div>
  );
};

export default PricingDemo;
