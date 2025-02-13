import { useState } from "react";
import Headline from "../components/Headline";

const pricingPlans = {
  monthly: [
    { name: "Basic", price: 199, desc: "Kickstart product research in your business at no cost." ,features: ["Unlimited workspace", "Access to RestAPI"] },
    { name: "Pro", price: 250, desc: "Fuel your product workflow with more advanced research features", features: ["Unlimited workspace", "Access to RestAPI", "Priority Customer Support", "Real-Time Analytics"] },
    { name: "Enterprises", price: 499, desc: "Scale product research and learning across your company.", features: ["Unlimited workspace", "Access to RestAPI", "Priority Customer Support", "Real-Time Analytics", "Data Export Capabilities", "Advanced Security", "Multi-User Access"] }
  ],
  yearly: [
    { name: "Basic", price: 1999, desc: "Kickstart product research in your business at no cost.",features: ["Unlimited workspace", "Access to RestAPI"] },
    { name: "Pro", price: 2500, desc: "Fuel your product workflow with more advanced research features", features: ["Unlimited workspace", "Access to RestAPI", "Priority Customer Support", "Real-Time Analytics"] },
    { name: "Enterprises", price: 4999, desc: "Scale product research and learning across your company.", features: ["Unlimited workspace", "Access to RestAPI", "Priority Customer Support", "Real-Time Analytics", "Data Export Capabilities", "Advanced Security", "Multi-User Access"] }
  ]
};

export default function Plans() {
    const [billingCycle, setBillingCycle] = useState("monthly");

    return (
      <div id="plans" className="plans-section py-10 px-5 lg:py-[80px] lg:px-[120px] bg-white flex flex-col items-center text-center">
        <div className="container max-w-[1200px] flex flex-col items-center">
        <div className="flex flex-col items-center">
          < Headline
            tag="PRICING PLAN"
            title="Choose Package"                
            description="Join our pro features for unlimited without any contract and cancel anytime."
        />

        <div className="flex items-center space-x-2 mb-[40px] mt-[40px]">
          <span className={billingCycle === "monthly" ? "text-base text-primary-500" : "text-neutral-200"}>Monthly</span>
          <div className="relative w-16 h-8 bg-gray-300 rounded-full cursor-pointer" onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly") }>
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${billingCycle === "yearly" ? "translate-x-8" : "translate-x-0"}`}></div>
          </div>
          <span className={billingCycle === "yearly" ? "text-base text-primary-500" : "text-neutral-200"}>Yearly</span>
        </div>
        </div>
        
        
        <div className="grid md:grid-cols-3 gap-[32px]">
          {pricingPlans[billingCycle].map((plan, index) => (
            <div key={index} className={`py-[32px] px-[24px] lg:px-[40px] rounded-[24px] flex flex-col border border-primary-500 justify-between gap-[40px] ${plan.name === "Pro" ? "bg-neutral-500 text-white" : "bg-neutral-50 text-neutral-500"}`}>
              <div className="pricing-desc">
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
              <div className="pricing-book">
                <p className={`text-6xl font-bold mb-[24px] ${plan.name === "Pro" ? "text-white" : "text-primary-500"}`}> ${plan.price} <span className="text-base font-normal text-neutral-200">/ {billingCycle}</span></p>
                <button className={`w-full py-[8px] h-[56px] rounded-full font-medium ${plan.name === "Pro" ? "bg-primary-500 text-white" : "border border-primary-500 text-primary-500"}`}>
                  Book Demo
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>
    
      </div>
    );
}
