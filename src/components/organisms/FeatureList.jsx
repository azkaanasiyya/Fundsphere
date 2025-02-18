/* eslint-disable react/prop-types */
import FeatureCard from '../molecules/featureCard.jsx.jsx';

const featureList = ({ features, showMore }) => {
  return (
    <div className="mx-auto grid grid-cols-1 gap-[32px] md:grid-cols-2">
      {features.slice(0, showMore ? features.length : 2).map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default featureList;
