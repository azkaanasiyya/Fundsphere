/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

const SwitchToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="mb-[41px] mt-[40px] flex items-center space-x-2">
      <span className={billingCycle === 'monthly' ? 'text-base text-primary-500' : 'text-neutral-200'}>Monthly</span>
      <div
        className="relative h-8 w-16 cursor-pointer rounded-full bg-gray-300"
        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
      >
        <div
          className={`absolute left-1 top-1 h-6 w-6 transform rounded-full bg-white shadow-md transition-transform 
            ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}
        ></div>
      </div>
      <span className={billingCycle === 'yearly' ? 'text-base text-primary-500' : 'text-neutral-200'}>Yearly</span>
    </div>
  );
};

export default SwitchToggle;
