/* eslint-disable react/prop-types */
import ButtonPricing from "../atoms/ButtonPricing";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`py-[32px] px-[24px] lg:px-[40px] rounded-[24px] flex flex-col border border-primary-500 
        justify-between gap-[40px] ${plan.name === "Pro" ? "bg-neutral-500 text-white" : "bg-neutral-50 text-neutral-500"}`}
    >
      <div>
        <h3 className="text-[32px] font-bold mb-[8px] text-left">{plan.name}</h3>
        <p className="text-lg text-left mb-[32px] max-w-[298.67px] text-neutral-200">{plan.desc}</p>
        <ul>
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2 mb-[16px] text-lg text-left">
              <span className="text-blue-600">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={`text-6xl font-bold mb-[24px] ${plan.name === "Pro" ? "text-white" : "text-primary-500"}`}>
          ${plan.price} <span className="text-base font-normal text-neutral-200">/ month</span>
        </p>
        <ButtonPricing variant={plan.name === "Pro" ? "primary" : "default"}>Book Demo</ButtonPricing>
      </div>
    </div>
  );
};

export default PricingCard;
