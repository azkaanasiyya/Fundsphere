import features1 from "../assets/features1.svg";
import features2 from "../assets/features2.svg";
import { useState } from "react";

const features = [
    {
        title: "Pay with Fundsphere, quick, simple and easy",
        description: "Use Fundsphere to pay to a merchant and enjoy optimal payment user experience.",
        image: features2, 
    },
    {
        title: "Bank-level Security",
        description: "Personal information is encrypted and protected by industry standard banking security.",
        image: features1,
    },
    {
        title: "Global Payments",
        description: "Send and receive payments worldwide with minimal fees and fast transactions.",
        image: features1,
    },
    {
        title: "Seamless Integration",
        description: "Easily integrate with any platform to optimize your payment experience.",
        image: features2,
    },
];

export default function Features() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="features" className="features-section py-[80px] px-[120px] bg-white flex flex-col items-center text-center">
            <div className="container max-w-[1200px] flex flex-col items-center">
            <div className="headline flex flex-col items-center w-full max-w-[479px]">
                <span className="mb-[16px] inline-block rounded-full bg-additional-purple px-[16px] py-[8px] text-sm font-normal text-primary-500">
                    FEATURES
                </span>
                <h2 className="mb-[16px] text-5xl font-bold tracking-wide text-neutral-500">Features designed for you</h2>
                <p className="text-neutral-300 mt-2 text-lg">
                    Growth-accelerating products for startups, ecommerce stores, angel investors, & more.
                </p>
            </div>

            <div className="mt-[56px] grid grid-cols-1 lg:grid-cols-2 gap-[32px] mx-auto">
                {features.slice(0, showMore ? features.length : 2).map((features, index) => (
                    <div key={index} className="py-[32px] px-[40px] bg-neutral-50 rounded-[24px] text-left flex flex-col justify-between">
                        <div className="flex flex-col">
                            <h3 className="text-neutral-500 text-[32px] font-bold">{features.title}</h3>
                            <p className="text-neutral-300 mt-2 mb-[32px] text-lg">{features.description}</p>
                        </div>
                        <img src={features.image} alt="feature" className="mt-4 rounded-lg" />
                    </div>
                ))}
            </div>

            <button
                onClick={() => setShowMore(!showMore)}
                className="mt-[56px] px-[32px] py-[8px] h-[56px] bg-primary-500 font-medium text-white rounded-full text-base hover:bg-primary-400 transition"
            >
                {showMore ? "See Less" : "See More Features"}
            </button>
            </div>
        </section>
    );
}

