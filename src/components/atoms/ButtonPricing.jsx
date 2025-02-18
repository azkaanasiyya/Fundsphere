/* eslint-disable react/prop-types */
const buttonPricing = ({ children, variant = 'default', onClick }) => {
  const baseStyles = 'w-full py-[8px] h-[56px] rounded-full font-medium transition';
  const variants = {
    default: 'border border-primary-500 text-primary-500',
    primary: 'bg-primary-500 text-white',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default buttonPricing;
