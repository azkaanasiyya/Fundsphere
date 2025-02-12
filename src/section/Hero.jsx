import card from "../assets/cardImage.svg";
import cost from "../assets/costImage.svg";
import insert from "../assets/insertImage.svg";
import rectangle from "../assets/rectangle.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

function Hero() {
  return (
    <div id="hero" className="hero-section relative flex flex-col items-center">
      <div className="container max-w-[1200px] flex flex-col items-center px-5 pt-10 pb-8 lg:px-[120px] lg:pt-[64px] lg:pb-[104px]">
        
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-12">
          
        <div className="hero-content flex flex-col items-start w-full max-w-[335px] lg:max-w-[482px] text-left">
          <div className="headline flex flex-col items-start w-full max-w-[479px]">
            <span className="inline-flex items-center justify-center rounded-full bg-additional-purple px-4 py-2 text-sm font-medium text-primary-500">
              BEST CHOICE
            </span>
            <h1 className="mt-4 text-[32px] md:text-[40px] lg:text-5xl font-bold tracking-wide text-neutral-500 leading-[38.4px] md:leading-[48px] lg:leading-[1.2]">
              Future strategic finance for <span className="text-primary-500">Entrepreneurs</span>
            </h1>

          </div>

          <p className="text-neutral-300 mt-4 text-base md:text-lg lg:text-xl">
            Scale with checking and savings accounts, custom tools, and access to our investor network.
          </p>


        <div className="relative w-full max-w-[335px] lg:max-w-md mx-auto lg:mx-0 mt-6">
          <input
            type="email"
            placeholder="Your work email"
            className="w-full rounded-full border border-neutral-100 px-4 py-1 lg:py-4 h-[56px] lg:h-[64px] bg-white placeholder-neutral-300 text-base focus:outline-none"
          />
          <button className="absolute right-1 top-1 bottom-1 flex items-center justify-center px-8 py-2 h-[48px] lg:h-[56px] w-[153px] rounded-full bg-primary-500 text-white text-base font-medium hover:bg-primary-400 transition-all">
            Get Started
          </button>
        </div>

        <div className="flex justify-center lg:justify-start mt-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">10%</h2>
              <p className="mt-1 text-sm lg:text-base text-neutral-200">Beneficial Cashback</p>
            </div>
            <div className="text-center">
              <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">7M</h2>
              <p className="mt-1 text-sm lg:text-base text-neutral-200">Satisfied Customer</p>
            </div>
            <div className="text-center">
              <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">40+</h2>
              <p className="mt-1 text-sm lg:text-base text-neutral-200">Country <br /> Available</p>
            </div>
          </div>
        </div>
      </div>


          <div className="hero-image relative w-full max-w-[335px] lg:max-w-[644px] flex flex-col hidden lg:flex items-center gap-8 -translate-x-32">
            <img src={rectangle} alt="Rectangle Pattern" className="absolute bottom-40 right-0 w-[608px]" />
            <img src={card} alt="Card" className="relative z-3 w-[369px]" />
            <div className="relative z-3 flex flex-row gap-8 items-start">
              <img src={cost} alt="Cost Reduction Graph" className="w-[299px] " />
              <img src={insert} alt="Insert Swipe" className="w-[263px]" />
            </div>
          </div>
        </div>

        <img src={right} alt="Right" className="absolute right-0 -bottom-12 -z-10 w-[250px] lg:w-[355px] hidden lg:block" />
        <img src={left} alt="Left" className="absolute left-0 -bottom-12 -z-10 w-[250px] lg:w-96 hidden lg:block" />

      </div>
    </div>
  );
}

export default Hero;
