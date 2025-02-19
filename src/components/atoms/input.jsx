/* eslint-disable react/prop-types */
export default function Input({ type = "text", placeholder, className }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`h-[56px] w-full rounded-full border border-neutral-100 
                    bg-white px-4 py-[4px] pl-[32px] pr-[160px] 
                    text-sm placeholder-neutral-300 focus:outline-none 
                    lg:h-[64px] lg:text-base ${className}`}
      />
    );
  }
  