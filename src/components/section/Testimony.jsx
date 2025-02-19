import Headline from '../atoms/Headline';
import testimonials from '../../data/testimonials';
import TestimonialList from '../organisms/testimonialList';
import StarsRating from '../atoms/starsRating';
import { useState } from 'react';
import Button from '../atoms/Button';

export default function Testimony() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      id="testimony"
      className="testimonial-section flex flex-col items-center bg-white px-[20px] pb-[64px] pt-[64px] lg:px-[120px] lg:pb-[104px]"
    >
      <div className="container flex max-w-[1200px] flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-6">
          <Headline
            tag="TESTIMONY"
            title="What others are saying about Us"
            description="Join hundreds of companies embracing Strategic Finance with Fundsphere."
          />

          <StarsRating rating="4.9" source="REVIEW FROM TRUSTPILOT" />
        </div>

        <TestimonialList testimonials={testimonials} showAll={showAll} />

        <Button onClick={() => setShowAll(!showAll)}>{showAll ? 'See Less' : 'Read More Article'}</Button>
      </div>
    </div>
  );
}
