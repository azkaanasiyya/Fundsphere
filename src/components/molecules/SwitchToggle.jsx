/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

const SwitchToggle = ({ billingCycle, setBillingCycle }) => {
    return (
      <div className="flex items-center space-x-2 mb-[40px] mt-[40px]">
        <span className={billingCycle === "monthly" ? "text-base text-primary-500" : "text-neutral-200"}>
          Monthly
        </span>
        <div
          className="relative w-16 h-8 bg-gray-300 rounded-full cursor-pointer"
          onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
        >
          <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform 
            ${billingCycle === "yearly" ? "translate-x-8" : "translate-x-0"}`}>
          </div>
        </div>
        <span className={billingCycle === "yearly" ? "text-base text-primary-500" : "text-neutral-200"}>
          Yearly
        </span>
      </div>
    );
  };
  
  export default SwitchToggle;
  