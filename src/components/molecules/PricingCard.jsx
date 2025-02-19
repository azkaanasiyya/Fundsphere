/* eslint-disable react/prop-types */
import Button from '../atoms/Button';

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-[40px] 
                  rounded-[24px] border border-primary-500 px-[24px] 
                  py-[32px] lg:px-[40px] 
                  ${plan.name === 'Pro' ? 'bg-neutral-500 text-white' : 'bg-neutral-50 text-neutral-500'}`}
    >
      <div>
        <h3 className="mb-[8px] text-left text-[32px] font-bold">{plan.name}</h3>
        <p className="mb-[32px] max-w-[298.67px] text-left text-lg text-neutral-200">{plan.desc}</p>
        <ul>
          {plan.features.map((feature, i) => (
            <li key={i} className="mb-[16px] flex items-center space-x-2 text-left text-lg">
              <span className="text-blue-600">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={`mb-[24px] text-6xl font-bold ${plan.name === 'Pro' ? 'text-white' : 'text-primary-500'}`}>
          ${plan.price} <span className="text-base font-normal text-neutral-200">/ month</span>
        </p>
        <Button variant={plan.name === 'Pro' ? 'pricing' : 'default'}>Book Demo</Button>
      </div>
    </div>
  );
};

export default PricingCard;
