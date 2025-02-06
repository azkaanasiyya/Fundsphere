import features1 from "../assets/features1.svg";
import features2 from "../assets/features2.svg";
import { useState } from "react";

export default function Features() {
    const [showMore, setShowMore] = useState(false);

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
    ];

    const moreFeatures = [
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

    return (
        <section className="features-section py-[80px] px-[120px] bg-white flex flex-col items-center text-center">
            <div className="container max-w-[1200px] flex flex-col items-center">
            <div className="headline flex flex-col items-center w-full max-w-[479px]">
                <span className="mb-[16px] inline-block rounded-full bg-indigo-100 px-[16px] py-[8px] text-sm font-normal text-primary-500">
                    FEATURES
                </span>
                <h2 className="mb-[16px] text-5xl font-bold tracking-wide text-neutral-500">Features designed for you</h2>
                <p className="text-neutral-300 mt-2 text-lg">
                    Growth-accelerating products for startups, ecommerce stores, angel investors, & more.
                </p>
            </div>

            <div className="mt-[56px] grid grid-cols-1 md:grid-cols-2 gap-[32px] mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} />
                ))}

                {showMore &&
                    moreFeatures.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
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

function FeatureCard({ feature }) {
    return (
        <div className="p-6 bg-neutral-50 rounded-lg text-left flex flex-col justify-between">
            <div className="flex flex-col">
                <h3 className="text-neutral-500 text-[32px] font-bold">{feature.title}</h3>
                <p className="text-neutral-300 mt-2 mb-[32px] text-lg">{feature.description}</p>
            </div>
            <img src={feature.image} alt="feature" className="mt-4 rounded-lg" />
        </div>
    );
}
