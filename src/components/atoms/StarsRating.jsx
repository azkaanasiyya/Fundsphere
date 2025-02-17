/* eslint-disable react/prop-types */
const StarsRating = ({ rating, source }) => {
    return (
      <div className="flex flex-col items-center gap-[8px]">
        <div className="flex flex-row items-center">
          <span className="text-yellow-400 text-lg mr-[12px]">⭐⭐⭐⭐⭐</span>
          <span className="text-lg font-medium">{rating}</span>
        </div>
        <p className="text-lg font-normal text-neutral-300">{source}</p>
      </div>
    );
  };
  
  export default StarsRating;
  