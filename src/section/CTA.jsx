import pattern from "../assets/patternCTA.svg";

export default function CTA() {
    return (
      <section className="container relative z-10 max-w-[1200px] bg-primary-500 text-white text-center py-[48px] px-[120px] rounded-[24px] mx-auto shadow-lg -mb-32" id="cta" style={{backgroundImage: `url(${pattern})`}}>
        <div className="w-full max-w-[504px] mx-auto flex flex-col items-center gap-[24px]">
          <h1 className="text-4xl md:text-5xl tracking-wide font-bold mb-4">
            Get started today for better future finance
          </h1>
          <p className="text-lg md:text-[lg] text-neutral-50 mb-[8px]">
            Fundsphere is a compass for business leaders, scale with checking and savings accounts, custom tools, and access to our investor network.
          </p>
          
          <div className="relative w-[412px]">
            <input
                type="email"
                placeholder="Your work email"
                className="w-full rounded-full border border-neutral-100 
                        px-4 py-[4px] pr-[160px] pl-[32px] h-[64px] 
                        bg-white placeholder-neutral-300 text-base 
                        focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2
                                flex items-center justify-center
                                w-[148px] h-[56px] rounded-full
                                bg-primary-500 text-white text-base font-medium
                                hover:bg-primary-400 transition-all">
                Get Started
            </button>
            </div>

        </div>
      </section>
    );
  }
  