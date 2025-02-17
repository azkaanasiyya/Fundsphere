/* eslint-disable react/prop-types */
import TestimonialCard from "../molecules/TestimonialCard";

const TestimonialList = ({ testimonials, showAll }) => {

  return (
    <div className="flex flex-col items-center gap-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[32px]">
        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
