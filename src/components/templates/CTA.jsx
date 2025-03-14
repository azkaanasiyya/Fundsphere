import pattern from '../../assets/patternCTA.svg';
import EmailInput from '../molecules/EmailInput2';

export default function CTA() {
  return (
    <section
      className="container relative z-10 mx-auto -mb-44 max-w-[335px] rounded-[24px] bg-primary-500 px-[16px] py-[48px] text-center shadow-lg md:max-w-[735px] lg:max-w-[1200px] lg:px-[120px]"
      id="cta"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="mx-auto flex w-full max-w-[504px] flex-col items-center gap-[24px]">
        <h1 className="text-[32px] font-bold tracking-wide text-white lg:text-5xl lg:leading-[57.6px]">
          Get started today for better future finance
        </h1>
        <div className="flex max-w-[412px] lg:w-[412px] flex-col gap-8">
          <p className="text-base text-neutral-50 lg:text-[lg]">
            Fundsphere is a compass for business leaders, scale with checking and savings accounts, custom tools, and
            access to our investor network.
          </p>

          <EmailInput placeholder="Your work email" buttonText="Get Started"></EmailInput>
        </div>
      </div>
    </section>
  );
}
