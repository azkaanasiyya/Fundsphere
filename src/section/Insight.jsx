import { useState } from "react";
import article1 from "../assets/article1.svg";
import article2 from "../assets/article2.svg";
import article3 from "../assets/article3.svg";
import pattern from "../assets/patternInsight.svg";
import Headline from "../components/Headline";

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
      <div id="insight" className="insight-section py-[32px] px-[20px] lg:py-[120px] lg:px-[119px] flex flex-col items-center bg-neutral-50 min-h-screen" style={{ backgroundImage: `url(${pattern})` }}>
        <div className="container max-w-[1201px] flex flex-col gap-[72px] items-center">

            <Headline
                tag="INSIGHT"
                title="Magazine"                
                description="Find growth insight in our blog."
            />
            
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-[32px]">
                {articles.slice(0, showAll ? articles.length : 3).map((article, index) => (
                    <div key={index} className="flex flex-col gap-4 items-center">
                        <div className="bg-white rounded-[14px] shadow-lg overflow-hidden">
                            <img src={article.image} alt={article.title} className="lg:w-[379px] lg:h-[342px] object-cover rounded-xl" />
                        </div>

                        <div className="bg-white rounded-[12px] py-[8px] px-[24px] md-[16px] lg-[24px] text-left flex flex-col flex-grow justify-between">
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
