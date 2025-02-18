/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const testimonialCard = ({ image, name, role, bold, feedback }) => {
  return (
    <div className="flex flex-col gap-[32px] rounded-[24px] bg-neutral-50 p-[16px] lg:px-[40px] lg:py-[32px]">
      <img src={image} alt={name} className="h-[360px] w-full max-w-full object-cover lg:w-[504px]" />
      <div className="flex flex-grow flex-col justify-between gap-[24px]">
        <h3 className="text-xl font-bold text-neutral-500 lg:text-[32px] lg:leading-[38.4px]">"{feedback}"</h3>
        <div className="flex flex-col gap-[4px]">
          <p className="text-base font-medium text-neutral-500 lg:text-xl">{name}</p>
          <div className="flex flex-row gap-[4px]">
            <p className="text-sm font-normal text-neutral-300 lg:text-lg">{role}</p>
            <span className="text-sm font-bold text-neutral-300 lg:text-lg">{bold}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testimonialCard;
