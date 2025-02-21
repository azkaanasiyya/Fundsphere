/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { X } from 'lucide-react';

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative flex w-full items-center justify-center gap-2 bg-neutral-500 px-6 py-2 text-sm text-white hidden md:flex">
      <span className="rounded-full bg-white px-3 py-1 text-[10px] font-bold text-neutral-500">NEW</span>
      <p className="text-center text-sm text-neutral-200">We are excited to announce our brand new product,</p>
      <a href="#" className="text-sm font-normal text-white">
        Learn More.
      </a>
      <button className="absolute right-4" onClick={() => setIsVisible(false)}>
        <X size={18} />
      </button>
    </div>
  );
}
