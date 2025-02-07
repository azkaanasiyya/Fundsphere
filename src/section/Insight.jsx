import { useState } from "react";
import article1 from "../assets/article1.svg";
import article2 from "../assets/article2.svg";
import article3 from "../assets/article3.svg";
import pattern from "../assets/patternInsight.svg";

const articles = [
  { title: "Online Payment Failure: Why it Happens and How to Avoid it.", date: "January 4, 2024", image: article1 },
  { title: "Some of strategies for Quickly Expanding Your Business.", date: "February 8, 2024", image: article2 },
  { title: "Business strategy converging into a new approach for solving business.", date: "January 16, 2024", image: article3 },
  { title: "Effective Marketing Techniques for Startups.", date: "March 10, 2024", image: article3 },
  { title: "How AI is Changing the Future of Business.", date: "April 5, 2024", image: article2 },
  { title: "Maximizing Productivity in Remote Work Environments.", date: "May 12, 2024", image: article1 }
];

export default function Insight() {
    const [showAll, setShowAll] = useState(false); 

    return (
      <div id="insight" className="insight-section py-[120px] px-[119px] bg-neutral-50 min-h-screen" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="container max-w-[1201px] flex flex-col gap-[72px] items-center">
            <div className="headline flex flex-col items-center gap-[16px]">
                <span className="mb-[16px] inline-block rounded-full bg-indigo-100 px-[16px] py-[8px] text-sm font-normal text-primary-500">
                    INSIGHT
                </span>
                <h1 className="text-5xl font-bold mb-4">Magazine</h1>
                <p className="text-neutral-300 mb-6 text-center text-lg">
                    Find growth insight in our blog.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-[32px]">
                {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
                    <div key={index} className="flex flex-col gap-4 items-center">
                        <div className="bg-white rounded-[14px] shadow-lg overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-[379px] h-[342px] object-cover rounded-xl" />
                        </div>

                        <div className="bg-white rounded-[12px] py-[8px] px-[24px] text-left flex flex-col justify-between">
                            <h3 className="text-neutral-500 text-xl font-medium mb-4">{article.title}</h3>
                            <p className="text-neutral-300 text-base">{article.date}</p>
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
    );
}
