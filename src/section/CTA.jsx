import pattern from "../assets/patternCTA.svg";

export default function CTA() {
    return (
      <section className="container relative z-10 max-w-[335px] md:max-w-[735px] lg:max-w-[1200px] bg-primary-500 text-white text-center py-[48px] px-[16px] lg:px-[120px] rounded-[24px] mx-auto shadow-lg -mb-44" id="cta" style={{backgroundImage: `url(${pattern})`}}>
        <div className="w-full max-w-[504px] mx-auto flex flex-col items-center gap-[24px]">
          <h1 className="text-[32px] lg:text-5xl tracking-wide font-bold lg:mb-4">
            Get started today for better future finance
          </h1>
          <p className="text-base lg:text-[lg] text-neutral-50 mb-[8px]">
            Fundsphere is a compass for business leaders, scale with checking and savings accounts, custom tools, and access to our investor network.
          </p>
          
          <div className="relative w-[303px] lg:w-[412px]">
            <input
                type="email"
                placeholder="Your work email"
                className="w-full rounded-full border border-neutral-100 
                        px-4 py-[4px] pr-[160px] pl-[32px] h-[56px] lg:h-[64px] 
                        bg-white placeholder-neutral-300 text-sm lg:text-base 
                        focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2
                                flex items-center justify-center
                                w-[148px] h-[48px] lg:h-[56px] rounded-full
                                bg-primary-500 text-white text-base font-medium
                                hover:bg-primary-400 transition-all">
                Get Started
            </button>
            </div>

        </div>
      </section>
    );
  }
  