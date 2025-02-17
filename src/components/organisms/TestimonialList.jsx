/* eslint-disable react/prop-types */
import { useState } from "react";
import TestimonialCard from "../molecules/TestimonialCard";
import Button from "../atoms/Button";

const TestimonialList = ({ testimonials }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="flex flex-col items-center gap-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[32px]">
        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <Button onClick={() => setShowAll(!showAll)}>
        {showAll ? "See Less Article" : "Read More Article"}
      </Button>
    </div>
  );
};

export default TestimonialList;
