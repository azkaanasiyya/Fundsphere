// eslint-disable-next-line react/prop-types
const Button = ({ onClick, children }) => {
    return (
      <button
        onClick={onClick}
        className="px-[32px] py-[8px] h-[56px] bg-primary-500 
                text-white rounded-full font-medium 
                hover:bg-primary-400 transition"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  