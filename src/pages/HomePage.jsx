import heroImage from '../assets/hero.svg';

function HomePage() {
  return (
    <div className="home-page">
      <div className="container max-w-[1200px]">
        <div className="hero flex flex-row items-center justify-between">
          <div className="hero-image pb-[104px] pt-32">
            <img src={heroImage} alt="hero" />
          </div>
          <div className="hero-content flex w-[482px] flex-col gap-[16px] bg-white px-4 py-12">
            <section className="flex h-full flex-col">
              <div className="mx-auto flex h-full max-w-full flex-col">
                <div className="w-full flex-grow">
                  <span className="mb-4 inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
                    BEST CHOICE
                  </span>
                  <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
                    Future strategic finance for <span className="text-indigo-600">Entrepreneurs</span>
                  </h1>
                  <p className="mb-6 text-base text-gray-600 sm:text-lg">
                    Scale with checking and savings accounts, custom tools, and access to our investor network.
                  </p>
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                    <input
                      type="email"
                      placeholder="Your work email"
                      className="w-full flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none sm:w-auto"
                    />
                    <button className="rounded-md bg-indigo-600 px-6 py-2 font-medium text-white transition-colors hover:bg-indigo-700">
                      Get Started
                    </button>
                  </div>
                </div>
                <div className="flex w-full justify-center md:w-1/2 md:justify-end">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-800">10%</h2>
                      <p className="mt-1 text-sm text-gray-500">Beneficial Cashback</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-800">7M</h2>
                      <p className="mt-1 text-sm text-gray-500">Satisfied Customer</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-gray-800">40+</h2>
                      <p className="mt-1 text-sm text-gray-500">Country Available</p>
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

export default HomePage;
