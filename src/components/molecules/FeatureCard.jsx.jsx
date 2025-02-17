/* eslint-disable react/prop-types */
const FeatureCard = ({ title, description, image }) => {
  return (
    <div
      className="flex flex-col justify-between 
                    gap-8 rounded-[24px] bg-neutral-50 p-[24px] 
                      text-left lg:px-[40px] lg:py-[32px]"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-[24px] font-bold leading-[28.8px] text-neutral-500 lg:text-[32px]">{title}</h3>
        <p className="text-base text-neutral-300 lg:text-lg">{description}</p>
      </div>
      <img src={image} alt="feature" className="h-[276px] w-full max-w-full rounded-lg object-cover lg:w-auto" />
    </div>
  );
};

export default FeatureCard;
