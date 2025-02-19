import { useState } from 'react';
import Headline from '../atoms/Headline';
import Button from '../atoms/Button';
import features from '../../data/FeatureData';
import FeatureList from '../organisms/FeatureList';

export default function Features() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="features"
      className="features-section flex flex-col items-center bg-white px-[20px] py-[40px] text-center lg:px-[120px] lg:py-[80px]"
    >
      <div className="container flex max-w-[1200px] flex-col items-center gap-14">
        <Headline
          tag="FEATURES"
          title="Features designed for you"
          description="Growth-accelerating products for startups, ecommerce stores, angel investors, & more."
        />

        <FeatureList features={features} showMore={showMore}></FeatureList>

        <Button onClick={() => setShowMore(!showMore)}>{showMore ? 'See Less' : 'See More Features'}</Button>
      </div>
    </section>
  );
}
