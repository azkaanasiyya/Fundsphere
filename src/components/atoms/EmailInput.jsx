// eslint-disable-next-line react/prop-types
export default function EmailInput({ placeholder, buttonText }) {
  return (
    <div className="relative ">
      <input
        type="email"
        placeholder={placeholder}
        className="h-[56px] w-full rounded-full border 
                    border-neutral-100 bg-white px-4 py-[4px] pl-[32px] pr-[160px] 
                    text-sm placeholder-neutral-300 focus:outline-none lg:h-[64px] 
                    lg:text-base"
      />
      <button
        className="absolute bottom-1 right-1 top-1 
                                flex h-[48px] max-w-[153px] 
                                items-center justify-center rounded-full bg-primary-500 px-8 
                                py-2 text-base font-medium 
                                text-white transition-all hover:bg-primary-400 
                                lg:h-[56px]"
      >
        {buttonText}
      </button>
    </div>
  );
}
