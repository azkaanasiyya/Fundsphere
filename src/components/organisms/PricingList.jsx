/* eslint-disable react/prop-types */
import PricingCard from '../Molecules/pricingCard';

const pricingList = ({ plans }) => {
  return (
    <div className="grid gap-[32px] md:grid-cols-3">
      {plans.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default pricingList;
