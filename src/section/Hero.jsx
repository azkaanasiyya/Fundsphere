import heroImage from '../assets/hero.svg';

function Hero() {
  return (
    <div className="home-page">
      <div className="container max-w-[1200px] ">
        <div className="hero flex flex-row items-center justify-between">
          <div className="hero-image pb-[104px] pt-52">
            <img src={heroImage} alt="hero" />
          </div>
          <div className="hero-content flex w-[482px] flex-col gap-[16px] bg-white px-4 py-12">
            <section className="flex h-full flex-col">
              <div className="mx-auto ml-[73.92px] flex h-full max-w-full flex-col gap-[32px]">
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
                  <div className="flex w-full max-w-md items-center rounded-full border border-gray-300 px-4 py-2">
                    <input
                      type="email"
                      placeholder="Your work email"
                      className="
                        flex-1
                        border-none
                        placeholder:text-gray-500
                        text-base
                      "
                    />
                    <button
                      className="
                        ml-2
                        rounded-full
                        bg-primary-500
                        px-6
                        py-2
                        text-base
                        text-white
                        hover:bg-primary-400
                        transition-colors
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
