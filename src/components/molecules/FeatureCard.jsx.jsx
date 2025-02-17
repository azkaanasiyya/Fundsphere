/* eslint-disable react/prop-types */
const FeatureCard = ({ title, description, image }) => {
    return (
      <div className="p-[24px] lg:py-[32px] lg:px-[40px] 
                    bg-neutral-50 rounded-[24px] text-left flex 
                      flex-col gap-8 justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-neutral-500 text-[24px] leading-[28.8px] lg:text-[32px] font-bold">{title}</h3>
          <p className="text-neutral-300 text-base lg:text-lg">{description}</p>
        </div>
        <img 
          src={image} 
          alt="feature" 
          className="rounded-lg w-full max-w-full h-[276px] object-cover lg:w-auto"
        />
      </div>
    );
  };
  
  export default FeatureCard;
  