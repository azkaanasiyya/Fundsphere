// eslint-disable-next-line react/prop-types
export default function EmailInput({ placeholder, buttonText }) {
    return (
      <div className="relative ">
        <input
          type="email"
          placeholder={placeholder}
          className="w-full rounded-full border border-neutral-100 
                    px-4 py-[4px] pr-[160px] pl-[32px] h-[56px] lg:h-[64px] 
                    bg-white placeholder-neutral-300 text-sm lg:text-base 
                    focus:outline-none"
        />
        <button className="absolute right-1 top-1 bottom-1 
                                flex items-center justify-center 
                                px-8 py-2 h-[48px] lg:h-[56px] max-w-[153px] 
                                rounded-full bg-primary-500 text-white 
                                text-base font-medium hover:bg-primary-400 
                                transition-all">
          {buttonText}
        </button>
      </div>
    );
  }
  