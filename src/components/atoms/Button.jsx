// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="h-[56px] rounded-full bg-primary-500 px-[32px] 
                py-[8px] font-medium text-white 
                transition hover:bg-primary-400"
    >
      {children}
    </button>
  );
};

export default Button;
