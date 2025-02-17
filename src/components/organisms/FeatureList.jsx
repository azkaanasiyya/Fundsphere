/* eslint-disable react/prop-types */
import FeatureCard from "../molecules/FeatureCard.jsx";

const FeatureList = ({ features, showMore }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] mx-auto">
      {features.slice(0, showMore ? features.length : 2).map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureList;
