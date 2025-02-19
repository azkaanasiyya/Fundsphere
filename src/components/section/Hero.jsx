/* eslint-disable import/no-unresolved */
import card from '../../assets/cardImage.svg';
import cost from '../../assets/costImage.svg';
import insert from '../../assets/insertImage.svg';
import rectangle from '../../assets/rectangle.svg';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';
import EmailInput from '../molecules/emailInput';

function Hero() {
  return (
    <div id="hero" className="container mx-auto max-w-[1200px] px-5 pb-14 pt-10 lg:px-0 lg:pb-28 lg:pt-16">
      <div className="grid grid-cols-1 items-center justify-between md:grid-cols-[53%_43%]">
        <div className="relative hidden w-full md:block">
          <div className="absolute inset-y-0 right-0 flex items-center">
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
            <span className="inline-block self-start whitespace-nowrap rounded-full bg-additional-purple px-4 py-2 text-sm font-medium text-primary-500">
              BEST CHOICE
            </span>
            <div className="flex flex-col gap-4">
              <h1 className="text-[32px] font-bold leading-[38.4px] tracking-wide text-neutral-500 md:text-[40px] md:leading-[48px] lg:text-6xl lg:leading-[1.2]">
                Future strategic finance for <br />
                <span className="text-primary-500">Entrepreneurs</span>
              </h1>
              <p className="text-base text-neutral-300 md:text-lg lg:text-xl">
                Scale with checking and savings accounts, custom tools, and access to our investor network.
              </p>
            </div>

            <EmailInput placeholder="Your work email" buttonText="Get Started"></EmailInput>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[32px] font-bold text-primary-500 lg:text-5xl">10%</h2>
              <p className="text-sm text-neutral-200 lg:text-base">
                Beneficial <br /> Cashback
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[32px] font-bold text-primary-500 lg:text-5xl">7M</h2>
              <p className="text-sm text-neutral-200 lg:text-base">
                Satisfied <br /> Customers
              </p>
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h2 className="text-[32px] font-bold text-primary-500 lg:text-5xl">40+</h2>
              <p className="text-sm text-neutral-200 lg:text-base">
                Countries <br /> Available
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src={right}
        alt="Right"
        className="absolute -bottom-40 right-0 -z-10 hidden w-[250px] lg:block lg:w-[355px]"
      />
      <img src={left} alt="Left" className="absolute -bottom-40 left-0 -z-10 hidden w-[250px] lg:block lg:w-96" />
    </div>
  );
}

export default Hero;
