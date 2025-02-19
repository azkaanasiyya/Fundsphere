/* eslint-disable react/prop-types */
import PricingCard from '../molecules/PricingCard';

const PricingList = ({ plans }) => {
  return (
    <div className="grid gap-[32px] md:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PricingList;
