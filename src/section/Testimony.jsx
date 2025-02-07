import { useState } from "react";
import testimony1 from "../assets/testimonial1.svg";
import testimony2 from "../assets/testimonial2.svg";

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
        <div id="testimony" className="testimonial-section pt-[64px] pb-[104px] px-[120px] min-h-screen">
            <div className="container max-w-[1200px] flex flex-col items-center gap-[56px]">
                <div className="headline-wrapper flex flex-col items-center gap-[24px]">
                    <div className="headline w-[370px] flex flex-col items-center gap-[16px]">
                        <span className="mb-[16px] inline-block rounded-full bg-indigo-100 px-[16px] py-[8px] text-sm font-normal text-primary-500">
                            TESTIMONY
                        </span>
                        <h2 className="text-5xl font-bold tracking-wide">What others are saying about Us</h2>
                        <p className="text-neutral-300 text-lg text-center font-normal">
                            Join hundreds of companies embracing Strategic Finance with Fundsphere.
                        </p>
                    </div>

                    <div className="review flex flex-col items-center gap-[8px]">
                        <div className="stars flex flex-row items-center">
                             <span className="text-yellow-400 text-lg mr-[12px]">⭐⭐⭐⭐⭐</span>
                            <span className="text-lg font-medium">4.9</span>
                        </div>
                        <p className="text-lg font-normal text-neutral-300">REVIEW FROM TRUSTPILOT</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[32px]">
                        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
                            <div key={index} className="bg-neutral-50 rounded-[24px] py-[32px] px-[40px] flex flex-col gap-[32px]">
                                <img src={testimonial.image} alt={testimonial.name} className="w-[504px] h-[320px]" />
                                <div className="flex flex-col justify-between flex-grow gap-[24px]">
                                    <h3 className="text-[32px] font-bold text-neutral-500">"{testimonial.feedback}"</h3>
                                    <div className="flex flex-col gap-[4px]">
                                        <p className="text-xl font-medium text-neutral-500">{testimonial.name}</p>
                                        <div className="flex flex-row gap-[4px]">
                                            <p className="text-lg font-normal text-neutral-300">{testimonial.role}</p>
                                            <span className="text-lg font-bold text-neutral-300">{testimonial.bold}</span>
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