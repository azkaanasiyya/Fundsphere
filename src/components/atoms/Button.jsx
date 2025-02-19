// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children, className, variant = "primary" }) => {
  const baseStyles = "h-14 rounded-full px-8 py-2 font-medium transition";
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-400",
    pricing: "w-full h-[56px] bg-primary-500 text-white hover:bg-primary-400",
    default: "w-full h-[56px] border border-primary-500 text-primary-500 hover:bg-primary-100", 
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
