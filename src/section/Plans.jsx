/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Headline from '../components/atoms/Headline';
import pricingPlans from '../data/pricingPlans';
import SwitchToggle from '../components/molecules/SwitchToggle';
import PricingList from '../components/organisms/PricingList';

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div
      id="plans"
      className="plans-section flex flex-col items-center bg-white px-5 py-10 text-center lg:px-[120px] lg:py-[80px]"
    >
      <div className="container flex max-w-[1200px] flex-col items-center">
        <div className="flex flex-col items-center">
          <Headline
            tag="PRICING PLAN"
            title="Choose Package"
            description="Join our pro features for unlimited without any contract and cancel anytime."
          />
          <SwitchToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
        </div>

        <PricingList plans={pricingPlans[billingCycle]} />

      </div>
    </div>
  );
}
