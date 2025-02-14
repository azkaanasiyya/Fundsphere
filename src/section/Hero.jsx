import card from "../assets/cardImage.svg";
import cost from "../assets/costImage.svg";
import insert from "../assets/insertImage.svg";
import rectangle from "../assets/rectangle.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

function Hero() {
  return (
    <div id="hero" className="container max-w-[1200px] px-5 lg:px-0 mx-auto pt-10 pb-14 lg:pt-16 lg:pb-28">
      <div className="grid grid-cols-1 md:grid-cols-[53%_43%] justify-between items-center">
        
        <div className="relative w-full hidden md:block">
          <div className="absolute flex items-center inset-y-0 right-0">
            <img src={rectangle} alt="Background Pattern" />
          </div>
          <div className="relative flex flex-col gap-8">
            <div className="image1 mx-auto">
              <img src={card} alt="Card" className="w-[369px]" />
            </div>
            <div className="flex flex-row gap-8">
              <div>
                <img src={cost} alt="Cost Reduction Graph" className="w-[299px]" />
              </div>
              <div>
                <img src={insert} alt="Insert Swipe" className="w-[263px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col gap-6 lg:gap-8">
          <span className="self-start inline-block whitespace-nowrap rounded-full bg-additional-purple px-4 py-2 text-sm font-medium text-primary-500">
            BEST CHOICE
          </span>
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] md:text-[40px] lg:text-6xl font-bold tracking-wide text-neutral-500 leading-[38.4px] md:leading-[48px] lg:leading-[1.2]">
                Future strategic finance for <br />
                <span className="text-primary-500">Entrepreneurs</span>
              </h1>
              <p className="text-neutral-300 text-base md:text-lg lg:text-xl">
                Scale with checking and savings accounts, custom tools, and access to our investor network.
              </p>
            </div>
            
            <div className="relative w-full mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Your work email"
                className="w-full rounded-full border border-neutral-100 px-4 py-1 lg:py-4 h-[56px] lg:h-[64px] bg-white placeholder-neutral-300 text-sm lg:text-base focus:outline-none"
              />
              <button className="absolute right-1 top-1 bottom-1 flex items-center justify-center px-8 py-2 h-[48px] lg:h-[56px] w-[153px] rounded-full bg-primary-500 text-white text-base font-medium hover:bg-primary-400 transition-all">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="text-center flex flex-col gap-2">
                <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">10%</h2>
                <p className="text-sm lg:text-base text-neutral-200">Beneficial <br /> Cashback</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">7M</h2>
                <p className="text-sm lg:text-base text-neutral-200">Satisfied <br /> Customers</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h2 className="text-[32px] lg:text-5xl font-bold text-primary-500">40+</h2>
                <p className="text-sm lg:text-base text-neutral-200">Countries <br /> Available</p>
              </div>
          </div>
        </div>
      </div>

      <img src={right} alt="Right" className="absolute right-0 -bottom-40 -z-10 w-[250px] lg:w-[355px] hidden lg:block" />
      <img src={left} alt="Left" className="absolute left-0 -bottom-40 -z-10 w-[250px] lg:w-96 hidden lg:block" />
    </div>
  );
}

export default Hero;
