/* eslint-disable react/prop-types */
import PricingCard from "../molecules/PricingCard";

const PricingList = ({ plans }) => {
  return (
    <div className="grid md:grid-cols-3 gap-[32px]">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingList;
