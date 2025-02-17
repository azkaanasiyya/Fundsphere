/* eslint-disable react/prop-types */
import TestimonialCard from '../molecules/TestimonialCard';

const TestimonialList = ({ testimonials, showAll }) => {
  return (
    <div className="flex flex-col items-center gap-[40px]">
      <div className="mx-auto grid grid-cols-1 gap-[32px] md:grid-cols-2">
        {testimonials.slice(0, showAll ? testimonials.length : 2).map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialList;
