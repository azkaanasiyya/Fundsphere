import heroImage from '../assets/hero.svg';

function Hero() {
  return (
    <div id='hero' className="hero-section">
      <div className="container max-w-[1200px] ">
        <div className="hero flex flex-row items-center justify-between">
          <div className="hero-image pb-[104px] pt-52">
            <img src={heroImage} alt="hero" />
          </div>
          <div className="hero-content flex w-[482px] flex-col gap-[16px] bg-white px-4 py-12">
            <section className="flex h-full flex-col">
              <div className="mx-auto ml-[73.92px] flex h-full max-w-full flex-col gap-[64px]">
                <div className="w-full flex-grow">
                  <span className="mb-[32px] inline-block rounded-full bg-indigo-100 px-[16px] py-[8px] text-sm font-normal text-primary-500">
                    BEST CHOICE
                  </span>
                  <h1 className="mb-[16px] w-[480px] h-[216px] text-6xl font-bold text-neutral-500 leading-[72px] tracking-wide">
                    Future strategic finance for <span className="text-primary-500">Entrepreneurs</span>
                  </h1>

                  <p className="mb-[32px] text-base text-neutral-300 sm:text-lg">
                    Scale with checking and savings accounts, custom tools, and access to our investor network.
                  </p>
                  <div className="relative w-full max-w-md">
                    <input
                      type="email"
                      placeholder="Your work email"
                      className="
                        w-full rounded-full border border-neutral-100 px-4 py-[4px] 
                        pr-[4px] pl-[32px] h-[64px] bg-white placeholder-neutral-300 text-base 
                        focus:outline-none
                      "
                    />
                    <button
                      className="
                        absolute right-1 top-1 bottom-1
                        flex items-center justify-center
                        px-[32px] py-[8px] h-[56px]
                        w-[153px] rounded-full
                        bg-primary-500 text-white text-base font-medium
                        hover:bg-primary-400 transition-all
                      "
                    >
                      Get Started
                    </button>
                  </div>

                </div>
                <div className="flex w-full justify-center">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <h2 className="text-5xl font-bold text-primary-500">10%</h2>
                      <p className="mt-1 text-base text-neutral-200">Beneficial Cashback</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-5xl font-bold text-primary-500">7M</h2>
                      <p className="mt-1 text-base text-neutral-200">Satisfied Customer</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-5xl font-bold text-primary-500">40+</h2>
                      <p className="mt-1 text-base text-neutral-200">Country Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
