import { useState } from "react";
import testimony1 from "../assets/testimonial1.svg";
import testimony2 from "../assets/testimonial2.svg";
import Headline from "../components/Headline";

const testimonials = [
    {
        name: "Maria Evelyn",
        role: "Project Manager at",
        bold: "Stripe",
        image: testimony1,
        feedback:
          "Simple, seamless processing. Payroll reduces the number of third parties we work with.",
      },
      {
        name: "John Smith",
        role: "Operations Manager at",
        bold: "Ebay",
        image: testimony2,
        feedback: "Simplified processes, reduced costs. Highly recommend",
      },
      {
        name: "Emma Wilson",
        role: "Finance Lead at",
        bold: "Shopify",
        image: testimony2,
        feedback: "Fundsphere helped us scale efficiently. Great experience overall!",
      },
      {
        name: "David Brown",
        role: "CFO at",
        bold: "Amazon",
        image: testimony1,
        feedback: "Our financial operations are now streamlined and more transparent.",
      },
];

export default function Testimony() {
    const [showAll, setShowAll] = useState(false);

    return (
        <div id="testimony" className="testimonial-section pt-[64px] pb-[64px] px-[20px] lg:pb-[104px] lg:px-[120px] flex flex-col items-center">
            <div className="container max-w-[1200px] flex flex-col items-center gap-[56px]">
                <div className="headline-wrapper flex flex-col items-center gap-[24px]">
                    <Headline 
                        tag="TESTIMONY"
                        title="What others are saying about Us"
                        description="Join hundreds of companies embracing Strategic Finance with Fundsphere."
                    />

                    <div className="review flex flex-col hidden lg:flex items-center gap-[8px]">
                        <div className="stars flex flex-row items-center">
                             <span className="text-yellow-400 text-lg mr-[12px]">⭐⭐⭐⭐⭐</span>
                            <span className="text-lg font-medium">4.9</span>
                        </div>
                        <p className="text-lg font-normal text-neutral-300">REVIEW FROM TRUSTPILOT</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[32px]">
                        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
                            <div key={index} className="bg-neutral-50 rounded-[24px] p-[16px] lg:py-[32px] lg:px-[40px] flex flex-col gap-[32px]">
                                <img src={testimonial.image} alt={testimonial.name} className="w-full max-w-full h-[360px] object-cover lg:w-[504px]" />
                                <div className="flex flex-col justify-between flex-grow gap-[24px]">
                                    <h3 className="text-xl lg:text-[32px] font-bold text-neutral-500">"{testimonial.feedback}"</h3>
                                    <div className="flex flex-col gap-[4px]">
                                        <p className="text-base lg:text-xl font-medium text-neutral-500">{testimonial.name}</p>
                                        <div className="flex flex-row gap-[4px]">
                                            <p className="text-sm lg:text-lg font-normal text-neutral-300">{testimonial.role}</p>
                                            <span className="text-sm lg:text-lg font-bold text-neutral-300">{testimonial.bold}</span>
                                        </div>                                        
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-[32px] py-[8px] h-[56px] bg-primary-500 text-white rounded-full font-medium hover:bg-primary-400 transition"
                    >
                        {showAll ? "See Less Article" : "Read More Article"}
                    </button>
                </div>
            </div>
        </div>
    )
}