/* eslint-disable react/prop-types */
const articleCard = ({ image, title, date }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="w-full overflow-hidden rounded-2xl bg-white shadow-lg">
        <img src={image} alt={title} className="w-full rounded-2xl object-cover" />
      </div>

      <div
        className="flex w-full flex-grow flex-col 
                        justify-between rounded-[12px] bg-white px-[24px] py-[8px] 
                        text-left md:p-[16px] lg:p-[24px]"
      >
        <h3 className="mb-4 text-xl font-medium text-neutral-500">{title}</h3>
        <p className="text-base text-neutral-300">{date}</p>
      </div>
    </div>
  );
};

export default articleCard;
