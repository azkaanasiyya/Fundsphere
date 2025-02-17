/* eslint-disable react/prop-types */
const ArticleCard = ({ image, title, date }) => {
    return (
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
          <img src={image} alt={title} className="object-cover rounded-2xl w-full" />
        </div>
  
        <div className="bg-white rounded-[12px] py-[8px] px-[24px] 
                        md:p-[16px] lg:p-[24px] text-left flex flex-col 
                        flex-grow justify-between w-full">
          <h3 className="text-neutral-500 text-xl font-medium mb-4">{title}</h3>
          <p className="text-neutral-300 text-base">{date}</p>
        </div>
      </div>
    );
  };
  
  export default ArticleCard;
  