import uber from '../assets/uber.svg';
import amazon from '../assets/amazon.svg';
import ebay from '../assets/ebay.svg';
import walmart from '../assets/walmart.svg';
import pattern from '../assets/pattern.svg';

function Ads() {
  return (
    <div
      className="ads-section flex items-center justify-center bg-additional-navy"
      style={{ backgroundImage: `url(${pattern})` }}
    >
      <div className="container max-w-[334.18px] py-[24px] lg:max-w-[720.46px] lg:py-[56px]">
        <div className="ads-image flex items-center justify-center gap-[48px]">
          <img src={uber} alt="uber" className="h-[13.5px] w-[38.86px] sm:h-auto sm:w-auto" />
          <img src={amazon} alt="amazon" className="h-[13.5px] w-[38.86px] sm:h-auto sm:w-auto" />
          <img src={ebay} alt="ebay" className="h-[13.5px] w-[38.86px] sm:h-auto sm:w-auto" />
          <img src={walmart} alt="walmart" className="h-[13.5px] w-[38.86px] sm:h-auto sm:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default Ads;
