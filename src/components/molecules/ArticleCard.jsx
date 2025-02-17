/* eslint-disable react/prop-types */
const ArticleCard = ({ image, title, date }) => {
    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="bg-white rounded-[14px] shadow-lg overflow-hidden">
          <img src={image} alt={title} className="lg:w-[379px] lg:h-[342px] object-cover rounded-xl" />
        </div>
  
        <div className="bg-white rounded-[12px] py-[8px] px-[24px] md:p-[16px] lg:p-[24px] text-left flex flex-col flex-grow justify-between">
          <h3 className="text-neutral-500 text-xl font-medium mb-4">{title}</h3>
          <p className="text-neutral-300 text-base">{date}</p>
        </div>
      </div>
    );
  };
  
  export default ArticleCard;
  